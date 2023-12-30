<script>
    import { browser } from "$app/environment";
    import { navigating, page } from "$app/stores";
    import logo from "../assets/logo.png";
    import AllButton from "./AllButton.svelte";
    import { signIn, signOut } from "@auth/sveltekit/client";

    let menu;
    let signInBtn;
    let navMenuOpen = false;
    const openNavMenu = async () => {
        if (navMenuOpen) {
            menu.classList.remove("left-[0%]");
            menu.classList.add("left-[-100%]");
            // toggleIcon.classList.add("");
            navMenuOpen = false;
            signInBtn.classList.add("bg-primary-color");
            signInBtn.classList.remove("bg-on-primary-hover-color");
        } else {
            if (menu) {
                menu.classList.remove("left-[-100%]");
                menu.classList.add("left-[0%]");
                signInBtn.classList.remove("bg-primary-color");
                signInBtn.classList.add("bg-on-primary-hover-color");
                navMenuOpen = true;
            }
        }
    };

    $: if (navigating) openNavMenu();
</script>

<div
    class="fixed top-3 md:left-10 xl:left-12 left-3 z-[6] cursor-pointer"
    on:click={openNavMenu}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="26"
        viewBox="0 0 448 512"
        ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        /></svg
    >
</div>
<div class="fixed top-2 md:right-10 xl:right-12 right-3 z-[6] cursor-pointer">
    <div class="flex gap-2 xl:gap-5 justify-center items-center">
        <div class="w-fit items-center flex">
            <img src={logo} alt="logo of the website" />
            <p
                class="primary-font text-lg md:text-xl xl:text-2xl font-bold text-on-primary-color"
            >
                DSVedic Astrology
            </p>
        </div>
        <button
            class="primary-font text-lg md:text-xl xl:text-2xl font-bold text-on-primary-color px-5 bg-primary-color rounded-[48px] transition-all"
            bind:this={signInBtn}
            on:click={$page.data.session
                ? async () => {
                      await signOut({ callbackUrl: "/?logout" });
                  }
                : async () => {
                      await signIn("google", {
                          callbackUrl: "/?signedIn",
                      });
                  }}
        >
            <div class="w-full h-full flex">
                {#if $page.data.session}
                    Sign Out
                {:else}
                    Sign In
                {/if}
            </div>
        </button>
    </div>
</div>
<div
    class="flex w-full h-full transition-all fixed left-[-100%] z-[5] flex-col menu primary-color items-center gap-10 text-5xl justify-center"
    bind:this={menu}
>
    <a href="/" class="flex w-full justify-center items-center">
        <div
            class="on-primary-color font-bold primary-font cursor-pointer hover:bg-[#efefef] hover:border-b-4 hover:border-[on-primary-color] px-5 transition-all py-2 rounded-[48px]"
        >
            Home
        </div>
    </a>
    <div
        class="on-primary-color font-bold primary-font cursor-pointer hover:bg-[#efefef] hover:border-b-4 hover:border-[on-primary-color] px-5 transition-all py-2 rounded-[48px]"
    >
        About Us
    </div>
    <div
        class="on-primary-color font-bold primary-font cursor-pointer hover:bg-[#efefef] hover:border-b-4 hover:border-[on-primary-color] px-5 transition-all py-2 rounded-[48px]"
    >
        Contact Us
    </div>
</div>

<style>
</style>
