import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';
dotenv.config();

const cstring = process.env.MONGO_URL;
//@ts-ignore
const client = new MongoClient(cstring);
const database = client.db("DS");
const dsCoursesCollection = database.collection("ds-courses");

const projection = {
    _id: 0,
}

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        throw redirect(302, "/?unauthorised");
    } else {
        if (!process.env.ADMINS.split(",").includes(session.user.email)) {
            throw redirect(302, "/?unauthorised");
        } else {
            if (!event.params.slug) {
                throw redirect(302, "/manage/edit-upload")
            } else {
                const singleCardData = await dsCoursesCollection.findOne({ uuid: event.params.slug.toString().trim() }, { projection: projection });
                return { cardData: singleCardData };
            }
        }
    }
}

export const actions = {
    addNew: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            throw redirect(302, "/?unauthorised");
        } else {
            if (!process.env.ADMINS.split(",").includes(session.user.email)) {
                throw redirect(302, "/?unauthorised");
            } else {
                const formData = await event.request.formData();
                const cardHeading = formData.get("cardHeading");
                const cardAuthor = formData.get("cardAuthor");
                const upcoming = formData.get("upcoming");
                const pageHeading = formData.get("pageHeading");
                const courseInfo = formData.get("courseInfo");
                const numVids = formData.get("numVids");
                let videoTitles = formData.get("videoTitles");
                let videoLinks = formData.get("videoLinks");
                const firstFree = formData.get("firstFree");
                const uuid = formData.get("uuid");
                // console.log(cardHeading);
                // console.log(uuid);
                if (videoTitles) {
                    if (videoTitles.toString().includes(",")) {
                        //@ts-ignore
                        videoTitles = videoTitles.toString().split(",");
                    } else {
                        //@ts-ignore
                        videoTitles = (videoTitles.toString() + ",").split(",");
                        //@ts-ignore
                        videoTitles.pop();
                    }
                }
                if (videoLinks) {
                    if (videoLinks.toString().includes(",")) {
                        //@ts-ignore
                        videoLinks = videoLinks.toString().split(",");
                    } else {
                        //@ts-ignore
                        videoLinks = (videoLinks.toString() + ",").split(",");
                        //@ts-ignore
                        videoLinks.pop();
                    }
                }
                await dsCoursesCollection.updateOne({ uuid: uuid?.toString() }, {
                    $set:
                    {
                        card_heading: cardHeading,
                        card_author: cardAuthor,
                        upcoming: upcoming === 'true',
                        page_heading: pageHeading,
                        course_info: courseInfo,
                        num_vids: numVids,
                        video_titles: videoTitles,
                        video_links: videoLinks,
                        first_free: firstFree === 'true',
                    }
                });
                // console.log("UPDATED");
            }
        }
    }
}