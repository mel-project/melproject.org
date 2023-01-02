<script>
    import GradientCard from "../elements/Card.svelte";
    let _class = "";
    export { _class as class };
</script>

<template>
    <div class={_class + " content-frame"}>
        <div class="content">
            <GradientCard variant="gradient1">
                <h2>Privacy first.<br /> Privacy Second.</h2>
                <p>
                    Our unique encrypted architectures ensures that Aztec
                    transactions are always kept from prying eyes, while also
                    retaining auditably and compliance
                </p>
            </GradientCard>
            <GradientCard variant="gradient1">
                <h2>Defi. DAOS. NFTs.<br /> The wat it should be</h2>
                <p>
                    Aztex connect allows users to confidently access world class
                    DeFi services on Ethereum up to 100x cost savings
                </p>
            </GradientCard>
            <GradientCard variant="gradient1">
                <h2>title</h2>
                <p>content</p>
            </GradientCard>
            <GradientCard variant="gradient1">
                <h2>title</h2>
                <p>content</p>
            </GradientCard>
        </div>
    </div>
</template>

<style lang="scss">
    .content-frame {
        display: flex;
        justify-content: center;
        padding: 0 clamp(0px, 10%, 100rem);
        width: 100%;

        & > .content {
            display: grid;
            gap: clamp(0.5rem, 3%, 3rem);

            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            width: clamp(30rem, 100%, 75rem);
            height: min(60rem, 1000rem);
            & > :global(.card > h2) {
                padding-bottom: 1rem !important;
            }
        }
    }
    @media screen and (max-width: 800px){
        .content-frame {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        padding: 1rem;
        & > .content {
            display: block;
            & > :global(.card > h2) {
                padding-bottom: 1rem !important;
            }
        }
    }
    }
</style>
