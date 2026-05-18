<script lang="ts">
    import { page } from "$app/state";
    let { content, link } = $props();

    let currentRoute = $derived(page.url.pathname === link);
</script>

<a
    href={link}
    class={"text-lg " +
        (currentRoute
            ? "bg-orange-300 text-black"
            : "text-blue-200 hover:bg-orange-300 hover:text-black")}
    >{content}</a
>
