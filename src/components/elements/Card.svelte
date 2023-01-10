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
    export let noisy = true;
    let scale = 30;
    let opacity: number = 10;
    let reload = 0;
    let bubbles = 28;

    let hovered = true;
</script>

<template>
    <div class="card gradient {variant} {_class}"
     on:mouseenter={()=>hovered=true}
     on:mouseleave={()=>hovered=false}
     >
        <div class="filter" class:hovered={hovered} class:noise={noisy} />
        <slot/>
        <!--the architecture would likely change if we wanted to keep a similar idea -->
        {#if variant == "bubbly"}
            {#key reload}
                <div>
                    <Button
                        on:click={() => {
                            reload += 1;
                        }}>Reload Bubbles</Button
                    >
                    <div class="bubble-options">
                        <label for="scale">scale</label><input name="scale" type="text" bind:value={scale} />
                        <label for="opacity">opacity</label><input name="opacity" type="text" bind:value={opacity} />
                        <label for="bubbes">Num Bubbles</label><input name="bubbles" type="text" bind:value={bubbles} />
                    </div>
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
    .bubble-options{
        display: flex;
        flex-direction: column;
    }
    .filter:not(.noise){
        display: none;
        position: absolute;
    }
    .noise {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(https://images.unsplash.com/photo-1580243117731-a108c2953e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80);
        background-size: cover;
        background-repeat: repeat;
        z-index: -998;
        opacity: 10%;
        filter: brightness(100%) contrast(80%) saturate(0%) invert(100%);
        mix-blend-mode: multiply;
        transition: 1s all;
        &.hovered{
            opacity: 0%;
            filter: brightness(60%) contrast(5%) saturate(0%) invert(100%);

        }
    }
    .gradient:is(.gradient1, .gradient2, .gradient3) {
        // position: absolute;
        background-position: 0px 0px;
        background-size: 100% 100%;
        transition: 400ms all, 1s background-size;
        &:hover {
            background-size: 300% 300%;
            cursor: pointer;
        }
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

    .default,.gradient1 {
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
        background-image: none;
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        mix-blend-mode: normal;
    }
</style>
