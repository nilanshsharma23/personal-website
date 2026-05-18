<script lang="ts">
    import RouteLink from "$lib/components/RouteLink.svelte";
</script>

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
        <RouteLink content="[Home]" link="/" />
        <RouteLink content="[About Me]" link="/about-me" />
        <RouteLink content="[Projects]" link="/projects" />
    </div>
</div>
