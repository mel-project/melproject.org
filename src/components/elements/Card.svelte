<script context="module" lang="ts">
    export const Variant = [
        "gradient2",
        "gradient1",
        "default",
        "bubbly",
        "white",
    ] as const;
    let bubbles = 28;
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

    let reload = 0;
</script>

<template>
    <div class={[_class, variant, "card"].join(" ")}>
        {#if variant == "bubbly"}
            {#key reload}
                <Button
                    
                    on:click={() => {
                        reload += 1;
                    }}
                />
                {#each [...range(bubbles)] as _}
                    <GradientBubble
                        scale={12}
                        color={Object.values(Colors)[
                            Math.floor(
                                Math.random() * Object.values(Colors).length
                            )
                        ]}
                        offset="random"
                        opacity={12}
                    />
                {/each}
            {/key}
        {/if}
        <slot />
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    .card {
        z-index: 1;
        overflow: hidden;
        width: clamp(20rem, 100%, 60rem);
        border-radius: 20px;
        padding: 3rem 2rem;
        transition: 400ms all;
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

    .card.gradient1 {
        border: none;
        background: radial-gradient(
            400% 400% at 110% 100%,
            color.scale(colors.$teal, $lightness: 80%) 8%,
            color.scale(colors.$purple, $lightness: 80%) 25%,
            white 37%
        );
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        mix-blend-mode: normal;
    }
    .card.gradient2 {
        border: none;
        background: radial-gradient(
                400% 400% at 110% 100%,
                color.scale(colors.$teal, $lightness: 60%) 8%,
                color.scale(colors.$purple, $lightness: 80%) 25%,
                color.scale(white, $lightness: 100%) 37%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
    }
    .card.white {
        border: none;
        background-color: white;
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        mix-blend-mode: normal;
    }
</style>
