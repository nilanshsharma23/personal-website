<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import PageTemplate from "$lib/components/PageTemplate.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Projects | Nilansh Sharma</title>
</svelte:head>

<PageTemplate>
  <Navbar />
  <div
    class="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-bold text-orange-200"
  >
    Projects
  </div>
  {#each data.projects as project}
    <ProjectCard {project} />
  {/each}
  <Footer />
</PageTemplate>
