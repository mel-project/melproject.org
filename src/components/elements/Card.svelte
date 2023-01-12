<script context="module" lang="ts">
    export const Variant = [
        "white",
        "gradient1",
        "gradient2",
        "gradient3",
        "gradient4",
        "grey-gradient",
        "default",
        "bubbly",
        "square",
    ] as const;
    export type Variant = typeof Variant[number];
    const variant_map: { [key in Variant]: string } = {
        white: "white",
        gradient1: "transformations gradient1",
        gradient2: "gradient2 transformations",
        gradient3: "gradient3 transformations",
        gradient4: "gradient4 transformations",
        "grey-gradient": "grey-gradient transformations",
        default: "default transformations",
        bubbly: "bubbly transformations",
        square: "v-square",
    } as const;
</script>

<script lang="ts">
    import BubbleBackground from "../BubbleBackground.svelte";

    let _class = "";
    export { _class as class };

    export let _variant: typeof Variant[number] = "default";
    export { _variant as variant };
    let variant: string = variant_map[_variant];
    export let noise = false;
    export let interactive = false;
    export let hovered = false;
    export let unpadded = false;
    export let square = false;
</script>

<template>
    <div
        class="{_class} card {variant} "
        class:unpadded
        class:interactive
        class:hovered
        on:mouseenter={() => (hovered = true && interactive)}
        on:mouseleave={() => (hovered = false && interactive)}
    >
        <div class="filter" class:hovered class:noise />
        <slot {hovered} {noise} />
        {#if variant == "bubbly"}
            <BubbleBackground />
        {/if}
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;

    // hide the filter element if it's unused
    .filter:not(.noise) {
        display: none;
        position: absolute;
    }

    .noise {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/noise.png");
        background-size: cover;
        background-repeat: repeat;
        z-index: -998;
        opacity: 50%;
        filter: brightness(100%) contrast(80%) saturate(0%) invert(100%);
        mix-blend-mode: multiply;
        transition: 1000ms all;
        &.hovered {
            opacity: 0%;
            filter: brightness(60%) contrast(5%) saturate(0%) invert(100%);
        }
    }

    .card {
        z-index: 1;
        overflow: hidden;
        border-radius: 20px;
        padding: 3rem 2rem;
        max-height: 100%;
        &.square {
            width: clamp(15rem, 50vw, 50vw);
            height: clamp(15rem, 50vw, 50vw);
        }
        &.hovered {
            // box-shadow: 10px 10px 5px rgba(0,0,0,.1);
            transform: translate(0px, -5px);
        }
        display: grid;
        box-sizing: border-box;
        grid-template-rows: auto;
        & > :global(*) {
            max-width: 100%;
        }
        :global(.gradient-bubble) {
            max-width: none;
        }
        :global(img) {
            // position: absolute;
            // display: none !important;
            // max-height: 100%;
            justify-content: center;
            max-width: auto;
            max-height: 15rem;
        }
        &.unpadded {
            padding: 0;
            border-radius: 0;
        }
        &.transformations {
        // position: absolute;
        transition: 400ms all, 1s background-size;
        background-size: 100% 100%;
        &.hovered {
            background-size: 300% 300%;
            &.gradient4 {
                background-size: 100% 100%;
            }
        }
    }
    }

    .interactive.hovered {
        cursor: pointer;
    }



    .default,
    .gradient1 {
        border: none;

        background: radial-gradient(
            400% 400% at 110% 100%,
            lighten(colors.$teal, 20%) 8%,
            rgba(137, 90, 191, 0.1) 25%,
            white 37%
        );
    }
    .gradient2 {
        border: none;
        background: radial-gradient(
            400% 400% at 0% 0%,
            color.scale(colors.$teal, $lightness: 60%) 8%,
            color.scale(colors.$purple, $lightness: 80%) 25%,
            color.scale(white, $lightness: 100%) 37%
        );
    }
    .gradient3 {
        $LS: 45; // a scale factor for each gradient
        border: none;
        background: radial-gradient(
            400% 400% at 100% 100%,
            color.scale(colors.$light_blue, $lightness: $LS * 1.5%) 0%,
            color.scale(colors.$teal, $lightness: $LS * 1.05%) 10%,
            color.scale(colors.$purple, $lightness: $LS * 2%) 25%,
            white 37%,
            color.scale(colors.$teal) 37%
        );
    }
    .gradient4 {
        $LS: 35; // a lightness scale factor for each gradient
        $size: 75%;
        $bsize: 70%;
        border: none;
        background: radial-gradient(
                $bsize $bsize at bottom left,
                color.scale(colors.$light_blue, $lightness: $LS * 1.5%),
                rgba(255, 255, 255, 0) 100%
            ),
            radial-gradient(
                $size $size at top right,
                color.scale(colors.$teal, $lightness: $LS * 1.3%),
                rgba(255, 255, 255, 0) 100%
            );
    }
    .grey-gradient {
        $LS: 45; // a lightness scale factor for each gradient
        $size: 55%;
        $bsize: 85%; // the size of the bottom gradient
        border: none;
        background: radial-gradient(
                $bsize $bsize at bottom left,
                color.scale(grey, $lightness: $LS * 1.5%),
                rgba(255, 255, 255, 0) 100%
            ),
            radial-gradient(
                $size $size at top right,
                color.scale(grey, $lightness: $LS * 1.7%),
                rgba(255, 255, 255, 0) 100%
            );
    }

    .white {
        border: none;
        background-color: white;
        background-image: none;
    }
</style>
