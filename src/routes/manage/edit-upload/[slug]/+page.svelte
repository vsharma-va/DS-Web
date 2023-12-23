<script>
    import EditForm from "$lib/common/EditForm.svelte";

    export let data;
    // console.log(data.cardData.upcoming);
    // console.log(data.cardData.firstFree);
</script>

<EditForm
    cardHeading={data.cardData.card_heading}
    cardAuthor={data.cardData.card_author}
    upcoming={data.cardData.upcoming}
    upcomingOrReleased={data.cardData.upcoming ? "upcoming" : "released"}
    pageHeading={data.cardData.page_heading}
    courseInfo={data.cardData.course_info}
    numVids={data.cardData.num_vids}
    videoLinks={data.cardData.videos_links}
    videoTitles={data.cardData.video_titles}
    firstFree={data.cardData.first_free ? "yes" : "no"}
    firstFreeBool={data.cardData.first_free}
    uuid={data.cardData.uuid}
/>
