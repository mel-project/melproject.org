<script>
    import GradientCard from "../elements/GradientCard.svelte";
</script>

<template>
    <div class="content-frame">
        <div class="content">
            <GradientCard class="centered">
                <h2>Privacy first.<br> Privacy Second.</h2>
                <p>Our unique encrypted architectures ensures that Aztec transactions are always kept from prying eyes, while also retaining auditably and compliance</p>
            </GradientCard>
            <GradientCard class="centered">
                <h2>Defi. DAOS. NFTs.<br> The wat it should be</h2>
                <p>Aztex connect allows users to confidently access world class DeFi services on Ethereum up to 100x cost savings</p>
            </GradientCard>
            <GradientCard class="centered">
                <h2>title</h2>
                <p>content</p>
            </GradientCard>
            <GradientCard class="centered">
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
            gap: clamp(0.5rem, 2%, 2rem);

            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            width: clamp(30rem, 100%, 75rem);
            height: min(60rem, 1000rem);
            & > :global(.card > h2)  {
                padding-bottom: 1rem !important;
            }
        }
        
    }

</style>
