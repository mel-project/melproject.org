<script lang="ts">
    import Button, {
        Variant as ButtonVariant,
        Size as ButtonSize,
    } from "@src/components/elements/Button.svelte";
    import Card, {
        Variant as CardVariant,
    } from "@src/components/elements/Card.svelte";
</script>

<template>
    <div class="card-grid">
        {#each CardVariant as variant}
            <Card {variant}>
                <div>
                    <h2>
                        varient: "{variant}"
                    </h2>
                    <p>
                        We’re bringing blockchain superpowers out of the “web3”
                        ecosystem. Whether you are writing an on-chain contract
                        or fully off-chain protocol, you’ll have the tools to
                        ensure your app has robust decentralization, censorship
                        resistance, and user-centric incentives.
                    </p>
                </div>
            </Card>
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
</template>

<style lang="scss">
    @use "../../../stylesheets/variables.scss";

    .card-grid {
        background-color: white;
        // container-type: inline-size;
        display: grid;
        gap: 2rem;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: clamp(30rem, 100%, 75rem);
        // height: min(60rem, 1000rem);
    }
    .button-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-flow: row;
    }
</style>
