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
    uuid: 1,
    card_heading: 1,
    card_author: 1,
    upcoming: 1,
}

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        throw redirect(302, "/?unauthorised");
    } else {
        if (!process.env.ADMINS.split(",").includes(session.user.email)) {
            throw redirect(302, "/?unauthorised");
        } else {
            const cardData = await dsCoursesCollection.find({}, { projection: projection }).toArray();
            return { cardData: cardData }
        }
    }
}
