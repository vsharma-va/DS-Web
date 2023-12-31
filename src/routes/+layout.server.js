export const load = async (event) => {
    // console.log(await event.locals.getSession());
    return {
        session: await event.locals.getSession()
    };
};