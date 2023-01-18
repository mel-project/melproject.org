<script context="module" lang="ts">
  export const Size = ["normal", "large"] as const;
  export type Size = typeof Size[number];

  export const Variant = ["default", "gradient1", "white"] as const;
  export type Variant = typeof Variant[number];
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import arrowImage from "@src/assets/images/arrow.png";
  interface $$Props extends HTMLButtonAttributes {
    class?: string;
    size?: Size;
    variant?: Variant;
    arrow?: boolean;
  }

  let _class = "";
  export { _class as class };
  export let size: Size = "normal";
  export let variant: Variant = "white";
  export let arrow: boolean = true;
</script>

<button
  on:click
  class="{variant} {_class}"
  class:btn-lg={size === "large"}
  {...$$restProps}
>
  <slot />
  <img id="arrow" src={arrowImage} alt="" />
</button>

<style lang="scss">
  @use "../../stylesheets/variables.scss" as colors;
  @use "sass:color";

  #arrow {
    height: 0.7rem;
    padding-left: 1rem;
    justify-content: center;
    line-height: 0.1rem;
  }
  button {
    height: fit-content;
    white-space: nowrap;
    background-color: colors.$teal;
    border: 0px solid white;
    color: black;
    transition: 0.5s background-size ease-in-out,
      0.1s background-color ease-in-out;
    max-width: fit-content;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    &:hover {
      background-color: color.scale(colors.$teal, $lightness: -10%);
    }
    &:active {
      background-color: color.scale(colors.$teal, $lightness: -20%);
    }
  }

  .gradient1 {
    color: black;
    background: linear-gradient(
        to bottom left,
        color.scale(colors.$teal, $lightness: 10%) 0%,
        #ffffff00 85%
      ),
      #ffffff;
    // border: 1px solid rgb(218, 218, 218);
    box-shadow: 0px 2px 1px 1px transparent;
    background-size: 100%;
    &:hover {
      background-size: 500%;
    }
  }
  .white {
    $color: 250;
    $grey: rgb($color, $color, $color);
    background-color: $grey;
    box-shadow: 0px 2px 1px 1px rgba(40, 40, 40, 0.092);
    transition: 100ms all ease-in-out,
    100ms background-color ease-in-out,
    10ms box-shadow ease-out;
    &:hover {
      background-color: color.scale($grey, $lightness: -5%);
      box-shadow: 0px 3px 1px 1px rgba(30, 30, 30, 0.092);
    }
    &:active {
      background-color: color.scale($grey, $lightness: -9%);

      // box-shadow: 0px 0px 0px 0px rgba(40, 40, 40, 0.092);
      // background-image: url("../../assets/images/noise.png");
      // background-blend-mode: color-burn;
      // filter: invert(10%);
    }
  }
</style>
