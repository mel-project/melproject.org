<script lang="ts" context="module">
    import Card from "./Card.svelte";


    export const Variant = [
        "plain",
        "gradient1",
    ] as const;
    export type Variant = typeof Variant[number];
    const variant_map: { [key in Variant]: string } = {
        plain: "plain",
        gradient1: "gradient1",
    } as const;
</script>
<script lang="ts">
    let _variant_name: Variant = "plain";
    export {_variant_name as variant};
    let variant: string = variant_map[_variant_name];
</script>
<template>
    <Card class="banner content-container" variant="white" noisy unpadded>
        <div class="content {variant}">
            <slot></slot>
        </div>
    </Card>
</template>

<style lang="scss">
    @use '../../stylesheets/spacing.scss' as spacing;

    // :global(.card.content-container.banner){
    //     display: flex;
    //     flex-direction: row;
    //     margin: spacing.$thin-margin 0s;
    //     padding: spacing.$wide-padding;
    //     border-radius: .7rem;
    //     line-height: 0;
    //     align-items: center;
    //     justify-content: center;
    //     justify-items: center;
    // }
    .content{
        
    }
    :global(.card).gradient1 {
        background-color: var(--light-teal);
    }
    /* .banner2 {
        background-color: var(--teal);

    } */

</style>