<script lang="ts">
    export let from = 0;
    export let to = 1;
    function* range(end: number) {
        let i = 0;
        while (i < end) {
            yield i;
            i++;
        }
    }
</script>
<template>
    {#each [...range(to-from)] as _}
        <slot></slot>
    {/each}
</template>