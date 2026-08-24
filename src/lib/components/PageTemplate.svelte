<script lang="ts">
    let {children} = $props();
</script>


<div
  class="2xl:mx-128 xl:mx-64 lg:mx-32 md:mx-16 sm:mx-8 mx-4 my-8 flex flex-col items-stretch gap-4 text-white text-xl"
>
{@render children?.()}
</div>

