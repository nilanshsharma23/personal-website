<script lang="ts">
    import cinematicuniverse from "$lib/assets/cinematicuniverse.gif";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
  import PageTemplate from "$lib/components/PageTemplate.svelte";
    import RouteLink from "$lib/components/RouteLink.svelte";
</script>

<svelte:head>
    <title>Nilansh Sharma</title>
</svelte:head>

<PageTemplate>
    <Navbar />
    <img
        src={cinematicuniverse}
        alt="pycinemtic universe"
        class="hover:scale-103 duration-300"
    />
    <br />
    <div class="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-bold text-orange-200">hey, i'm nilansh</div>
    <div class="lg:text-lg sm:text-md text-sm">
        known by many names online, nilansh, nilu, and most of all, pyscrap!
    </div>
    <div class="lg:text-lg sm:text-md text-sm">
        the image above is just some of my projects and characters from my games
        or as I like to call them, the pycinematic universe. don't mind them,
        they like being here
    </div>
    <div class="lg:text-lg sm:text-md text-sm">
        for more context about this, go to the <RouteLink
            content="[projects]"
            link="/projects"
        /> page
    </div>
    <br />
    <Footer />
</PageTemplate>
