<script>
    import LoginNotif from "$lib/common/LoginNotif.svelte";
    import LogoutNotif from "$lib/common/LogoutNotif.svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import "../app.css";
    import Footer from "$lib/common/Footer.svelte";
</script>

<LoginNotif/>
<LogoutNotif/>
<Navbar/>
<slot/>
<Footer/>
