<script context="module" lang="ts">
    export const Variant = [
        "white",
        "gradient1",
        "gradient2",
        "gradient3",
        "gradient4",
        "grey-gradient",
        "default",
        "square",
        "clear",
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
        square: "v-square transformations",
        clear: "clear transformations",
    } as const;
</script>

<script lang="ts">
    let _class = "";
    export { _class as class };

    let _id: string = "";
    export { _id as id };
    let id = _id;

    export let _variant: typeof Variant[number] = "default";
    export { _variant as variant };
    let variant: string = variant_map[_variant];

    let _noise = false;
    export { _noise as noise };
    $: noise = _noise ? "noise filter" : ""; // used as a class (could use a variant map here)

    // Interactive controls whether the :hover animations are played
    export let interactive = false;
    // disable the default :: padding: 3rem;
    export let fill = false;

    // keep the card square relative to it's container
    // haven't worked out how to prevent it from growing wider than tall
    // help please
    export let square = false;

    // put here for testing, but shouldn't be used in production
    // unless you want to use it. idk you do you.
    export let hover = false;
    export let clear = false;
</script>

<template>
    <div
        {id}
        class="{_class} card {variant} "
        class:fill
        class:interactive
        class:hover
        class:square
        class:opaque={!clear}
        on:mouseenter={() => (hover = true && interactive)}
        on:mouseleave={() => (hover = false && interactive)}
    >
        <div class="filter" class:hover class:noise />
        <div class="content">
            <slot {hover} {noise} />

        </div>
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    .content{
        z-index: 2;
    }
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
        z-index: 0;
        opacity: 50%;
        filter: brightness(100%) contrast(80%) saturate(0%) invert(100%);
        mix-blend-mode: multiply;
        transition: 1000ms all;
        &.hover {
            opacity: 0%;
            filter: brightness(60%) contrast(5%) saturate(0%) invert(100%);
        }
    }

    .card {
        &.opaque {
            background-color: white !important;
        }
        overflow: hidden;
        border-radius: 20px;
        padding: 3rem 2rem;
        max-height: 100%;
        height: 100%;
        max-width: 100%;
        display: grid;
        box-sizing: border-box;
        grid-template-rows: auto;

        // VARIANTS //////////////////////////////////
        &.v-square,
        &.square {
            aspect-ratio: 1/1;
            width: clamp(15rem, 50vw, 50vw);
            // height: clamp(15rem, 50vw, 50vw);
        }
        &.fill {
            padding: 0;
            border-radius: 0;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        &.default,
        &.gradient1 {
            $light-scale: 1.15;
            border: none;

            background: radial-gradient(
                400% 400% at 110% 100%,
                color.scale(colors.$teal, $lightness:50% * $light-scale) 8%,
                color.scale(colors.$purple, $lightness:80% * $light-scale) 25%,
                white 37%
            );
        }
        &.gradient2 {
            $light-scale: 1.15;
            border: none;
            background: radial-gradient(
                400% 400% at 0% 0%,
                color.scale(colors.$teal, $lightness: 60% * $light-scale) 8%,
                color.scale(colors.$purple, $lightness: 80% * $light-scale) 25%,
                color.scale(white, $lightness: 100%) 37%
            );
        }
        &.gradient3 {
            $LS: 65; // a scale factor for each gradient
            border: none;
            background: radial-gradient(
                400% 400% at 100% 100%,
                color.scale(colors.$light_blue, $lightness: $LS * 1.1%) 0%,
                color.scale(colors.$teal, $lightness: $LS * 1.05%) 10%,
                color.scale(colors.$purple, $lightness: $LS * 1.4%) 25%,
                white 37%,
                color.scale(colors.$teal) 37%
            );
        }

        //  NOT VARIANTS     //////////////////////////////////!
        //   ACTIONS (?)     //////////////////////////////////

        // activated when the mouse enters the card
        &.hover {
            // box-shadow: 10px 10px 5px rgba(0,0,0,.1);
            transform: translate(0px, -5px);
            // background-size: 300% 300%;
            transition: 1s background-size, 1s translate;
            &.gradient4 {
                background-size: 100% 100%;
            }
        }

        //\\  VARIANTS  //\\//\\//\\//\\//\\//\\//\\//\\//\\
        //\\    AGAIN   //\\//\\//\\//\\//\\//\\//\\//\\//\\

        &.gradient4 {
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
        &.grey-gradient {
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

        &.white {
            border: none;
            background-color: white;
            background-image: none;
        }
        &.clear {
            background-color: transparent;
            border: none;
        }

        :global(img) {
            // position: absolute;
            // display: none !important;
            // max-height: 100%;
            justify-content: center;
            max-width: auto;
            max-height: 15rem;
        }

        &.transformations {
            // position: absolute;
            transition: 400ms all, 1s background-size;
            background-size: 100% 100%;
            &.hover {
                background-size: 300% 300%;
                &.gradient4 {
                    background-size: 100% 100%;
                }
            }
        }
    }

    .interactive.hover {
        cursor: pointer;
    }
</style>
