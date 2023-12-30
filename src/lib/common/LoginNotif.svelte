<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";

    let isLoggedIn = $page.data.session ? true : false;
    if (browser) {
        window.history.pushState({}, document.title, window.location.pathname);
    }
</script>

{#if isLoggedIn}
    <div
        class="absolute top-0 w-screen h-fit z-[2000] pointer-events-none flex items-center justify-center"
    >
        <div
            class="text-2xl primary-font text-bold items-center justify-center flex py-2 px-5 tracking-wide border-[5px] rounded-[33px] border-[primary-color] bg-on-primary-color text-on-primary-hover-color ModalPopIn"
        >
            Welcome, {$page.data.session?.user?.name?.split(" ")[0]}!
        </div>
    </div>
{/if}

<style>
    .ModalPopIn {
        transform: translateY(-150px);
        animation-name: login;
        animation-duration: 3000ms;
        animation-iteration-count: 1;
        animation-fill-mode: forward;
        animation-timing-function: ease-in-out;
    }
    @keyframes login {
        0% {
            transform: translateY(-55px);
        }
        25% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-150px);
        }
    }
</style>
