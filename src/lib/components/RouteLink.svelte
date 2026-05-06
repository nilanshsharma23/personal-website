<script lang="ts">
    let { content, link } = $props();
</script>

<a
    href={link}
    class="text-lg text-blue-200 hover:bg-orange-300 hover:text-black"
    >{content}</a
>
