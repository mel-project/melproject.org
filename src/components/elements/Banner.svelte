<script lang="ts" context="module">
    import Card from "./Card.svelte";

    export const Variant = ["plain", "gradient1", "clear"] as const;
    export type Variant = typeof Variant[number];

    const variant_map: { [key in Variant]: string } = {
        plain: "plain",
        gradient1: "gradient1 wide",
        clear: "clear"
    } as const;
</script>

<script lang="ts">

    let _class: string = "";
    export { _class as class } ;

    let _id: string = "";
    export { _id as id } ;
    let id = _id;

    let _variant_name: Variant = "plain";
    export { _variant_name as variant };

    let variant: string = variant_map[_variant_name];

    export let noise = false;
</script>

<template>
    <Card {id} class="banner {_class} content-container" {noise} variant="clear" unpadded>
        <div class="background {variant}" />
        <div class="content {variant}">
            <slot />
        </div>
    </Card>
</template>

<style lang="scss">
    @use "../../stylesheets/spacing.scss" as spacing;
    @use "../../stylesheets/variables.scss" as colors;
    @use "sass:color" as color;
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
            $side: 150%;
            background-image: radial-gradient(
                $side $side at 150% 0%,
                colors.$teal 10%,
                white
            );
        }
        &.clear {
            background-color: transparent;
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

    }
</style>
