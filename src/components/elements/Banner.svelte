<script lang="ts" context="module">
    export const Size = ["normal", "wide"] as const;
    export type Size = typeof Size[number];

    export const Variant = ["plain", "gradient1", "clear", "white"] as const;
    export type Variant = typeof Variant[number];

    const variant_map: { [key in Variant]: string } = {
        plain: "plain",
        gradient1: "gradient1 wide",
        clear: "clear",
        white: "white",
    } as const;
</script>

<script lang="ts">
    let _class: string = "";
    export { _class as class };

    let _id: string = "";
    export { _id as id };
    let id = _id;

    export let size = "normal";

    let _variant_name: Variant = "plain";
    export { _variant_name as variant };

    let variant: string = variant_map[_variant_name];

    export let column = false;
    export let noise = false;
    export let fill = false;
    export let header = false;
</script>

<template>
    <div
        {id}
        class="banner {_class} {variant} content-container {size}"
        class:fill
        class:header
    >   
        <div class="filter" class:noise></div>
        <div class="background {variant}" />
        <div class="content {variant}" class:column>
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
    @use "../../stylesheets/spacing.scss" as spacing;
    @use "../../stylesheets/variables.scss" as colors;
    @use "sass:color" as color;

    .banner.fill{
        margin: 0;
    }
    .banner {
        position: relative;
        display: flex;
        flex-direction: row;
        margin: spacing.$default-margin;
        padding: spacing.$wide-padding;
        border-radius: 0.7rem;
        align-items: center;
        justify-content: center;
        justify-items: center;
        overflow: hidden;
    }
    .banner.header{
        display: flex;
        align-items: baseline;
    }
    .banner.wide {
        height: 30rem;
    }
    .background {
        position: absolute;
        border-radius: inherit;
        z-index: 0;
        &.plain {
            width: 100%;
            height: 100%;
            background-color: var(--light-teal);
        }
        &.gradient1 {
            width: 100%;
            height: 100%;
            $side: 150%;
            background-image: radial-gradient(
                $side $side at 150% 0%,
                colors.$teal 10%,
                white
            );
        }
        &.white {
            display: none;
        }
        &.clear {
            background-color: transparent;
        }
    }
    .content.column {
        display: flex;
        flex-direction: column;
    }


    .content {
        display: flex;
        justify-content: space-around;
        z-index: 999;
        width: 100%;
    }
    .noise {
        $noise-size: 70rem;
        position: absolute;
        width: 100%;
        aspect-ratio: 1/1;
        background-size: $noise-size $noise-size;
        object-fit: cover;
        background-image: url("../../assets/images/noise.png");
        background-repeat: repeat;
        z-index: 1;
        opacity: 10%;
        mix-blend-mode: multiply;
        transition: 1000ms all;
        &.hover {
            opacity: 0%;
            filter: brightness(60%) contrast(5%) saturate(0%) invert(100%);
        }
    }
    .white {
        background: white;
    }
</style>
