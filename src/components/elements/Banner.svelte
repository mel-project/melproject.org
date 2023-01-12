<script lang="ts" context="module">
    import Card from "./Card.svelte";

    export const Variant = ["plain", "gradient1"] as const;
    export type Variant = typeof Variant[number];
    const variant_map: { [key in Variant]: string } = {
        plain: "plain",
        gradient1: "gradient1 wide",
    } as const;
    export type Size = typeof Size[number];
</script>

<script lang="ts">
    let _variant_name: Variant = "plain";
    export { _variant_name as variant };
    export const size: Size = 'small'
    let variant: string = variant_map[_variant_name];
</script>

<template>
    <Card class="banner content-container" variant="white" noise unpadded>
        <div class="background {variant}" />
        <div class="content {variant}">
            <slot />
        </div>
    </Card>
</template>

<style lang="scss">
    @use "../../stylesheets/spacing.scss" as spacing;
    @use "../../stylesheets/variables.scss" as colors;
    :global(.banner) > .background {
        &.plain {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--light-teal);
            z-index: -999;
        }
        &.gradient1 {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -999;
            background-image: radial-gradient(
                circle at top right,
                colors.$teal 10%,
                white
            );
            border: 1px solid red;
        }
    }

    :global(.card.content-container.banner) {
        display: flex;
        flex-direction: row;
        margin: spacing.$thin-margin 0s;
        padding: spacing.$wide-padding;
        border-radius: 0.7rem;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
    .content {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
</style>
