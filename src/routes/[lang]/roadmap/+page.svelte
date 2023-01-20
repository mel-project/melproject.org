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
    let selected_epoch_index = 0
    $: selected_epoch = timeline[selected_epoch_index]
</script>

<div class="timeline">
    <div class="top-banner">
        <Banner size="wide" variant="white" header column>
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
    </div>


    <Banner variant="gradient1">
        <div class="banner-intro">
            <h1>The past and future of Themelio</h1>
            <p>Banners fill their space and come in a thin and wide height</p>
            
            <div class="bottom-section">
                    <ButtonGroup>
                        {#each timeline as epoch,i}
                            <Button size="large" on:click={()=>selected_epoch_index=i} class="epoch-button">{epoch.title}</Button>
                        {/each}
                    </ButtonGroup>
                <div class="full-container">
                    <div class="timeline-description">
                        <h2>{selected_epoch.title}</h2>
                        <p>
                            {selected_epoch.content}
                        </p>
                    </div>
                </div>
            </div>
           
           
        </div>
    </Banner>
</div>

<style lang="scss">
    @use "../../../stylesheets/spacing.scss";

    .timeline{
        border: 1px solid red;
    }
    .top-banner{
        border: 1px solid black;
    }
    .full-container {
        width: 100%;
        display:flex;
        justify-content: center;
    }

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
        .timeline-description {
            display: flex;
            flex-direction: row;
            h2 {
                font-size: 2.6rem;
                padding-right: 4rem;
                border-right: 1px solid rgb(211, 211, 211);
                align-self: center;
                font-weight: 600;
            }
            p {
                padding-left: 4rem;
                flex-basis: 1;
                max-width: 60rem;
                text-align: left;
            }
        }
    }
    .bottom-section{
        gap: 2rem;
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        border: 1px solid black;
        justify-items: center;
        & > *{
            border: 1px solid red;
        }
    }
    .button-group-section{
        display:flex;
        justify-content: center;
        width: min-content;
    }
</style>
