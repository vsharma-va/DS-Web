import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';
dotenv.config();

const cstring = process.env.MONGO_URL;
//@ts-ignore
const client = new MongoClient(cstring);
const database = client.db("DS");
const dsCoursesCollection = database.collection("ds-courses");
const dsOwnershipCollection = database.collection("ds-ownership");

const projection = {
    _id: 0,
}

export const load = async (event) => {
    if (!event.params.slug) {
        throw redirect(302, "/");
    } else {
        const singleCardData = await dsCoursesCollection.findOne({
            uuid: event.params.slug.toString(),
        }, { projection: projection });
        if (singleCardData) {
            const ownershipFound = await dsOwnershipCollection.findOne({
                owns: singleCardData.uuid.toString()
            }, { projection: projection });
            if (ownershipFound) {
                console.log(singleCardData);
                return { courseData: singleCardData, owned: true }
            } else {
                if (singleCardData.first_free) {
                    let firstVidLink = singleCardData.video_links[0];
                    delete singleCardData.video_links;
                    singleCardData.video_links = [firstVidLink];
                    console.log(singleCardData);
                    return { courseData: singleCardData, owned: false };
                } else {
                    delete singleCardData.video_links;
                    console.log(singleCardData);
                    return { courseData: singleCardData, owned: false };
                }
            }
        } else {
            throw redirect(302, "/");
        }
    }
}