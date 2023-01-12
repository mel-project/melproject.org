<script lang="ts">
    import Banner, {
        Variant as BannerVariant,
    } from "@src/components/elements/Banner.svelte";
    import Button, {
        Variant as ButtonVariant,
        Size as ButtonSize,
        Variant,
    } from "@src/components/elements/Button.svelte";
    import Card, {
        Variant as CardVariant,
    } from "@src/components/elements/Card.svelte";

    // note: 'satisfies' allows us to keep the exact duck type
    // here we've specified a type with all `CardVariants` followed by a string
    // a simple example is something like:
    // let number_string_map: {[key: number]: string} = {1: "hello"}
    // this duck type is `{1: "hello"}` but the compiler has broadened to `{[key: number]: string}`
    let card_variant_descriptions: { [key in CardVariant]: string } = {
        gradient1: "A very light radial gradient: teal, purple, white",
        gradient2: "A stronger gradient: teal, purple, white",
        gradient3:
            "same rotations as 1, strength as 2, with an additional color: light-blue",

        default: "gradient1",
        bubbly: "This introduces a component called 'BubbleBackground' and is set to create random layouts. It can sometimes generate very nice images",
        white: "By default white is not interactive and will not perform any animations when hovered",
        gradient4:
            "Used on page 2, it's 2 raidal gradients starting from light-blue (bottom left) and teal and transitioning into translucent",
        "grey-gradient": "",
    };

    let CardOptions = {
        hovered_card: false,
        noise: true,
        interactive: true,
        square: true,
    };
    let toggleHover = () =>{
        CardOptions.hovered_card = !CardOptions.hovered_card
        setTimeout(toggleHover, 1100);
    }
    toggleHover()
</script>

<template>
    <h1>Component Library</h1>
    <h2>Card Grid</h2>
   
    <p class="center info">
        <Card variant="white">
            Except for white, When hovered cards shift up by 1rem, increase the
            gradient size, and remove the noise. The transition takes 1s These
            cards are placed within a grid, filling 100% of a cell's available
            width and height. They also have 1rem of padding all around by
            default.
        </Card>
    </p>
    <Card variant="white">
        <label for="hovered">Hovering Cards</label>
        <input
            type="checkbox"
            data-toggle="toggle"
            bind:checked={CardOptions.hovered_card}
        />
        <label for="noisy">Image Noise</label>
        <input name="noisy" type="checkbox" bind:checked={CardOptions.noise} />
        <label for="interactive">Interactive</label>
        <input name="interactive" type="checkbox" bind:checked={CardOptions.interactive} />
        <label for="square">square</label>
        <input name="square" type="checkbox" bind:checked={CardOptions.square} />
    </Card>

    <div class="card-grid">
        {#each CardVariant as variant}
            <Card
                {variant}
                bind:hovered={CardOptions.hovered_card}
                bind:noise={CardOptions.noise}
                bind:interactive={CardOptions.interactive}
                bind:square={CardOptions.square}
            >
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




    <Banner variant="plain">
        <h2>Banners</h2>
        <p>
            Banners are just cards, but since cards fill their space, they can
            be sized arbitrarily
        </p>
    </Banner>
    <div class="banner-grid">
        {#each BannerVariant as variant}
            <Banner {variant}>
                <h2>variant: "{variant}"</h2>
                <p>and then we are going to do something about it</p>
                <Button>prove it</Button>
            </Banner>
        {/each}
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
    <h2>Bubbles</h2>
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
    .banner-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        gap: 0.5rem;
        margin: 0.5rem 0.5rem;
    }
</style>
