<script context="module" lang="ts">
    let random_placement: () => [string, string] = () => {
        console.log('called random')
        return [
            Math.random() * 100 + "%",
            Math.random() * 100 + "%",
        ] as [string, string];
    };

</script>

<script lang="ts">
    import { Colors } from "@src/utils/colors";

    let _class = "";

    export { _class as class };
    export let color: Colors = Colors.teal;
    export let opacity: number = 40;
    export let scale: number = 10;
    export let offset: [string, string] | "random" = ["0px", "0px"];
    if(offset == "random"){
        offset = random_placement();
    }
</script>

<template>
    <div
        class={"gradient-bubble " + _class}
        style="
    left: {offset[0]};
    top: {offset[1]};
    transform: scale({scale});
    --primary-color: {color};
    opacity: {opacity}%;
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
        width: 10vw;
        height: 10vw;
        background: radial-gradient(
            18% 18% at 50% 50%,
            var(--primary-color) 40%,
            #ffffff00 80%
        );

        opacity: 40%;
    }
</style>
