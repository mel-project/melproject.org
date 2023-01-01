<script lang="ts">
  let _class = "";
  export { _class as class };
</script>

<template>
  <div class={_class + " card"}>
    <slot />
  </div>
</template>

<style lang="scss">
  @use "../../stylesheets/variables.scss" as colors;
  .card {
    border: none;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        400% 400% at 110% 100%,
        lighten(colors.$teal, 20%) 8%,
        rgba(137, 90, 191, 0.1) 25%,
        white 40%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    mix-blend-mode: normal;
    border-radius: 20px;
    padding: 3rem 2rem;

    transition: 400ms all;
    &:hover {
      // box-shadow: 10px 10px 5px rgba(0,0,0,.1);
      transform: translate(0px, -5px);
    }
  }
</style>
