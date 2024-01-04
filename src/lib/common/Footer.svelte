<script>
    import logo from "$lib/assets/logo.png";
</script>

<div class="flex flex-col w-full h-fit">
    <div class="aspect-[960/300] w-full bg-no-repeat bg-center bg-cover svg-spacer"></div>
    <div class="h-[155px] w-full flex flex-col relative bg-primary-color px-3 md:px-5 lg:px-14 lg:justify-normal">
        <div class="flex w-full">
            <div class="flex h-full items-start mt-4 justify-center">
                <img src="{logo}" alt="company logo" class="h-fit">
            </div>
            <div class="flex w-full items-end">
                <p class="primary-font text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-on-primary-color tracking-wider font-normal">
                    DS Vedic Astrology
                </p>
            </div>
        </div>
        <p class="primary-font text-on-primary-color text-lg xl:text-xl font-normal text-left tracking-wider">
            Discover the secrets of your cosmic blueprint and transform your life with the wisdom of Vedic Astrology
        </p>
        <p class="hidden lg:flex primary-font text-on-primary-color text-lg xl:text-xl font-normal text-left tracking-wider">
            Join us on our journey of discovering the secrets of astrology and uncovering your true potential.
        </p>
    </div>
</div>

<style>
    .svg-spacer {
        background-image: url("$lib/assets/layered-waves-haikei.svg");
    }
</style>