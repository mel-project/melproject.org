<script context="module" lang="ts">
  export const Size = ["normal", "large"] as const;
  export type Size = typeof Size[number];
  export const Variant = ["default", "gradient1"] as const;
  export type Variant = typeof Variant[number];
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface $$Props extends HTMLButtonAttributes {
    class?: string;
    size?: Size;
    variant?: Variant;
  }

  let _class = "";
  export {_class as class};
  export let size: Size = "normal";
  export let variant: Variant = "gradient1";



</script>

<button
  on:click
  class="btn btn-primary {variant} {_class}"
  class:btn-lg={size === "large"}
  {...$$restProps}
  >
  <slot />
  </button
>

<style lang="scss">
  @use "../../stylesheets/variables.scss" as colors;
  @use "sass:color";
  button {
    height: fit-content;
    white-space: nowrap;
  }
  .default {
    background-color: colors.$teal;
    border: 0px solid white;
    color: black;
  }
  .gradient1 {
    border: 1px solid rgba(172, 172, 172, 0.077);
    color: black;
    background-color: white;
    background: radial-gradient(
      200% 200% at 0% 100%,
      color.scale(white, $lightness: 0%) 10%,
      color.scale(colors.$teal, $lightness: 0%) 80%
    );
  }
</style>
