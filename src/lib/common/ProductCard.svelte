<script lang="ts">
    import AllButton from "./AllButton.svelte";

    export let cardTitle: string;
</script>

<!-- STYLE 1 -->
<div
    class="w-full h-[333px] px-[30px] py-[33px] lg:px-[44px] lg:py-[33px] flex bg-on-primary-color rounded-[33px]"
>
    <div
        class="w-[70%] lg:w-[60%] flex flex-col h-full justify-between items-start"
    >
        <p class="primary-font text-primary-color text-4xl font-bold text-left">
            {cardTitle}
        </p>
        <AllButton btnText="Start Learning" />
    </div>
    <div
        class="w-[30%] lg:w-[40%] flex flex-col h-full justify-between items-end"
    >
        <div class="flex flex-col w-full h-full justify-end items-end">
            <p
                class="primary-font text-on-primary-hover-color text-lg md:text-xl flex font-bold text-end"
            >
                Deepak Sharma
            </p>
            <p
                class="primary-font text-on-primary-hover-color text-sm md:text-lg flex text-end"
            >
                DSVedic
            </p>
        </div>
    </div>
</div>

<!-- STYLE 2 -->
<!-- <div
    class="w-[45%] h-[666px] p-[61px] flex flex-col border-[1px] border-on-primary-color"
>
    <div class="h-1/2 border-[1px] border-on-primary-color"></div>
</div> -->
