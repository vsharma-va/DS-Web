<script lang="ts">
    import { enhance } from "$app/forms";
    import ProductCard from "$lib/common/ProductCard.svelte";

    export let cardHeading: string = undefined;
    export let cardAuthor: string = undefined;
    export let upcoming: boolean = false;
    export let upcomingOrReleased: string = undefined;
    export let pageHeading: string = undefined;
    export let courseInfo: string = undefined;
    export let numVids: string = undefined;
    export let videoTitles: string[] = [];
    export let videoLinks: string[] = [];
    export let firstFree: string = undefined;
    export let firstFreeBool: boolean = undefined;
    export let uuid: string = "";

    //@ts-ignore
    function submitForm({ formData }) {
        formData.set("cardHeading", cardHeading);
        formData.set("cardAuthor", cardAuthor);
        formData.set("upcoming", upcoming);
        formData.set("pageHeading", pageHeading);
        formData.set("courseInfo", courseInfo);
        formData.set("numVids", numVids);
        formData.set("videoTitles", videoTitles);
        formData.set("videoLinks", videoLinks);
        formData.set("firstFree", firstFreeBool);
        formData.set("uuid", uuid);
    }

    $: upcomingOrReleased == "upcoming"
        ? (upcoming = true)
        : (upcoming = false);

    $: firstFree == "yes" ? (firstFreeBool = true) : (firstFreeBool = false);
</script>

<div class="w-full h-fit">
    <div
        class="flex flex-col w-full h-fit xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] gap-5"
    >
        <div class="flex items-center justify-center">
            <div class="lg:w-[45%] xl:w-[30%] w-full">
                {upcoming}
                <ProductCard cardTitle={cardHeading} {cardAuthor} {upcoming} />
            </div>
        </div>
        <form
            action="?/addNew"
            method="post"
            class="w-full"
            use:enhance={(event) => {
                submitForm(event);
                return async ({ update }) => {
                    update({ reset: false });
                };
            }}
        >
            <div class="flex w-full flex-col gap-5">
                <p
                    class="primary-font text-on-primary-color text-4xl font-bold tracking-wide"
                >
                    Data Input For Front Page Card
                </p>
                <div class="flex flex-col w-1/2">
                    <label for="cardHeading" class="primary-font"
                        >Card Heading</label
                    >
                    <input
                        id="cardHeading"
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                        placeholder="Card Heading"
                        type="text"
                        bind:value={cardHeading}
                    />
                </div>
                <div class="flex flex-col w-1/2">
                    <label for="author" class="primary-font">Author</label>
                    <input
                        id="author"
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                        placeholder="Author"
                        type="text"
                        bind:value={cardAuthor}
                    />
                </div>
                <div class="flex flex-col w-1/2">
                    <!-- <label for="author" class="primary-font">Author</label> -->
                    <select
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus: outline-none focus:border-on-primary-color transition-color"
                        bind:value={upcomingOrReleased}
                    >
                        <option value="" selected disabled
                            >Released or Upcoming?</option
                        >
                        <option value="released">Released</option>
                        <option value="upcoming">Coming Soon</option>
                    </select>
                </div>
            </div>
            <div class="flex w-full flex-col gap-5 mt-7">
                <p
                    class="primary-font text-on-primary-color text-4xl font-bold tracking-wide"
                >
                    Data Input Details Page
                </p>
                <div class="flex flex-col w-1/2">
                    <label for="pageHeading" class="primary-font"
                        >Page Heading</label
                    >
                    <input
                        id="pageHeading"
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                        placeholder="Page Heading"
                        type="text"
                        bind:value={pageHeading}
                    />
                </div>
                <div class="flex flex-col w-1/2">
                    <label for="courseInfo" class="primary-font"
                        >Course Information</label
                    >
                    <textarea
                        id="courseInfo"
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                        placeholder="Few lines about the course"
                        bind:value={courseInfo}
                    />
                </div>
                <div class="flex flex-col w-1/2">
                    <label for="numVids" class="primary-font"
                        >Number of videos</label
                    >
                    <input
                        id="numVids"
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                        placeholder="Number of videos in this course"
                        type="number"
                        min="1"
                        bind:value={numVids}
                    />
                </div>
                <div
                    class="flex flex-col w-full border-2 gap-5 border-on-primary-color rounded-[10px]"
                >
                    {#each { length: Number(numVids) } as _, i}
                        <div
                            class="flex flex-col w-full gap-1 bg-on-primary-hover-color px-5 py-3 rounded-[10px]"
                        >
                            <div class="flex flex-col w-1/2">
                                <label for="vidTitle" class="primary-font"
                                    >Video Title</label
                                >
                                <input
                                    id="vidTitle"
                                    class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                                    placeholder="Title of Video {i + 1}"
                                    type="text"
                                    bind:value={videoTitles[i]}
                                />
                            </div>
                            <div class="flex flex-col w-1/2">
                                <label for="vidTitle" class="primary-font"
                                    >Video Link</label
                                >
                                <input
                                    id="vidTitle"
                                    class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus:outline-none focus:border-on-primary-color transition-color"
                                    placeholder="Link of Video {i + 1}"
                                    type="text"
                                    bind:value={videoLinks[i]}
                                />
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="flex flex-col w-1/2 mb-5">
                    <select
                        class="border-[2px] p-2 primary-font border-primary-color rounded-[10px] focus: outline-none focus:border-on-primary-color transition-color"
                        bind:value={firstFree}
                    >
                        <option value="" selected disabled
                            >Do you want to make the first video free?</option
                        >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="flex flex-col w-full items-center justify-center">
                    <button
                        type="submit"
                        class="px-5 py-2 bg-on-primary-color text-primary-color rounded-[33px] font-bold primary-font hover:-translate-x-1 hover:-translate-y-1 hover:text-on-primary-color hover:bg-primary-color transition-all"
                        >SUBMIT</button
                    >
                </div>
            </div>
        </form>
    </div>
</div>
