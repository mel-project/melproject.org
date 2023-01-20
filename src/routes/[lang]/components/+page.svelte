<script lang="ts">
    import BubbleBackground from "@src/components/elements/BubbleBackground.svelte";
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
    import ButtonGroup from "@src/components/elements/ButtonGroup.svelte";
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
        white: "By default white is not interactive and will not perform any animations when hovered",
        gradient4:
            "Used on page 2, it's 2 raidal gradients starting from light-blue (bottom left) and teal and transitioning into translucent",
        "grey-gradient": "",
        square: "WARNING: incomplete variant.",
        clear: "",
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
    // toggleHover();
</script>

<template>
    <div class="container">
        <h1>Component Library</h1>
        <h2>Card Grid</h2>

        <p class="center info">
            <Card variant="white">
                Except for white, When hover cards shift up by 1rem, increase
                the gradient size, and remove the noise. The transition takes 1s
                These cards are placed within a grid, filling 100% of a cell's
                available width and height. They also have 1rem of padding all
                around by default.
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
            <input
                name="noisy"
                type="checkbox"
                bind:checked={CardOptions.noise}
            />
            <label for="interactive">Interactive</label>
            <input
                name="interactive"
                type="checkbox"
                bind:checked={CardOptions.interactive}
            />
            <!-- <label for="square">square</label>
            <input
                name="square"
                type="checkbox"
                bind:checked={CardOptions.square}
            /> -->
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
                    Banners fill their space and come in a thin and wide height
                </p>
                <div class="bottom-section">
                    <h2>Grid</h2>
                    <p>
                        The grid below is defined by the max height of the
                        banner. Only the "gradient1" banner has a custom height
                    </p>
                </div>
            </div>
        </Banner>
        <div class="banner-grid">
            {#each BannerVariant as variant, index}
                <Banner id="banner{index}" {variant}>
                    <h2>"{variant}"</h2>
                    <p>
                        this is lorem ipsum text auto generated by
                        loremipsum.wordpress.com to remove this watermark
                        subscribe for a small monthly fee
                    </p>
                    <Button>prove it</Button>
                </Banner>
            {/each}
        </div>
        <h2>Bubbles</h2>
        <div class="bubbles">
            <BubbleBackground />
        </div>
        <Banner variant="clear">
            <h1>Buttons</h1>
        </Banner>
        <div class="button-grid">
            {#each ButtonVariant as variant}
                <div class="row">
                    {#each ButtonSize as size}
                        <Button {variant} {size}>
                            variant: "{variant}"
                        </Button>
                    {/each}
                </div>
            {/each}
        </div>
        <Banner variant="clear">
            <h1>Button Group</h1>
        </Banner>
        <div class="button-grid">
            {#each ButtonSize as size}
                {#each ButtonVariant as variant}
                    <div class="row">
                        <ButtonGroup>
                            <Button {variant} {size}>
                                variant: "{variant}"
                            </Button>
                            <Button {variant} {size}>Second to last</Button>
                            <Button {variant} {size} arrow>Laast</Button>
                        </ButtonGroup>
                    </div>
                {/each}
            {/each}
        </div>
    </div>
</template>

<style lang="scss">
    @use "../../../stylesheets/variables.scss";
    @use "../../../stylesheets/spacing.scss" as spacing;
    .container {
        max-width: 100vw;
    }
    .card-grid {
        background-color: white;
        // container-type: inline-size;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 30rem);
        grid-auto-columns: 30rem;
        grid-auto-rows: 30rem;
        overflow: scroll;

        // width: clamp(30rem, 100%, 75rem);
        // height: min(60rem, 1000rem);
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
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        margin-top: 2rem;
        gap: 0.5rem;
        * {
            align-self: center;
            margin: 0;
        }
        :global(.banner#banner0) {
            // border: 1px solid green;
        }

        & > :global(.banner#banner2) {
            // border: 1px solid red;
            :global(.content) {
                // border: 1px solid blue;
                display: flex;
                flex-direction: row;
                gap: 1rem;
                :global(p) {
                    flex-grow: 2;
                }
                :global(button) {
                    flex: 0 0 55rem;
                }
            }
        }

        // margin: 0.5rem 0.5rem;
    }
    .button-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        height: 100%;

        margin: 1rem;
        .row {
            // width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            text-align: center;
        }
    }

    .bubbles {
        height: 100vh;
        position: relative;
    }
</style>
