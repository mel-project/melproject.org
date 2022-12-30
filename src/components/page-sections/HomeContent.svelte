<script>
    import GradientCard from "../elements/GradientCard.svelte";
</script>

<template>
    <div class="content-frame">
        <div class="content">
            <GradientCard>
                <h1>title</h1>
                <p>content</p>
            </GradientCard>
            <GradientCard>
                <h1>title</h1>
                <p>content</p>
            </GradientCard>
            <GradientCard>
                <h1>title</h1>
                <p>content</p>
            </GradientCard>
            <GradientCard>
                <h1>title</h1>
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

        & > * {
            display: grid;
            gap: clamp(0.5rem, 2%, 2rem);

            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            width: clamp(30rem, 100%, 60rem);
            height: min(60rem, 1000rem);
        }
    }
</style>
