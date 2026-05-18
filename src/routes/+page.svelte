<script lang="ts">
    import cinematicuniverse from "$lib/assets/cinematicuniverse.gif";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import RouteLink from "$lib/components/RouteLink.svelte";
</script>

<div
    class="xl:mx-128 lg:mx-64 md:mx-32 sm:mx-16 mx-8 my-8 flex flex-col gap-4 text-white text-xl"
>
    <Navbar />
    <img
        src={cinematicuniverse}
        alt="pycinemtic universe"
        class="hover:scale-103 duration-300"
    />
    <br />
    <div class="text-2xl font-bold text-orange-200">hey, i'm nilansh</div>
    <div>
        known by many names online, nilansh, nilu, and most of all, pyscrap!
    </div>
    <div>
        the image above is just some of my projects and characters from my games
        or as I like to call them, the pycinematic universe. don't mind them,
        they like being here
    </div>
    <div>
        for more context about this, go to the <RouteLink
            content="[projects]"
            link="/projects"
        /> page
    </div>
    <br />
    <Footer />
</div>
