<script lang="ts">
    import BubbleBackground from "@src/components/BubbleBackground.svelte";
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
    import GradientBubble from "@src/components/elements/GradientBubble.svelte";
    import Range from "@src/components/Range.svelte";
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
        square: "A responsive square!! until...",
    };

    let CardOptions = {
        hovered_card: false,
        noise: true,
        interactive: true,
        square: true,
    };
    let toggleHover = () => {
        CardOptions.hovered_card = !CardOptions.hovered_card;
        setTimeout(toggleHover, 2000);
    };
    toggleHover();
</script>

<template>
    <div class="container">
        <h1>Component Library</h1>
        <h2>Card Grid</h2>
    
        <p class="center info">
            <Card variant="white">
                Except for white, When hover cards shift up by 1rem, increase the
                gradient size, and remove the noise. The transition takes 1s These
                cards are placed within a grid, filling 100% of a cell's available
                width and height. They also have 1rem of padding all around by
                default.
            </Card>
        </p>
        <Card variant="white">
            <label for="hover">Hovering Cards</label>
            <input
                type="checkbox"
                data-toggle="toggle"
                bind:checked={CardOptions.hovered_card}
            />
            <label for="noisy">Image Noise</label>
            <input name="noisy" type="checkbox" bind:checked={CardOptions.noise} />
            <label for="interactive">Interactive</label>
            <input
                name="interactive"
                type="checkbox"
                bind:checked={CardOptions.interactive}
            />
            <label for="square">square</label>
            <input
                name="square"
                type="checkbox"
                bind:checked={CardOptions.square}
            />
        </Card>
    
        <div class="card-grid">
            {#each CardVariant as variant}
                <Card
                    {variant}
                    bind:hover={CardOptions.hovered_card}
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
    
        <Banner variant="gradient1">
            <div class="banner-intro">
                <h1>The past and future of Themelio</h1>
                <p>
                    Banners are just cards, but since cards fill their space, they
                    can be sized arbitrarily
                </p>
                <div class="bottom-section">
                    <h2>A thing</h2>
                    <p>
                        Banners create a sense of separation between items. 
                    </p>
                </div>
            </div>
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
        <div class="bubbles">
            <BubbleBackground></BubbleBackground>
        </div>
    </div>
</template>

<style lang="scss">
    @use "../../../stylesheets/variables.scss";
    @use "../../../stylesheets/spacing.scss" as spacing;
    .container{
        margin: 0 .5rem;
        max-width: 100%;;
    }
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
    .banner-intro {
        margin: spacing.$thin-margin;
        display: flex;
        flex-direction: column;
        align-content: center;
        width: auto;
        text-align: center;
        gap: 1rem;
        h1 {
            font-size: 3rem;
            font-weight: 500;
        }
        .bottom-section {
            display: flex;
            flex-direction: row;
            h2 {
                padding-right: 4rem;
                border-right: 1px solid black;
                align-self: center;
                flex-basis: 1;
            }
            p {
                padding-left: 4rem;
                flex-basis: 1;
                max-width: 60rem;
                text-align: left;
            }
        }
    }
    .banner-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        gap: 0.5rem;
        margin: 0.5rem 0.5rem;
    }
    .bubbles {
        height: 100vh;
        position: relative;
    }
</style>
