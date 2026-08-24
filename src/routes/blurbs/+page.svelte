<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import PageTemplate from "$lib/components/PageTemplate.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Blurbs</title>
</svelte:head>

<PageTemplate>
  <Navbar />
  <div
    class="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-bold text-orange-200"
  >
    Blurbs (Semi-Daily Tidbits)
  </div>
  {#each data.blurbs as blurb}
    <div>
      <div class="lg:text-lg sm:text-md text-sm font-bold">
        {Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
          blurb.created_at,
        )}
      </div>
      <div class="lg:text-lg sm:text-md text-sm">
        {blurb.blurb}
      </div>
    </div>
  {/each}
  <Footer />
</PageTemplate>
