<script context="module" lang="ts">
  export const Size = ["normal", "large"] as const;
  export type Size = typeof Size[number];
  export const Variant = ["default", "gradient1"] as const;
  export type Variant = typeof Variant[number];
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    class?: string;
    size?: Size;
    variant?: Variant;
  }

  let _class = "";
  export { _class as class };
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
</button>

<style lang="scss">
  @use "../../stylesheets/variables.scss" as colors;
  @use "sass:color";
  button {
    height: fit-content;
    white-space: nowrap;
    background-color: colors.$teal;
    border: 0px solid white;
    color: black;
    transition: .5s background-size ease-in-out;
    max-width: fit-content;
  }

  .gradient1 {
    color: black;
    background: linear-gradient(
        to bottom left,
        color.scale(colors.$teal, $lightness: 10%) 0%,
        #ffffff00 85%
      ),
      #ffffff;
    border: 1px solid rgb(218, 218, 218);
    background-size: 100%;
    &:hover {
      background-size: 500%;
    }
  }
</style>
