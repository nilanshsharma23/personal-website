<script lang="ts">
    let { icon, content, link } = $props();
</script>

<a
    href={link}
    title=""
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-row gap-1 lg:text-lg md:text-md sm:text-sm text-xs text-orange-300 hover:bg-blue-200 hover:text-black"
>
    <i class={icon}></i>
    <div>{content}</div>
</a>
