<script lang="ts">
    import SocialLink from "./SocialLink.svelte";
</script>

<div
    class="flex flex-row gap-0 items-center justify-between border text-lg text-blue-200 py-2 px-4 border-border"
>
    <div class="flex flex-col">
        <SocialLink
            icon="ri-github-fill"
            content="nilanshsharma23"
            link="https://github.com/nilanshsharma23"
        />
        <SocialLink
            icon="ri-linkedin-box-fill"
            content="Nilansh Sharma"
            link="https://in.linkedin.com/in/nilansh-sharma-967b062a5"
        />
    </div>
    <div class="flex flex-col">
        <SocialLink
            icon="ri-mail-fill"
            content="piescrap23@gmail.com"
            link="mailto:piescrap23@gmail.com"
        />
        <SocialLink
            icon="ri-youtube-fill"
            content="pyscrap"
            link="https://youtube.com/@pyscrap"
        />
    </div>
</div>
