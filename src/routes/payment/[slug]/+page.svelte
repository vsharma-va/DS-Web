<script lang="ts">
    import {browser} from "$app/environment";

    export let data;

    if (browser) {
        setTimeout(async () => {
            window.location = data.redirectUrl;
        }, 4000);
    }
</script>

<div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center bg-primary-color rounded-[33px] py-5 px-10 h-fit gap-5">
        <p class="primary-font text-3xl text-on-primary-color text-center tracking-wider">
            REDIRECTING...
        </p>
        <p class="primary-font text-3xl text-on-primary-color text-center tracking-wider">
            Please DON'T refresh the page!!!
        </p>
    </div>
</div>