<script lang="ts">
    import displayImage from "../lib/assets/display-photo.png";
    import displayImageBackground from "../lib/assets/display-image-background.webp";
    import news1 from "$lib/assets/news-clippings/1-1.jpg";
    import news2 from "$lib/assets/news-clippings/2.jpg";
    import news3 from "$lib/assets/news-clippings/3.jpg";
    import news4 from "$lib/assets/news-clippings/4.jpg";
    import news5 from "$lib/assets/news-clippings/5.jpg";

    import type {WithId} from "mongodb";
    import sal from "sal.js";
    import {onMount} from "svelte";
    import AllButton from "$lib/common/AllButton.svelte";
    import NewProductCard from "$lib/common/NewProductCard.svelte";
    import Footer from "$lib/common/Footer.svelte";

    export let data: WithId<Document>[];
    let numberOfStudents = 550;
    onMount(() => {
        sal();
        const interval = setInterval(() => {
            numberOfStudents += Math.floor(Math.random() * 3);
        }, 7000);
    })
</script>

<div class="w-full h-fit px-[1rem] pt-[75px]">
    <div class="flex flex-col w-full h-[506px] sm:h-[430px] md:h-[484px] lg:relative">
        <div class="flex flex-col w-full h-full rounded-[2rem] px-[32px] py-[48px] bg-image-req gap-[0.5rem]">
            <div class="flex w-full items-center justify-start">
                <p class="text-base text-on-primary-hover-color primary-font font-bold leading-[1.5] tracking-wider">
                    WELCOME
                </p>
            </div>
            <div class="flex items-center justify-start max-w-prose">
                <p class="text-[2.4rem] sm:text-[3em] md:text-[4rem] font-normal text-left primary-font text-on-primary-hover-color leading-[1.1] sm:leading-[1.15]">
                    Master Your Karma with well known astrologer <span
                        class="gradient-text">Shri Deepak Sharma</span>
                </p>
            </div>
            <div class="flex flex-col items-end lg:items-start justify-start h-full">
                <div class="flex items-end h-full">
                    <p class="text-[1.2rem] leading-[1.5] text-end primary-font text-primary-color">
                        More than <span class="gradient-text font-bold">{numberOfStudents}</span> students and
                        constantly growing!!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col w-full lg:w-[35%] xl:w-[45%] h-[506px] sm:h-[430px] md:h-[611px] mt-10 lg:absolute lg:top-[55px] lg:right-[2rem]">
        <div class="flex flex-col w-full h-full rounded-[1rem] px-[24px] pt-[16px] pb-[30px] relative overflow-hidden group">
            <div class="flex flex-col w-full h-full items-end justify-end z-[3] relative gap-2">
                <AllButton btnText="Consult"/>
                <AllButton btnText="Explore Courses"/>
            </div>
            <div class="w-full h-full absolute top-0 right-0 group">
                <div class="image-overlay w-full z-[2] h-full absolute top-0 bottom-0">
                </div>
                <img src="{displayImageBackground}" alt="photo background"
                     class="h-full w-full object-cover inline-block absolute top-0 bottom-0 group-hover:scale-110 transition-all duration-400">
                <img src="{displayImage}" alt="Shri Deepak Sharma"
                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-500">
            </div>
        </div>
    </div>
    <div class="flex flex-col mt-[63px] h-fit lg:mt-[350px] lg:gap-[100px]">
        <div class="flex flex-col w-full h-fit mb-[35px] lg:mb-[45px]">
            <p class="primary-font text-on-primary-color text-[3.7rem] md:text-6xl xl:text-7xl leading-[1.15] font-bold text-left tracking-wider duration-400 ease-in-out hover:tracking-widest transition-all">
                Featured Courses
            </p>
        </div>
        <div class="flex flex-col gap-[135px]">
            {#each data.cardData as cardData, i}
                <NewProductCard heading={cardData.card_heading} index="{i}" price="{cardData.cost}"
                                upcoming="{cardData.upcoming}" linkTo="/course/{cardData.uuid}"/>
            {/each}
            <NewProductCard heading="Testing Backgrounds" index="3" price="5100"/>
        </div>
    </div>
    <div class="mt-[250px] flex flex-col sm:flex-row">
        <div
                class="w-full lg:w-1/2 flex flex-col sticky top-[75px] h-[650px] gap-8 justify-center"
        >
            <p
                    class="primary-font text-on-primary-color text-[3.7rem] md:text-6xl xl:text-7xl leading-[1.15] font-bold text-left tracking-wider duration-400 ease-in-out hover:tracking-widest transition-all"
            >
                Media Presence
            </p>
            <p
                    class="primary-font text-on-primary-color text-[1.2rem] leading-[1.5] font-normal text-left tracking-wider"
            >
                See us in action through our gallery, which showcases our latest projects and events covered by local
                and national media.
            </p>
            <div class="flex flex-row w-full h-full justify-center items-end font-normal mt-5 flex-wrap">
                <AllButton btnText="Twitter"/>
                <AllButton btnText="Google"/>
                <AllButton btnText="Whatsapp"/>
                <AllButton btnText="Instagram"/>
            </div>
            <div class="flex flex-col w-full h-full justify-center items-center">
                <p
                        class="primary-font text-on-primary-color text-[1.2rem] leading-[1.5] font-normal text-center tracking-wider duration-400 ease-in-out hover:tracking-widest transition-all"
                >
                    If you have any queries please feel free to reach out at <br>
                    <a href="mailto:dsvedicastrology@gmail.com">dsvedicastrology@gmail.com</a>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-10 h-fit items-center justify-center">
            <!--            <div-->
            <!--                    class="flex flex-col sticky top-[75px] w-full rounded-[33px] bg-on-primary-hover-color h-[333px] px-[44px] py-[66px] items-center justify-start"-->
            <!--            >-->
            <div class="flex flex-col sticky top-[75px] h-[650px] w-[90%] sm:[100%] md:[90%] lg:w-[75%] rounded-[2rem] bg-primary-color p-2">
                <div class="flex flex-col absolute top-5 bg-on-primary-color h-fit w-[35px] p-2 items-center justify-center rounded-[2rem] left-[8px] z-[2]">
                    <p class="primary-font text-[2rem] text-on-primary-hover-color">1</p>
                </div>
                <img src="{news1}" alt="news clipping 1"
                     class="h-full w-full object-fill inline-block display-image rounded-[2rem]">
                <!--            </div>-->
            </div>
            <div class="flex flex-col sticky top-[75px] h-[650px] w-[90%] sm:[100%] md:[90%] lg:w-[75%] rounded-[2rem] bg-primary-color p-2">
                <div class="flex flex-col absolute top-5 bg-on-primary-color h-fit w-[35px] p-2 rounded-[2rem] left-[8px] z-[2]">
                    <p class="primary-font text-[2rem] text-on-primary-hover-color">2</p>
                </div>
                <img src="{news2}" alt="news clipping 2"
                     class="h-full w-full object-fill inline-block display-image rounded-[2rem]">
            </div>
            <div class="flex flex-col sticky top-[75px] h-[650px] w-[90%] sm:[100%] md:[90%] lg:w-[75%] rounded-[2rem] bg-primary-color p-2">
                <div class="flex flex-col absolute top-5 bg-on-primary-color h-fit w-[35px] p-2 rounded-[2rem] left-[8px] z-[2]">
                    <p class="primary-font text-[2rem] text-on-primary-hover-color">3</p>
                </div>
                <img src="{news3}" alt="news clipping 3"
                     class="h-full w-full object-fill inline-block display-image rounded-[2rem]">
            </div>
            <div class="flex flex-col sticky top-[75px] h-[650px] w-[90%] sm:[100%] md:[90%] lg:w-[75%] rounded-[2rem] bg-primary-color p-2">
                <div class="flex flex-col absolute top-5 bg-on-primary-color h-fit w-[35px] p-2 rounded-[2rem] left-[8px] z-[2]">
                    <p class="primary-font text-[2rem] text-on-primary-hover-color">4</p>
                </div>
                <img src="{news4}" alt="news clipping 4"
                     class="h-full w-full object-fill inline-block display-image rounded-[2rem]">
            </div>
            <div class="flex flex-col sticky top-[75px] h-[650px] w-[90%] sm:[100%] md:[90%] lg:w-[75%] rounded-[2rem] bg-primary-color p-2">
                <div class="flex flex-col absolute top-5 bg-on-primary-color h-fit w-[35px] p-2 rounded-[2rem] left-[8px] z-[2]">
                    <p class="primary-font text-[2rem] text-on-primary-hover-color">5</p>
                </div>
                <img src="{news5}" alt="news clipping 5"
                     class="h-full w-full object-fill inline-block display-image rounded-[2rem]">
            </div>
        </div>
    </div>
</div>

<style>
    .bg-image-req {
        background-image: url("../lib/assets/landing_bg.jpg");
        background-position: 50%;
        background-size: cover;
    }

    .gradient-text {
        background-image: linear-gradient(
                135deg,
                hsl(218deg 88% 83%) 4%,
                hsl(220deg 50% 68%) 40%,
                hsl(221deg 36% 54%) 48%,
                hsl(222deg 45% 39%) 52%,
                hsl(217deg 90% 23%) 55%,
                hsl(273deg 24% 41%) 59%,
                hsl(316deg 18% 57%) 65%,
                hsl(342deg 22% 75%) 76%,
                hsl(0deg 3% 93%) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        background-size: 500% auto;
        animation: textShine 7s ease-in-out infinite alternate;
    }

    .image-overlay {
        background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
    }

    .display-image {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        transform-style: preserve-3d;
    }


</style>