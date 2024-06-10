<script>
    import { text } from "@sveltejs/kit";
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { TextPlugin } from "gsap/dist/TextPlugin";
    import { onMount } from "svelte";

    onMount(() => {
        let textAnimationDuration = 1;
        let maxLettersInAll = 7;
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
        let onLoadTimeline = gsap.timeline({
            onComplete: () => {
                textCaptureTimeline.play(0);
            },
        });
        onLoadTimeline.to(".master-text", {
            scale: 1,
            ease: "power4.inOut",
            duration: 1,
        });
        let textCaptureTimeline = gsap.timeline({
            onComplete: () => {
                textCapturePartTwoTimeline.play(0);
            },
        });
        let textCapturePartTwoTimeline = gsap.timeline({
            onComplete: () => {
                textCapturePartThreeTimeline.play(0);
            },
        });
        let textCapturePartThreeTimeline = gsap.timeline();
        textCapturePartThreeTimeline.pause(0);
        textCapturePartTwoTimeline.pause(0);
        textCaptureTimeline.pause(0);
        for (let i = 0; i < 6; i++) {
            textCaptureTimeline.to(
                `.down-text-master-${i + 1}`,
                {
                    y: -((i + 1) * 250),
                    ease: "power4.inOut",
                    duration: textAnimationDuration,
                },
                "<",
            );
            textCaptureTimeline.to(
                `.down-text-your-${i + 1}`,
                {
                    y: 0,
                    ease: "power4.inOut",
                    duration: textAnimationDuration,
                },
                "<",
            );
            textCapturePartTwoTimeline.to(
                `.down-text-your-${i + 1}`,
                {
                    y: -((i + 1) * 250),
                    ease: "power4.inOut",
                    duration: textAnimationDuration,
                },
                "<",
            );
            textCapturePartTwoTimeline.to(
                `.down-text-karma-${i + 1}`,
                {
                    y: 0,
                    ease: "power4.inOut",
                    duration: textAnimationDuration,
                },
                "<",
            );
            textCapturePartThreeTimeline.to(
                `.down-text-karma-${i + 1}`,
                {
                    y: -((i + 1) * 250),
                    ease: "power4.inOut",
                    duration: textAnimationDuration,
                },
                "<",
            );
        }
        textCapturePartThreeTimeline.to(
            ".div-up-1",
            {
                yPercent: -150,
                ease: "power4.inOut",
                duration: 1.2,
            },
            "<0.15",
        );
        textCapturePartThreeTimeline.to(
            ".div-up-2",
            {
                yPercent: -200,
                ease: "power4.inOut",
                duration: 1.2,
            },
            "<",
        );
        textCapturePartThreeTimeline.to(
            ".div-up-3",
            {
                yPercent: -250,
                ease: "power4.inOut",
                duration: 1.2,
            },
            "<",
        );
        textCapturePartThreeTimeline.to('.loading-animation-main', {
            display: 'none',
        })
    });
</script>

<div class="h-[200vh] w-full bg-surface">
    <div class="w-full h-screen fixed top-0 content-center grid grid-cols-3 loading-animation-main">
        <div class="col-start-1 col-end-1 div-up-1 bg-surface-dim h-full w-full absolute top-0"></div>
        <div class="col-start-2 col-end-2 div-up-2 bg-surface-dim h-full w-full absolute top-0"></div>
        <div class="col-start-3 col-end-3 div-up-3 bg-surface-dim h-full w-full absolute top-0"></div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row w-full"
        >
            <div
                class="text-9xl text-center w-full h-full text-primary primary-font tracking-wide scale-125 flex flex-row items-center justify-center overflow-hidden master-text"
            >
                <span class="down-text-master-1">M</span>
                <span class="down-text-master-2">A</span>
                <span class="down-text-master-3">S</span>
                <span class="down-text-master-4">T</span>
                <span class="down-text-master-5">E</span>
                <span class="down-text-master-6">R</span>
            </div>
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-row"
        >
            <div
                class="text-9xl text-center w-full h-full text-primary primary-font tracking-wide flex flex-row items-center justify-center overflow-hidden your-text"
            >
                <span class="down-text-your-1 translate-y-[150px]">Y</span>
                <span class="down-text-your-2 translate-y-[400px]">O</span>
                <span class="down-text-your-3 translate-y-[800px]">U</span>
                <span class="down-text-your-4 translate-y-[1200px]">R</span>
            </div>
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-row"
        >
            <div
                class="text-9xl text-center w-full h-full text-primary primary-font tracking-wide flex flex-row items-center justify-center overflow-hidden your-text"
            >
                <span class="down-text-karma-1 translate-y-[150px]">K</span>
                <span class="down-text-karma-2 translate-y-[400px]">A</span>
                <span class="down-text-karma-3 translate-y-[800px]">R</span>
                <span class="down-text-karma-4 translate-y-[1200px]">M</span>
                <span class="down-text-karma-4 translate-y-[1600px]">A</span>
            </div>
        </div>
    </div>
</div>
