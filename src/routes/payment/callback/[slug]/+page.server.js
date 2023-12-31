import {MongoClient} from "mongodb";
import Razorpay from "razorpay";
import {redirect} from "@sveltejs/kit";

const razorpayInstance = new Razorpay({
    //@ts-ignore
    key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET
})

// @ts-ignore
const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("DS");
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
        throw redirect(302, "/?callbackFail");
    }

    const payment = await dsPaymentsCollection.findOne({
        reference_id: event.params.slug
    }, {projection: projection})
    if (!payment) {
        throw redirect(302, "/?callbackFail");
    } else {
        const razorpayObj = await razorpayInstance.paymentLink.fetch(payment.id);
        await dsPaymentsCollection.updateOne({
            reference_id: razorpayObj.reference_id
        }, {$set: {status: razorpayObj.status}});
        if (razorpayObj.status === "paid") {
            await dsOwnershipCollection.updateOne({email: session.user.email}, {$set: {$push: {owns: payment.course_id}}});
            throw redirect(302, "/dashboard/?paymentSuccess");
        }
    }
}