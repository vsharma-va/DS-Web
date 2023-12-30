<script lang="ts">
    import AllButton from "$lib/common/AllButton.svelte";

    export let data;
    console.log("HELLO");
    console.log(data);
</script>

<div class="w-full h-fit">
    <div
        class="flex flex-col w-full xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] h-fit gap-10 z-0"
    >
        <div class="flex flex-col w-1/2 pl-[10px] pt-[65px]">
            <p
                class="primary-font text-on-primary-color text-7xl tracking-wider"
            >
                {data.courseData.page_heading}
            </p>
        </div>
        <div
            class="flex flex-col lg:flex-row w-full bg-on-primary-color rounded-[33px] h-fit px-[15px] lg:px-[30px] pt-[50px] pb-[30px] gap-5 lg:gap-8"
        >
            <!-- TODO IMPLEMENT WHAT HAPPENS IF FIRST VIDEO IS NOT FREE -->
            <div
                class="flex flex-col w-full lg:w-[65%] h-[450px] lg:h-[700px] gap-5"
            >
                <p
                    class="primary-font text-primary-color text-3xl tracking-wide pl-[2px]"
                >
                    {data.courseData.video_titles[0]}
                </p>
                <iframe
                    frameborder="0"
                    class="w-full h-full rounded-[33px]"
                    allowfullscreen
                    src="http://www.youtube.com/embed/{data.courseData.video_links[0].split(
                        '?v='
                    )[1]}"
                ></iframe>
            </div>
            <div
                class="flex flex-col md:flex-row lg:flex-col w-full lg:w-[35%] h-fit justify-around gap-5 lg:gap-11"
            >
                <div
                    class="flex flex-col w-full h-[300px] gap-5 rounded-[33px] border-[1px] border-primary-color mt-[0px] lg:mt-[56px] items-center justify-around px-[30px] py-[40px] hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[10px_10px_0px_0px_rgba(175,203,250,1)]"
                >
                    <p
                        class="primary-font text-primary-color text-6xl font-bold tracking-widest"
                    >
                        $5000
                    </p>
                    <AllButton btnText="Buy Course" urlTravelTo="" />
                </div>
                <div
                    class="flex flex-col w-full h-[300px] gap-5 rounded-[33px] border-[1px] border-primary-color items-center justify-around px-[30px] py-[40px] hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[10px_10px_0px_0px_rgba(175,203,250,1)]"
                >
                    <p
                        class="primary-font text-on-primary-hover-color text-3xl font-bold tracking-wide"
                    >
                        {data.courseData.course_info}
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full h-full flex items-center justify-center">
            <div
                class="flex flex-col w-full md:w-[55%] bg-on-primary-hover-color rounded-[33px] h-fit px-[15px] lg:px-[30px] pt-[50px] pb-[50px] justify-center items-start gap-5"
            >
                <p class="primary-font text-on-primary-color text-3xl">
                    Course Content
                </p>
                <div class="flex flex-col w-full gap-5 justify-center">
                    {#each data.courseData.video_titles as videoTitle}
                        <p
                            class="primary-font text-on-primary-color text-3xl border-[1px] border-on-primary-color p-2 rounded-[33px] pl-5 text-start"
                        >
                            {videoTitle}
                        </p>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
