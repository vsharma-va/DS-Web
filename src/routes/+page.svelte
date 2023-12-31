<script lang="ts">
    import displayPhoto from "../lib/assets/profile-photo.jpg";
    import landingImage from "../lib/assets/landing-image.jpeg";
    import AllButton from "$lib/common/AllButton.svelte";
    import ProductCard from "$lib/common/ProductCard.svelte";
    import type { WithId } from "mongodb";
    import sal from "sal.js";

    export let data: WithId<Document>[];
    sal();
</script>

<div class="h-fit w-full">
    <div
        class="flex flex-col lg:flex-row w-full xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] h-fit gap-10 z-0 overflow-x-hidden"
    >
        <div
            class="flex flex-col justify-center items-start gap-3 md:gap-[33px] h-[666px] rounded-[33px] px-[15px] py-[15px] lg:px-[33px] lg:py-[55px] bg-primary-color w-full lg:w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            data-sal="slide-right"
            data-sal-duration="450"
        >
            <p
                class="primary-font text-on-primary-color text-8xl leading-tight font-bold tracking-wider"
            >
                Master Your Karma
            </p>
            <p
                class="primary-font text-on-primary-color text-2xl leading-tight"
            >
                Consult as well as Learn astrology by Shri Deepak Sharma, a
                well-known Educationalist & horoscope analyst in the field of
                OCCULT SCIENCE
            </p>
            <AllButton btnText="Start Exploring" urlTravelTo="#products" />
        </div>
        <div
            class="relative h-[666px] rounded-[33px] bg-primary-color z-0 lg:w-[52%] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            data-sal="slide-left"
            data-sal-duration="450"
        >
            <img
                src={displayPhoto}
                alt="person"
                class="absolute object-cover rounded-[33px] z-0 h-full w-full"
            />
        </div>
    </div>
    <div
        class="relative w-full flex flex-col lg:flex-row xl:px-[39px] md:px-[30px] h-fit px-[10px] pt-[75px]"
    >
        <!-- <div class="w-full h-full flex flex-col"></div> -->
        <!-- <div class="w-1/2 bg-black h-1/2 sticky top-5">
                <p class="primary-font text-xl">HELLO</p>
            </div>
            <div class="w-1/2 h-full flex flex-col sticky top-5 gap-10">
                <div
                    class="w-full h-1/3 sticky top-[65px] bg-primary-color"
                ></div>
                <div
                    class="w-full h-1/3 sticky top-[65px] bg-primary-color"
                ></div>
                <div
                    class="w-full h-1/3 sticky top-[65px] bg-primary-color"
                ></div>
            </div> -->
        <div
            class="w-full lg:w-1/2 flex flex-col sticky top-[75px] h-[333px] items-center justify-center"
        >
            <p
                class="primary-font text-on-primary-color text-5xl font-bold text-center"
            >
                What You Will Learn
            </p>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-10 h-fit">
            <div
                class="flex flex-col sticky top-[75px] w-full rounded-[33px] bg-on-primary-hover-color h-[333px] px-[44px] py-[66px] items-center justify-start"
            >
                <div
                    class="border-[1px] border-black rounded-[33px] px-4 py-1 w-[80%] flex justify-between"
                >
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl font-bold flex"
                    >
                        01
                    </p>
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl flex"
                    >
                        Prashar Astrology
                    </p>
                </div>
            </div>
            <div
                class="flex flex-col sticky top-[190px] w-full rounded-[33px] bg-on-primary-hover-color h-[333px] px-[44px] py-[66px] items-center justify-start"
            >
                <div
                    class="border-[1px] border-black rounded-[33px] px-4 py-1 w-[80%] flex justify-between"
                >
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl font-bold flex"
                    >
                        02
                    </p>
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl flex"
                    >
                        KP Astrology
                    </p>
                </div>
            </div>
            <div
                class="flex flex-col sticky top-[305px] w-full rounded-[33px] bg-on-primary-hover-color h-[333px] px-[44px] py-[66px] items-center justify-start"
            >
                <div
                    class="border-[1px] border-black rounded-[33px] px-4 py-1 w-[80%] flex justify-between"
                >
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl font-bold flex"
                    >
                        03
                    </p>
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl flex"
                    >
                        Astro Vastu
                    </p>
                </div>
            </div>
            <div
                class="flex flex-col sticky top-[420px] w-full rounded-[33px] bg-on-primary-hover-color h-[333px] px-[44px] py-[66px] items-center justify-start"
            >
                <div
                    class="border-[1px] border-black rounded-[33px] px-4 py-1 w-[80%] flex justify-between"
                >
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl font-bold flex"
                    >
                        04
                    </p>
                    <p
                        class="primary-font text-on-primary-color text-xl lg:text-3xl flex"
                    >
                        BNN Advance
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <div
        class="flex w-full flex-col lg:flex-row h-fit flex-wrap justify-around items-center xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] gap-5"
        id="products"
        data-sal="slide-up"
        data-sal-duration="450"
    >
        {#each data.cardData as cardData}
            <div class="lg:w-[45%] xl:w-[30%] w-full">
                <ProductCard
                    cardTitle={cardData.card_heading}
                    cardAuthor={cardData.card_author}
                    upcoming={cardData.upcoming}
                    linkTo="/course/{cardData.uuid}"
                />
            </div>
        {/each}
        <!-- <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="BNN Basics & Advanced" />
        </div>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="Predictive Techniques" />
        </div>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="BNN Advanced" />
        </div>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="Astro Vastu" />
        </div>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="RKP" />
        </div>
        <div class="lg:w-[45%] xl:w-[30%] w-full">
            <ProductCard cardTitle="KP Fundamentals" />
        </div> -->
    </div>
    <div
        class="flex flex-col lg:flex-row w-full xl:px-[39px] md:px-[30px] px-[10px] pt-[75px] h-fit z-0"
        data-sal="slide-up"
        data-sal-duration="450"
    >
        <div
            class="flex flex-col justify-around items-center gap-3 md:gap-[33px] h-[666px] rounded-t-[33px] lg:rounded-l-[33px] lg:rounded-tr-[0px] px-[15px] py-[15px] lg:px-[33px] lg:py-[55px] bg-primary-color w-full lg:w-[55%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
            <p
                class="primary-font text-on-primary-color text-4xl md:text-5xl leading-tight font-extrabold text-center tracking-widest"
            >
                Shri Deepak Sharma
            </p>
            <p
                class="primary-font text-on-primary-color text-xl md:text-2xl text-center"
            >
                Shri Deepak Sharma has more than 10 years of experience in
                consulting and counseling students in the field of horoscopes.
                He is the master of basics.dddd So, if you want to get things in
                the right way then learn the basics and choose the course of
                your desire. Ds astrology dedicate to Occultism by the guidance
                of Shri Deepak Sharma. We not only provide the course to keen
                students but let them learn how practically the star work.
                Courses are desired with a practical approach and by taking
                practical approach and by taking examples of the students In the
                classes.
            </p>
        </div>
        <div
            class="flex bg-black flex-col h-[400px] lg:h-[666px] w-full lg:w-[45%] rounded-b-[33px] lg:rounded-r-[33px] lg:rounded-bl-[0px]"
        ></div>
    </div>
    <div class="flex flex-col lg:flex-row w-full pt-[75px] h-fit z-0">
        <div
            class="h-[400px] w-full px-[30px] pt-[70px] bg-on-primary-hover-color flex flex-col justify-around items-start"
        >
            <p
                class="primary-font text-black text-4xl font-bold tracking-wider w-full"
            >
                DSVedic Astrology
            </p>
            <div
                class="flex flex-col lg:flex-row w-full items-start justify-start lg:gap-10"
            >
                <p
                    class="primary-font text-on-primary-color text-lg font-bold mb-10 w-[85%] text-start"
                >
                    See us in action through our gallery, which showcases our
                    latest projects and events covered by local and national
                    media.
                </p>
                <div class="flex flex-row lg:w-[20%] gap-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                        ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
                            d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                        /></svg
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                        ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
                            d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                        /></svg
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                        ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
                            d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                        /></svg
                    >
                </div>
            </div>
        </div>
    </div>
</div>
