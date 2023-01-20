<script lang="ts">
    import { Banner, Button } from "@src/components";
    import ButtonGroup from "@src/components/elements/ButtonGroup.svelte";
    let lorem = `Bender, being God isn't easy. If you do too much, people get
            dependent on you, and if you do nothing, they lose hope. You have to
            use a light touch. Like a safecracker, or a pickpocket. Morbo can't
            understand his teleprompter because he forgot how you say that
            letter that's shaped like a man wearing a hat`;
    type Epoch = { title: string; content: string };
    let timeline: Epoch[] = [
        { title: "CIRCA 2014", content: lorem },
        { title: "CIRCA 2015", content: lorem },
        { title: "CIRCA 2015", content: lorem },
        { title: "2016", content: lorem },
        { title: "2017", content: lorem },
        { title: "2019", content: lorem },
        { title: "Q1 2019", content: lorem },
        { title: "Q2 2019", content: lorem },
        { title: "Q3 2020", content: lorem },
        { title: "Q2 2021", content: lorem },
        { title: "Q3-Q4 2022", content: lorem },
        { title: "2023-2024", content: lorem },
        { title: "2023-2024", content: lorem },
    ];
</script>

<div class="timeline">
    <Banner size="wide" variant="white" column>
        <h1>Phases of development</h1>
        <p class="bold">Themelio has 4 phases of development</p>
        <p>
            Bender, being God isn't easy. If you do too much, people get
            dependent on you, and if you do nothing, they lose hope. You have to
            use a light touch. Like a safecracker, or a pickpocket. Morbo can't
            understand his teleprompter because he forgot how you say that
            letter that's shaped like a man wearing a hat.
        </p>
    </Banner>

    <Banner variant="gradient1">
        <div class="banner-intro">
            <h1>The past and future of Themelio</h1>
            <p>Banners fill their space and come in a thin and wide height</p>
            <ButtonGroup>
                {#each timeline as epoch}
                    <Button class="epoch-button">{epoch.title}</Button>
                {/each}
            </ButtonGroup>
            <div class="bottom-section">
                <h2>Grid</h2>
                <p>
                    The grid below is defined by the max height of the banner.
                    Only the "gradient1" banner has a custom height
                </p>
            </div>
        </div>
    </Banner>
</div>

<style lang="scss">
    @use "../../../stylesheets/spacing.scss";
    .banner-intro :global(button){
        font-family: 'Clash Display';
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
</style>
