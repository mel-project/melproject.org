<script>
    import Button from "../elements/Button.svelte";
    import Card from "../elements/Card.svelte";

    import SpaceshipImage from "@src/assets/images/spaceship-and-planet.png";
    import ComposableBlocksImage from "@src/assets/images/composable-blocks.png";
    import VaultImage from "@src/assets/images/vault.png";
    import { lang, localize } from "@l10n";
    let _class = "";
    export { _class as class };
</script>

<template>
    <div class={_class + " content-frame"}>
        <div class="content">
            <Card variant="gradient1" noise interactive>
                <div>
                    <h2>Empowering dapps <br />beyond blockchains</h2>
                    <p>
                        We’re bringing blockchain superpowers out of the “web3”
                        ecosystem. Whether you are writing an on-chain contract
                        or fully off-chain protocol, you’ll have the tools to
                        ensure your app has robust decentralization, censorship
                        resistance, and user-centric incentives.
                    </p>
                </div>
                <Button>Read our whitepaper</Button>
                <img src={SpaceshipImage} />
            </Card>
            <Card variant="gradient2" noise interactive>
                <div>
                    <h2>Neutral, composable,<br /> and built for everyone</h2>
                    <p>
                        Decentralized trust should be a no-brainer. Themelio is
                        clean-slate, governance-free, and radically embeddable
                        L1 that makes accessing Web3 superpowers off-chain a
                        breeze.
                    </p>
                </div>
                <Button>Build your own off-chain dApp</Button>
                <img src={ComposableBlocksImage} />
            </Card>
            <Card variant="gradient3" noise interactive>
                <div>
                    <h2>Cross-chain compatibility <br /> built in</h2>
                    <p>
                        Themelio’s new paradigm and the existing DeFi ecosystem
                        don’t have to be at odds. Every Themelio asset can be
                        accessed on EVM-compatible chains through trustless
                        two-way relay contracts.
                    </p>
                </div>
                <Button>Try our testnet relay</Button>
                <img />
            </Card>
            <Card variant="gradient1" noise interactive>
                <div>
                    {@html $localize('page1_monetary_infrastructure',$lang)}
                </div>
                <Button>Learn about Melmint</Button>
                <img src={VaultImage} />
            </Card>
        </div>
    </div>
</template>

<style lang="scss">
    .content-frame {
        display: flex;
        justify-content: center;
        padding: 0 clamp(2rem, 3%, 100rem);
        width: 100%;
    }
    .content {
        & > * {
            max-width: 100%;
            color: red
        }
        // container-type: inline-size;
        display: grid;
        gap: clamp(2rem, 3%, 3rem);

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: clamp(30rem, 100%, 75rem);
        // height: min(60rem, 1000rem);
    }
   
    @media screen and (max-width: 50rem) {
        .content-frame {
            justify-content: center;
            padding: 1rem;
        }
        .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        :global(.card) {
            :global(h2) {
                padding-bottom: 1rem !important;
            }
        }
    }
</style>
