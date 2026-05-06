<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import background from "$lib/assets/background.png";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
