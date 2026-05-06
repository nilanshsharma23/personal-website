<script lang="ts">
    import cinematicuniverse from "$lib/assets/cinematicuniverse.gif";
    import Footer from "$lib/components/Footer.svelte";
    import Link from "$lib/components/RouteLink.svelte";
    import SocialLink from "$lib/components/SocialLink.svelte";
</script>

<div class="mx-128 my-8 flex flex-col gap-4 text-white text-xl">
    <div class="flex flex-col gap-0 border border-border">
        <div
            class="flex flex-row items-center text-center justify-between py-2 px-4 border-b border-b-border text-blue-200 text-lg"
        >
            <div>pyscrap</div>
            <div>Nilansh Sharma</div>
            <div>nilanshsharma</div>
        </div>
        <div
            class="flex flex-row items-center justify-between p-4 text-blue-200 text-lg"
        >
            <Link content="[Home]" link="#" />
            <Link content="[About Me]" link="#" />
            <Link content="[Projects]" link="#" />
        </div>
    </div>
    <img
        src={cinematicuniverse}
        alt="pycinemtic universe"
        class="hover:scale-103 duration-300"
    />
    <br />
    <div class="text-2xl font-bold">hey, i'm nilansh</div>
    <div>
        known by many names online, nilansh, nilu, and most of all, pyscrap!
    </div>
    <div>
        the image above is just some of my projects and characters from my games
        or as I like to call them, the pycinematic universe. don't mind them,
        they like being here
    </div>
    <div>
        for more context about this, go to the <Link
            content="[projects]"
            link="#"
        /> page
    </div>
    <br />
    <Footer />
</div>
