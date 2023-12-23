import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';
dotenv.config();

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        throw redirect(302, "/");
    } else {
        if (!process.env.ADMINS.split(",").includes(session.user.email)) {
            throw redirect(302, "/");
        }
    }
}