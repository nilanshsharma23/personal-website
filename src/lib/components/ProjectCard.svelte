<script lang="ts">
  import SocialLink from "./SocialLink.svelte";

  let {
    project,
  }: {
    project: {
      name: string;
      description: string;
      release: string;
      languages: string[];
      link: string | null;
      source: string | null;
    };
  } = $props();
</script>

<div class="bg-gray-900 p-4 border-border border flex flex-col gap-4">
  <div class="flex flex-row items-center justify-between">
    <div class="text-xl font-bold">{project.name}</div>
    <div class="text-xl text-border">{project.release}</div>
  </div>
  <div class="text-[16px] text-border">{project.description}</div>
  <div class="flex flex-row gap-2">
    {#each project.languages as language}
      <div class="bg-[#eba0ac] text-[16px] text-black py-1 px-2 rounded-sm">
        {language}
      </div>
    {/each}
  </div>

  {#if project.link && project.source}
    <div class="flex flex-row items-center justify-between">
      <SocialLink
        icon="ri-github-line"
        content="View Source"
        link={project.source}
      />
      <SocialLink
        icon="ri-external-link-fill"
        content="Visit"
        link={project.link}
      />
    </div>
  {:else if project.link}
    <SocialLink
      icon="ri-external-link-fill"
      content="Visit"
      link={project.link}
    />
  {:else if project.source}
    <SocialLink
      icon="ri-github-line"
      content="View Source"
      link={project.source}
    />
  {/if}
</div>
