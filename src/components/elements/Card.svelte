<script context="module" lang="ts">
    export const Variant = [
        "gradient1",
        "gradient2",
        "gradient3",
        "default",
        "bubbly",
        "white",
    ] as const;
    function* range(end: number) {
        let i = 0;
        while (i < end) {
            yield i;
            i++;
        }
    }
</script>

<script lang="ts">
    import { Colors } from "@src/utils/colors";
    import Button from "./Button.svelte";
    import GradientBubble from "./GradientBubble.svelte";

    let _class = "";
    export { _class as class };

    export let variant: typeof Variant[number] = "default";
    let scale = 30;
    let opacity: number = 10;
    let reload = 0;
    let bubbles = 28;
</script>

<template>
    <div class={[_class, "card"].join(" ")}>
        <div class="colors">
            <div class="filter" />
            <div class="gradient {variant}" />
        </div>
        <slot />
        {#if variant == "bubbly"}
            {#key reload}
                <div>
                    <Button
                        on:click={() => {
                            reload += 1;
                        }}>Reload Bubbles</Button
                    >
                    scale<input type="text" bind:value={scale} />
                    opacity %<input type="text" bind:value={opacity} />
                    num bubbles<input type="text" bind:value={bubbles} />
                </div>

                {#each [...range(bubbles)] as _}
                    <GradientBubble
                        {scale}
                        color={Object.values(Colors)[
                            Math.floor(
                                Math.random() * Object.values(Colors).length
                            )
                        ]}
                        offset="random"
                        {opacity}
                    />
                {/each}
            {/key}
        {/if}
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    .colors {
        isolation: isolated;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -999;
    }
    .filter {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(https://grainy-gradients.vercel.app/noise.svg);
        background-size: cover;
        z-index: -998;
        opacity: 100%;
        mix-blend-mode: multiply;

        filter: greyscale(100%) contrast(170%) brightness(00%);
    }
    .gradient:is(.gradient1, .gradient2, .gradient3) {
        position: absolute;
        background-position: 0px 0px;
        background-size: 100% 100%;
        transition: 400ms all, 1s background-size;
        &:hover {
            background-size: 300% 300%;
            cursor: pointer;
        }
        z-index: -999;
        opacity: 100%;
        width: 100%;
        height: 100%;
    }
    .card {
        z-index: 1;
        overflow: hidden;
        border-radius: 20px;
        padding: 3rem 2rem;
        transition: 400ms transform;
        min-height: 30rem;
        &:hover {
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
    }

    .gradient1 {
        border: none;

        background: radial-gradient(
            400% 400% at 110% 100%,
            lighten(colors.$teal, 20%) 8%,
            rgba(137, 90, 191, 0.1) 25%,
            white 37%
        );
    }

    .gradient3 {
        $LS: 45;
        border: none;
        background: radial-gradient(
            400% 400% at 100% 100%,
            color.scale(colors.$light_blue, $lightness: $LS * 1.5%) 0%,
            color.scale(colors.$teal, $lightness: $LS * 1.05%) 10%,
            color.scale(colors.$purple, $lightness: $LS * 2%) 25%,
            white 37%,
            color.scale(colors.$teal) 37%
        );
        // scale: 10;
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        mix-blend-mode: normal;
    }
    .gradient2 {
        border: none;
        background: radial-gradient(
                400% 400% at 0% 0%,
                color.scale(colors.$teal, $lightness: 60%) 8%,
                color.scale(colors.$purple, $lightness: 80%) 25%,
                color.scale(white, $lightness: 100%) 37%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
    }
    .white {
        border: none;
        background-color: white;
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        mix-blend-mode: normal;
    }
</style>