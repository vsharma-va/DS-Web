import {MongoClient} from "mongodb";
import Razorpay from "razorpay";
import {v4 as uuidv4} from "uuid";
import jwt from "jsonwebtoken";
import {redirect} from "@sveltejs/kit";

const razorpayInstance = new Razorpay({
    //@ts-ignore
    key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET
})

// @ts-ignore
const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("DS");
const dsCoursesCollection = database.collection("ds-courses");
const dsPaymentsCollection = database.collection("ds-payment");
const dsOwnershipCollection = database.collection("ds-ownership");

const projection = {
    _id: 0,
}

export const load = async (event) => {
    const session = await event.locals.getSession();

    if (!session) {
        throw redirect(302, "/");
    }

    if (!event.params.slug) {
        throw redirect(302, "/");
    } else {
        console.log(process.env.ORIGIN + "/payment/callback/" + "something");

        try {
            let decodedData = jwt.verify(event.params.slug, process.env.PAY_SECRET);
            let courseDetails = await dsCoursesCollection.findOne({
                uuid: decodedData.courseId,
            }, {projection: projection});

            if (!courseDetails) {
                // course unavailable redirect
                throw redirect(302, "/?courseUnavailable");
            }

            let paymentDetails = await dsPaymentsCollection.findOne({
                course_id: courseDetails.uuid, status: "created",
            })
            // if no existing open payments for this course found create a new link
            if (!paymentDetails) {
                const paymentReferenceId = uuidv4();
                let generatedRazorLink = await generatePaymentLink(session, courseDetails.cost, courseDetails.page_heading, paymentReferenceId);
                await dsPaymentsCollection.insertOne({
                    user_name: session.user.name,
                    user_email: session.user.email,
                    amount_to_pay: courseDetails.cost,
                    status: generatedRazorLink.status,
                    reference_id: paymentReferenceId,
                    course_id: courseDetails.uuid,
                    razor_link_id: generatedRazorLink.id,
                    razor_short_url: generatedRazorLink.short_url,
                });
                return {redirectUrl: generatedRazorLink.short_url};
            } else {
                // three cases here -> it is possible the status of the payment link was updated
                // in the db. Therefore, check for its status in razorpaydb and update it accordingly
                // in our own db.

                let fetchedRazorLink = await razorpayInstance.paymentLink.fetch(paymentDetails.razor_link_id);
                if (fetchedRazorLink.status === "created") {
                    return {redirectUrl: fetchedRazorLink.short_url};
                } else if (fetchedRazorLink.status === "cancelled" || fetchedRazorLink.status === "expired") {
                    const paymentReferenceId = uuidv4();
                    let generatedRazorLink = await generatePaymentLink(session, courseDetails.cost, courseDetails.page_heading, paymentReferenceId);
                    await dsPaymentsCollection.updateOne({
                        reference_id: fetchedRazorLink.reference_id,
                    }, {
                        $set: {
                            amount_to_pay: courseDetails.cost,
                            status: generatedRazorLink.status,
                            reference_id: paymentReferenceId,
                            course_id: courseDetails.uuid,
                            razor_link_id: generatedRazorLink.id,
                            razor_short_url: generatedRazorLink.short_url
                        }
                    });
                    return {redirectUrl: generatedRazorLink.short_url};
                } else if (fetchedRazorLink.status === "paid") {
                    await dsPaymentsCollection.updateOne({
                        reference_id: fetchedRazorLink.reference_id,
                    }, {$set: {status: fetchedRazorLink.status}});

                    await dsOwnershipCollection.updateOne({
                        email: session.user.email,
                    }, {$set: {$push: {owns: courseDetails.uuid}}});

                    // noinspection ExceptionCaughtLocallyJS
                    throw redirect(302, "/dashboard");
                }
            }
        } catch (err) {
            throw redirect(302, "/");
        }
    }
}

async function generatePaymentLink(session, courseFees, courseName, paymentReferenceId) {
    return await razorpayInstance.paymentLink.create({
        reference_id: paymentReferenceId,
        amount: courseFees * 100,
        currency: 'INR',
        accept_partial: false,
        description: "DS Vedic Astrology Course Fees",
        customer: {
            name: session.user.name || "", email: session.user.email || "", contact: "+910000000000",
        },
        notify: {
            email: true, sms: false,
        },
        reminder_enable: false,
        notes: {
            name: session.user.name || "", type: courseName, session_email: session.user.email,
        },
        callback_url: process.env.ORIGIN + "/payment/callback/" + paymentReferenceId,
        callback_method: 'get'
    }).catch((error) => {
        console.log(error);
        throw redirect(302, "/?paymentGenerationError")
    })
}