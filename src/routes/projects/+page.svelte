<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import projectData from "$lib/assets/projects.json";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<svelte:head>
  <title>Projects | Nilansh Sharma</title>
</svelte:head>

<div
  class="xl:mx-128 lg:mx-64 md:mx-32 sm:mx-16 mx-8 my-8 flex flex-col gap-4 text-white text-xl"
>
  <Navbar />
  <div class="text-2xl font-bold text-orange-200">Projects</div>
  {#each projectData as project}
    <ProjectCard {project} />
  {/each}
  <Footer />
</div>
