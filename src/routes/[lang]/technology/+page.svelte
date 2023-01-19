<script lang="ts">
    import { Banner, Button, Card } from "@src/components";
    import RockyMoon from "@src/assets/images/moon.png";
    import LayeredPlanet from "@src/assets/images/richplanet.png";
    import IconSheet from "@src/assets/images/mini_icons.png";
    type Component = typeof LayeredPlanet;
    type InfoCard = { image?: Component; title: string; message: string };
    let info_cards: InfoCard[] = [
        {
            image: IconSheet,
            title: "Robust endogenous trust",
            message: "lorem.com",
        },
        {
            image: IconSheet,
            title: "Covenant-powered smart coins",
            message: "lorem.com",
        },
        {
            image: IconSheet,
            title: "Collusion-resistant consensus game",
            message: "lorem.com",
        },
        {
            image: IconSheet,
            title: "World’s first non-fiat stablecoin",
            message: "lorem.com",
        },
    ];
    let bottom_cards: Record<"dev" | "team", InfoCard> = {
        dev: { title: "Developers", message: "lorem.com" },
        team: { title: "Team", message: "lorem.com" },
    };
</script>

<div class="tech-page">
    <div class="top-banner">
        <Banner variant="white" column>
            <h1>Technology</h1>
            <p>
                Explore Themelio's new blockchain paradign -- rich layered
                applications evolving on a permanent foundation of endogenous trust
            </p>
        </Banner>
    </div>
    <div class="top-cards">
        <Card variant="grey-gradient" noise >
            <img class="moon" src={RockyMoon} alt="" />
            <h2>Traditional platforms & application blockchains</h2>
            <ul>
                <li>Blockchains are tightly coupled to applications</li>
                <li>
                    Application evolution eventually requires the blockchain to
                    adapt
                </li>
                <li>
                    Contentious, destabilizing blockchain protocol changes that
                    undermine endogenous trust
                </li>
            </ul>
        </Card>
        <Card variant="gradient4" noise>
            <img class="planet" src={LayeredPlanet} alt="" />

            <h2>Mel's decoupled architecture</h2>
            <ul>
                <li>
                    Separated from applications by flexible mid-level protocols
                </li>
                <li>
                    Applications and protocols can evolve without changing
                    layer-1 blockchain
                </li>
                <li>
                    Powerful enough to build layer-2 protocols that inherit the
                    blockchain's security
                </li>
                <li>
                    Governance-free, immutable blockchain that needs no change
                </li>
            </ul>
        </Card>
    </div>
    <Banner>
        <div id="banner1">
            <h2>Knowledge base</h2>
            <p>All the resources you need to learn more about Themelio.</p>
            <Button>Read Now</Button>
        </div>
    </Banner>
    <div class="middle-cards">
        {#each info_cards as card, i}
            <Card variant="white" square>
                <div class="info-card-image" id="info-card-image-{i}" />

                <h3>{card.title}</h3>
                <p>{card.message}</p>
            </Card>
        {/each}
    </div>
    <div class="bottom-cards">
        <Card variant="gradient1">
            <img src={bottom_cards.dev.image} alt="" />
            <h3>{bottom_cards.dev.title}</h3>
            <p>{bottom_cards.dev.message}</p>
            <Button variant="gradient1">Documentation</Button>
        </Card>
        <Card variant="gradient2">
            <img src={bottom_cards.team.image} alt="" />
            <h3>{bottom_cards.team.title}</h3>
            <p>{bottom_cards.team.message}</p>
            <Button variant="gradient1">Documentation</Button>
        </Card>
    </div>
</div>

<style lang="scss">
    .top-banner{
        margin-bottom: 5rem;
        p{
            // margin-left: 5rem;
            width:100%;
            text-align: center;
        }
    }
    .moon {
        height: 12rem;
    }
    .planet {
        height: 12rem;
    }
    .top-cards {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
        margin: 1rem;
    }
    #banner1 {
        // border: 1px solid red;
        // margin-bottom: 10rem;
        display: flex;
        justify-content: space-between;
        width:100%;
        gap: 2rem;
        * {
            margin: auto 0;
        }
        h2{
            flex-shrink: 0;
            flex-grow: 0;
        }
        p{
            // flex-basis: 20rem;
            // flex-grow: 1;
            flex-shrink:1;
        }
    }
    .middle-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        img {
            max-height: 5rem;
            max-width: auto;
        }
        h3 {
            height: max-content;
        }
        :global(.card) {
            // border: 1px solid red;
            display: grid;
            grid-auto-rows: max-content;
            grid-template-rows: max-content max-content auto;
        }
        .info-card-image {
            width: 10rem;
            height: 10rem;
            border: 1px solid red;
            background-image: url("../assets/images/noise.png");
        }
    }
    .bottom-cards {
        margin-top: 10rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        :global(.card) {
            width: 100%;
        }
    }
</style>
