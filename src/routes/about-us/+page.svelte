<script>
    import displayImageBackground from "$lib/assets/display-image-background.webp";
    import displayImage from "$lib/assets/display-photo.png";
    import AllButton from "$lib/common/AllButton.svelte";
</script>

<div class="w-full h-fit px-[1rem] pt-[75px]">
    <div class="flex flex-col w-full h-fit relative">
        <div class="w-full h-full flex flex-col items-center justify-start gap-2 sticky top-[75px]">
            <p class="primary-font text-[5em] sm:text-[10em] md:text-[12em] lg:text-[16em] text-center text-on-primary-color font-bold leading-[1.1]">
                DS Vedic Astrology
            </p>
            <p class="primary-font text-2xl text-center text-on-primary-color font-normal leading-[1.1]">

            </p>
        </div>
        <div class="flex flex-col lg:flex-row w-full h-fit rounded-t-[2rem] bg-primary-color mt-20 p-5 gap-5 sticky top-[75px] shadow-[5px_5px_rgba(_180,_202,_246,_0.4),_10px_10px_rgba(_180,_202,_246,_0.3),_15px_15px_rgba(_180,_202,_256,_0.2),_20px_20px_rgba(_180,_202,_246,_0.1),_25px_25px_rgba(_180,_202,_246,_0.05)]">
            <div class="flex flex-col w-full gap-5 lg:gap-5">
                <p class="primary-font text-3xl lg:text-5xl text-left text-on-primary-color font-normal leading[1.1] tracking-wider">
                    About
                </p>
                <p class="primary-font text-xl lg:text-3xl text-left text-on-primary-color font-thin leading[1] tracking-wider">
                    Shri Deepak
                    Sharma
                    has
                    more than 10 years of experience in consulting and counseling students in the field of
                    horoscopes.
                    He is
                    the
                    master of basics.
                    So, if you want to get things in the right way then learn the basics and choose the course of
                    your
                    desire.
                    Ds astrology dedicate to Occultism by the guidance of Shri Deepak Sharma. We not only provide
                    the
                    course
                    to
                    keen students but let them learn how practically the star work.
                    Courses are desired with a practical approach and by taking practical approach and by taking
                    examples of
                    the
                    students In the classes.
                </p>
            </div>
            <div class="flex flex-col w-full h-[300px] sm:h-[475px] lg:h-[475px] lg:w-[55%] rounded-[1rem] px-[24px] pt-[16px] pb-[30px] relative overflow-hidden group">
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
    </div>
    <div
            class="relative w-full flex flex-col lg:flex-row xl:px-[39px] md:px-[30px] h-fit px-[10px] pt-[75px]"
    >
        <div
                class="w-full lg:w-1/2 flex flex-col sticky top-[75px] h-[333px] items-center justify-center"
        >
            <p
                    class="primary-font text-on-primary-color text-[3.7rem] md:text-6xl xl:text-7xl leading-[1.15] font-bold text-left tracking-wider duration-400 ease-in-out hover:tracking-widest transition-all"
            >
                Services
            </p>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-10 h-auto items-center justify-center mb-[155px] lg:mb-[0px]">
            <div
                    class="flex flex-col sticky top-[75px] w-full lg:w-[75%] rounded-[2rem] bg-primary-color h-[375px] sm:h-[350px] p-4 sm:p-8 items-center justify-start shadow-[5px_5px_rgba(_180,_202,_246,_0.4),_10px_10px_rgba(_180,_202,_246,_0.3),_15px_15px_rgba(_180,_202,_256,_0.2),_20px_20px_rgba(_180,_202,_246,_0.1),_25px_25px_rgba(_180,_202,_246,_0.05)] group"
            >
                <div class="flex flex-col w-full h-full items-start ">
                    <div class="rounded-full w-fit flex bg-on-primary-hover-color px-7 py-2 group-hover:bg-on-primary-color group-hover:text-on-primary-hover-color transition-all">
                        <p class="primary-font text-[1rem]">01</p>
                    </div>
                    <div class="w-full h-full flex flex-col gap-5 justify-around">
                        <p class="primary-font text-[2rem] text-on-primary-color tracking-wider">Private Consultancy</p>
                        <p class="primary-font text-[1rem] sm:text-[1.2rem] tracking-wide">Schedule a private consultation with Shri
                            Deepak Sharma.
                            Drop us a message and we will promptly schedule a session for you!</p>
                        <AllButton btnText="Get Consultancy"/>
                    </div>

                </div>
            </div>
            <div
                    class="flex flex-col sticky top-[75px] w-full lg:w-[75%] rounded-[2rem] bg-primary-color h-[375px] sm:h-[350px] p-4 sm:p-8 items-center justify-start shadow-[5px_5px_rgba(_180,_202,_246,_0.4),_10px_10px_rgba(_180,_202,_246,_0.3),_15px_15px_rgba(_180,_202,_256,_0.2),_20px_20px_rgba(_180,_202,_246,_0.1),_25px_25px_rgba(_180,_202,_246,_0.05)] group"
            >
                <div class="flex flex-col w-full h-full items-start ">
                    <div class="rounded-full w-fit flex bg-on-primary-hover-color px-7 py-2 group-hover:bg-on-primary-color group-hover:text-on-primary-hover-color transition-all">
                        <p class="primary-font text-[1rem]">02</p>
                    </div>
                    <div class="w-full h-full flex flex-col gap-5 justify-around">
                        <p class="primary-font text-[2rem] text-on-primary-color tracking-wider">Top Rated Courses</p>
                        <p class="primary-font text-[1rem] sm:text-[1.2rem] tracking-wide">Top quality courses curated for you. Learn
                            at your own pace
                            from any device, any time at your convenience. Resume exactly where you left off. No limits
                            on the number of times you can view video lessons.</p>
                    </div>

                </div>
            </div>
            <div
                    class="flex flex-col sticky top-[75px] w-full lg:w-[75%] rounded-[2rem] bg-primary-color h-[375px] sm:h-[350px] p-4 sm:p-8 items-center justify-start shadow-[5px_5px_rgba(_180,_202,_246,_0.4),_10px_10px_rgba(_180,_202,_246,_0.3),_15px_15px_rgba(_180,_202,_256,_0.2),_20px_20px_rgba(_180,_202,_246,_0.1),_25px_25px_rgba(_180,_202,_246,_0.05)] group"
            >
                <div class="flex flex-col w-full h-full items-start ">
                    <div class="rounded-full w-fit flex bg-on-primary-hover-color px-7 py-2 group-hover:bg-on-primary-color group-hover:text-on-primary-hover-color transition-all">
                        <p class="primary-font text-[1rem]">03</p>
                    </div>
                    <div class="w-full h-full flex flex-col gap-5 justify-around">
                        <p class="primary-font text-[2rem] text-on-primary-color tracking-wider">Awesome Community</p>
                        <p class="primary-font text-[1rem] sm:text-[1.2rem] tracking-wide">Join our community and connect with students
                            from around the world who are just like you. Learn and share with the every growing
                            community.</p>
                        <AllButton btnText="Explore Courses"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .image-overlay {
        background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
    }

    .display-image {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        transform-style: preserve-3d;
    }

    .svg-spacer {
        background-image: url("$lib/assets/layered-waves-haikei.svg");
    }
</style>
