<script context="module" lang="ts">
    export const Variant = [
        "white",
        "gradient1",
        "gradient2",
        "gradient3",
        "gradient4",
        "grey-gradient",
        "gradient-banner1",
        "default",
        "bubbly",
    ] as const;
    export type Variant = typeof Variant[number];
    
</script>

<script lang="ts">
    import BubbleBackground from "../BubbleBackground.svelte";

    let _class = "";
    export { _class as class };

    export let variant: typeof Variant[number] = "default";
    export let noisy = false
    export let interactive = variant != "white";
    export let hovered = false;
</script>

<template>
    <div class="card {variant} {_class}"
    class:interactive
    class:hovered={hovered}
     on:mouseenter={()=>hovered=true && interactive}
     on:mouseleave={()=>hovered=false && interactive}
     >
        <div class="filter" class:hovered={hovered} class:noise={noisy && variant!='white'} />
        <slot {hovered} {noisy}/>
        {#if variant == "bubbly"}
            <BubbleBackground></BubbleBackground>
        {/if}
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;

    .filter:not(.noise){
        display: none;
        position: absolute;
    }
    .noise {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/images/noise.png') ;
        background-size: cover;
        background-repeat: repeat;
        z-index: -998;
        opacity: 50%;
        filter: brightness(100%) contrast(80%) saturate(0%) invert(100%);
        mix-blend-mode: multiply;
        transition: 400ms all;
        &.hovered{
            opacity: 0%;
            filter: brightness(60%) contrast(5%) saturate(0%) invert(100%);

        }
    }
    .interactive.hovered{
        cursor: pointer;
    }

    .card {
        z-index: 1;
        overflow: hidden;
        border-radius: 20px;
        padding: 3rem 2rem;
        transition: 100ms transform;
        max-height: 100%;
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
    }

    .card:is(.gradient1, .gradient2, .gradient3, .gradient4) {
        // position: absolute;
        transition: 400ms all, 1s background-size;
        background-size: 100% 100%;
        &.hovered {
            background-size: 300% 300%;
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
    .gradient2 {
        border: none;
        background: radial-gradient(
                400% 400% at 0% 0%,
                color.scale(colors.$teal, $lightness: 60%) 8%,
                color.scale(colors.$purple, $lightness: 80%) 25%,
                color.scale(white, $lightness: 100%) 37%
            )
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
        $LS: 45; // a scale factor for each gradient
        border: none;
        background: radial-gradient(
            100% 100% at bottom left,
            color.scale(colors.$light_blue, $lightness: $LS * 1.5%)20%,
            white 90%,
            color.scale(colors.$teal, $lightness: $LS * 1.05%) 110%,
        );

        
    }
    .grey-gradient {

    }
 
    .white {
        border: none;
        background-color: white;
        background-image: none;
    }
</style>
