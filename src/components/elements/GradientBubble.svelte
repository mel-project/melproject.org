<script context="module" lang="ts">
    let random_placement: () => [number, number] = () => {
        console.log("called random");
        return [Math.random() * 100 , Math.random() * 100];
    };
</script>

<script lang="ts">
    import { Colors } from "@src/utils/colors";

    let _class = "";

    export { _class as class };
    export let color: Colors = Colors.teal;
    export let opacity: number = 40;
    export let scale: number = 10;
    export let offset: [number, number]| [string,string] | "random" = [0, 0];
    export let z_index: number = -4;
    if (offset == "random") {
        let r = random_placement();
        offset = [r[0]+'%', r[1]+'%'];
    }
    let bubble: HTMLElement;
</script>

<template>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class={"gradient-bubble " + _class}
        style="
    left: calc({offset[0]};
    top: calc({offset[1]};
    transform: scale({scale});
    --primary-color: {color};
    opacity: {opacity}%;
    z-index: {z_index};
    "
    />
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    // @debug color.scale(colors.$teal, $alpha: 100%) 8%;

    .gradient-bubble {
        --primary-color: colors.$teal;
        position: absolute;
        z-index: -999;
        width: 1rem;
        height: 1rem;
        background: radial-gradient(
            circle at center,
            var(--primary-color) 30%,
            #ffffff00 70%
        );
        opacity: 10%;
    }
</style>
