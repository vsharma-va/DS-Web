<script lang="ts">
    import AllButton from "$lib/common/AllButton.svelte";
    import im1 from "$lib/assets/courses-images/1.jpg";
    import im2 from "$lib/assets/courses-images/2.jpg";
    import im3 from "$lib/assets/courses-images/3.jpg";
    import im4 from "$lib/assets/courses-images/4.jpg";

    let imageAssets = [im1, im2, im3, im4];

    export let index: string;
    export let heading: string;
    export let price: string;
    export let upcoming: string;
    export let linkTo: string

</script>
<div class="w-full h-fit flex flex-row">
    <div class="w-full h-[255px] md:h-[350px] lg:h-[420px] xl:h-[502px] rounded-[2rem] flex flex-col items-center justify-start px-[14px] py-[18px] relative">
        <div class="w-full h-full md:w-[85%] lg:w-[90%] xl:w-[85%] absolute top-0 left-0 rounded-[2rem] flex items-center justify-center flex-col group">
            <div class="w-full h-full flex flex-row items-center justify-center px-3 absolute lg:top-[34%] top-[30%] left-0 right-0">
                {#if index === 1 || index === 2}
                    <p class="primary-font text-2xl md:text-[2rem] xl:text-4xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-plus-lighter -rotate-90 absolute left-0 top-6 md:top-10 right-[91%] group-hover:tracking-widest transition-all duration-200 ease-in-out">
                        {#if upcoming === "true"}
                            Upcoming
                        {:else}
                            Released
                        {/if}
                    </p>
                    <p class="primary-font text-2xl md:text-[2rem] xl:text-4xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-plus-lighter absolute -top-[30%] group-hover:tracking-widest transition-all duration-200 ease-in-out">
                        DS Vedic Astrology
                    </p>
                {:else}
                    <p class="primary-font text-2xl md:text-[2rem] xl:text-4xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-color-burn -rotate-90 absolute left-0 top-6 md:top-10 right-[91%] group-hover:tracking-widest transition-all duration-200 ease-in-out">
                        {#if upcoming === "true"}
                            Upcoming
                        {:else}
                            Released
                        {/if}
                    </p>
                    <p class="primary-font text-2xl md:text-[2rem] xl:text-4xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-color-burn absolute -top-[30%] group-hover:tracking-widest transition-all duration-200 ease-in-out">
                        DS Vedic Astrology
                    </p>
                {/if}
                <div class="w-[80%] h-full flex flex-col items-center justify-start absolute top-0">
                    {#if index === 1 || index === 2}
                        <p class="primary-font text-4xl sm:text-5xl xl:text-6xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-plus-lighter text-right md:text-left group-hover:tracking-widest transition-all duration-200 ease-in-out">
                            {heading}
                        </p>
                    {:else}
                        <p class="primary-font text-4xl sm:text-5xl xl:text-6xl text-on-primary-color tracking-wide z-[2] leading-[1.1] font-bold mix-blend-color-burn text-right md:text-left group-hover:tracking-widest transition-all duration-200 ease-in-out">
                            {heading}
                        </p>
                    {/if}
                </div>

                <!--            <div class="w-full h-full flex flex-col items-center justify-start">-->
                <!--                <p class="primary-font text-xl text-black tracking-wide leading-[1.1] font-extralight text-center">-->
                <!--                    Bought By-->
                <!--                </p>-->
                <!--                <p class="primary-font text-xl text-on-primary-color tracking-wide leading-[1.1] font-extralight text-center">-->
                <!--                    54-->
                <!--                </p>-->
                <!--            </div>-->
            </div>
            <!--                <div class="image-overlay w-full z-1 h-full absolute top-0 bottom-0 rounded-[2rem]">-->
            <!--                </div>-->

            <div class="w-full h-full overflow-hidden rounded-[2rem]">
                <img src="{imageAssets[index%(imageAssets.length)]}" alt="random course"
                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-200 ease-in-out rounded-[2rem]">
            </div>
            <div class="w-[85%] sm:w-[50%] md:w-[60%] lg:w-[50%] xl:w-[48%] h-[175px] md:h-[252px] xl:h-[302px] rounded-[2rem] bg-[#191924] p-3 md:p-8 xl:px-10 absolute -bottom-[40%] md:-right-[15%] md:-bottom-[25%] lg:-bottom-[12%] lg:-right-[10%] flex flex-col items-center justify-around">
                <p class="primary-font text-[2rem] md:text-4xl xl:text-[43px] text-on-primary-color tracking-wide leading-[1.175] md:leading-[1.2] xl:leading-[1.2] font-extralight text-center gradient-text z-[2]">
                    ₹{price}
                </p>
                <div class="w-full h-fit flex justify-center items-center">
                    <AllButton btnText="Start Learning" urlTravelTo="{linkTo}"/>
                </div>
            </div>
        </div>

    </div>
    <div class="flex-col hidden w-[35%] lg:flex xl:w-[45%] items-center justify-around gap-5">
        <div class="flex flex-col w-full items-center justify-start">
            <p class="primary-font text-6xl">+4</p>
            <p class="primary-font text-3xl text-center">Full Featured Videos</p>
        </div>
        <div class="flex flex-col w-full items-center justify-start">
            <p class="primary-font text-6xl">12</p>
            <p class="primary-font text-3xl text-center">Hours Of Content</p>
        </div>
    </div>
</div>

<style>
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
        background-image: linear-gradient(rgba(0, 0, 0, 0), #efefef);
    }

    .display-image {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        transform-style: preserve-3d;
    }

    @keyframes textShine {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
</style>