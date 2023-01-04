<script lang="ts">
    let _class = "";
    export {_class as class};
    type css_length = `${number}${string}`;
    export let offset: [css_length, css_length];
    
</script>

<template>
    <div 
    class={"gradient-bubble " + _class}
    style="
    right: {offset[0]};
    top: {offset[1]}
    "
    />
</template>

<style lang="scss">
    @use "sass:color";
    @use "../../stylesheets/variables.scss" as colors;
    @debug color.scale(colors.$teal, $alpha: 100%) 8%;

    .gradient-bubble {
        position: absolute;
        // z-index: -999;
        width: 60vh;
        height: 60vh;
        background: radial-gradient(
            41.47% 41.47% at 50% 50%,
            color.scale(colors.$teal, $alpha: -70%) 40%,
            color.scale(white, $alpha: -100%) 80%
        );
        overflow:visible;
    }
</style>
