<script lang="ts">
    let _class = "";
    export { _class as class };

    const Variants = ["gradient2","gradient1", "default", "white"] as const;
    export let variant: typeof Variants[number] = "default";
</script>

<template>
    <div class={[_class, variant, "card"].join(" ")}>
        <slot />
    </div>
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    .card {
        z-index: 1;
        width: clamp(20rem, 100%, 60rem);
        border-radius: 20px;
        padding: 3rem 2rem;
        transition: 400ms all;
        &:hover {
            // box-shadow: 10px 10px 5px rgba(0,0,0,.1);
            transform: translate(0px, -5px);
        }
    }
    .card.gradient1 {
        border: none;
        background: radial-gradient(
                400% 400% at 110% 100%,
                lighten(colors.$teal, 20%) 8%,
                rgba(137, 90, 191, 0.1) 25%,
                white 37%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
    }
    .card.gradient2 {
        border: none;
        background: radial-gradient(
                400% 400% at 110% 100%,
                color.scale(colors.$teal, $lightness: 60%) 8%,
                color.scale(colors.$purple, $lightness: 80%) 25%,
                color.scale(white, $alpha: 100%) 37%,
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
    }
    .card.white {
        border: none;
        background-color: white;
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
    }
</style>
