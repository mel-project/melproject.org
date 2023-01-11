<script lang="ts">
    import Button, {
        Variant as ButtonVariant,
        Size as ButtonSize,
    } from "@src/components/elements/Button.svelte";
    import Card, {
        Variant as CardVariant,
    } from "@src/components/elements/Card.svelte";

    // note: 'satisfies' allows us to keep the exact duck type 
    // here we've specified a type with all `CardVariants` followed by a string
    // a simple example is something like: 
    // let number_string_map: {[key: number]: string} = {1: "hello"}
    // this duck type is `{1: "hello"}` but the compiler has broadened to `{[key: number]: string}` 
    let card_variant_descriptions = {
        gradient1: "A very light radial gradient: teal, purple, white",
        gradient2: "A stronger gradient: teal, purple, white",
        gradient3: "same rotations as 1, strength as 2, with an additional color: light-blue",
        default: "gradient1",
        bubbly: "This introduces a component called 'BubbleBackground' and is set to create random layouts. It can sometimes generate very nice images",
        white: "By default white is not interactive and will not perform any animations when hovered"
    } satisfies {[key in CardVariant]: string}
    let hovered_card = false;
    let noisy = false;
</script>

<template>
    <h1>Component Library</h1>
    <h2>
        Card Grid
    </h2>
    <p class="center info">
        <Card variant="white">
            Except for white, When hovered cards shift up by 1rem, increase the gradient size, and remove the noise. The transition takes 1s
            These cards are placed within a grid, filling 100% of a cell's available width and height.
            They also have 1rem of padding all around by default.
        </Card>
           </p>
        <Card variant="white">
            <label for="hovered">Hovering Cards</label>
            <input type="checkbox" data-toggle="toggle" bind:checked={hovered_card}>
            <label for="noisy">Image Noise</label>
            <input name="noisy" type="checkbox" bind:checked={noisy}>
        </Card>

    <div class="card-grid">
        {#each CardVariant as variant}
            <Card {variant} bind:hovered={hovered_card} bind:noisy={noisy}>
                <div>
                    <h2>
                        variant: "{variant}"
                    </h2>
                    <p>
                        {card_variant_descriptions[variant]}
                    </p>
                </div>
            </Card>
        {/each}
    </div>
    <h2>Banners</h2>
    <p>Banners are just cards, but since cards fill their space, they can be sized arbitrarily</p>
    <div class="banner">
        <Card variant="gradient-banner1"></Card>
    </div>
    <div class="button-grid">
        {#each ButtonSize as size}
                {#each ButtonVariant as variant}
                <Button {variant} {size}>
                    variant: "{variant}"
                </Button>
            {/each}
        {/each}
    </div>
    <h2>
        Bubbles
    </h2>
    <h2>

    </h2>
</template>

<style lang="scss">
    @use "../../../stylesheets/variables.scss";


    .card-grid {
        background-color: white;
        // container-type: inline-size;
        display: grid;
        gap: 2rem;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 30rem;
        grid-auto-rows: 30rem;
        // width: clamp(30rem, 100%, 75rem);
        // height: min(60rem, 1000rem);
    }
    .button-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-flow: row;
    }
</style>
