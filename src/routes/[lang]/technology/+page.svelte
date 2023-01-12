<script lang="ts">
    import {Banner, Button, Card} from "@src/components";
    import RockyMoon from "@src/assets/images/vault.png";
    import LayeredPlanet from "@src/assets/images/vault.png";
    import type { ComponentType } from "svelte/types/runtime/internal/dev";

    type Component = typeof LayeredPlanet;
    type InfoCard = {image?: Component, title: string, message: string}
    let info_cards: InfoCard[] = [
        {image: RockyMoon, title: "Robust endogenous trust", message: "lorem.com"},
        {image: RockyMoon, title: "Covenant-powered smart coins", message: "lorem.com"},
        {image: RockyMoon, title: "Collusion-resistant consensus game", message: "lorem.com"},
        {image: RockyMoon, title: "World’s first non-fiat stablecoin", message: "lorem.com"},
    ]
    let bottom_cards: Record<'dev' | 'team' ,InfoCard> = {
        dev: {title: "Developers", message: "lorem.com"},
        team: {title: "Team", message: "lorem.com"},
    }
</script>

<div class="tech-page">
    <Banner variant="white" size="wide" column>
        <h1>Technology</h1>
        <p>Explore THemelio's new blockchain paradign -- rich layered applications evolving on a permanent foundation of endogenous trust</p>
    </Banner>
    <div class="top-cards">
        <Card  variant="grey-gradient" square>
            <img src={RockyMoon} alt="">
            <h2>Traditional platforms & application blockchains</h2>
            <ul>
                <li>
                    Blockchains are tightly coupled to applications
                </li>
                <li>
                    Application evolution eventually requires the blockchain to adapt 
                </li>
                <li>
                    Contentious, destabilizing blockchain protocol changes that undermine endogenous trust
                </li>
            </ul>
        </Card>
        <Card variant="gradient4" square>
            <img src={LayeredPlanet} alt="">

            <h2>Mel's decoupled architecture</h2>
            <ul>
                <li>
                    Separated from applications by flexible mid-level protocols
                </li>
                <li>
                    Applications and protocols can evolve without changing layer-1 blockchain
                </li>
                <li>
                    Powerful enough to build layer-2 protocols that inherit the blockchain's security
                </li>
                <li>
                    Governance-free, immutable blockchain that needs no change
                </li>
            </ul>
        </Card>
    </div>
    <Banner id="banner1">
        <h2>
            Knowledge base
        </h2>
        <p>
            All the resources you need to learn more about Themelio.
        </p>
        <Button>Read Now</Button>
    </Banner>
    <div class="middle-cards">
        {#each info_cards as card}
            <Card variant="white" square>
                <img src={card.image} alt="">
                <h3>{card.title}</h3>
                <p>{card.message}</p>
            </Card>
        {/each}
    </div>
    <div class="bottom-cards">
        <Card variant="gradient1">
            <img src={bottom_cards.dev.image} alt="">
            <h3>{bottom_cards.dev.title}</h3>
            <p>{bottom_cards.dev.message}</p>
            <Button variant="gradient1"> Documentation</Button>
        </Card>
        <Card variant="gradient2">
            <img src={bottom_cards.team.image} alt="">
            <h3>{bottom_cards.team.title}</h3>
            <p>{bottom_cards.team.message}</p>
            <Button variant="gradient1"> Documentation</Button>

        </Card>
    </div>
</div>

<style lang="scss">
    .tech-page{

    }
    .top-cards{
        
        display: flex;
        gap: 1rem;
        margin: 1rem;
    }
    :global(#banner1){
        // border: 1px solid red;
        margin-bottom: 10rem;
    }
    .middle-cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        img{
            max-height: 5rem;
            max-width: auto;
        }
        h3{
            height: max-content;

        }
        :global(.card){
            // border: 1px solid red;
            display: grid;
            grid-auto-rows: max-content ;
            grid-template-rows: max-content max-content auto;

        }

    }
    .bottom-cards{
        margin-top: 10rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        :global(.card){
            width: 100%;
        }
    }

    
</style>
