<script lang="ts">
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    @use '../../stylesheets/variables.scss' as colors;
    .card {
        border: none;
        width: 100%;
        background: radial-gradient(
                325.46% 235.35% at 95.25% 89.76%,
            lighten(colors.$green, 10%) 0%,
                rgba(137, 90, 191, .1) 5.53%,
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        mix-blend-mode: normal;
        border-radius: 20px;
    }
</style>

