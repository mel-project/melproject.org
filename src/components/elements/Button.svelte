<script context="module" lang="ts">
  export const Size = ["normal", "large"] as const;
  export type Size = typeof Size[number];

  export const Variant = [
    "default",
    "gradient1",
    "white",
  ] as const;
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
    circle?: boolean;
    border_only?: boolean;
    bold?: boolean;
    hover?: boolean;
  }

  let _class = "";
  export { _class as class };
  export let size: Size = "normal";
  export let variant: Variant = "white";
  export let arrow: boolean = false;
  export let circle: boolean = false;
  export let border_only = false;
  export let bold = true;
  export let hover = false;
</script>

<button
  on:click
  on:mouseenter={()=>hover=true}
  on:mouseleave={()=>hover=false}
  class="{variant} {_class}"
  class:btn-lg={size === "large"}
  {...$$restProps}
  class:arrow
  class:circle
  class:border_only
  class:bold
>
  <slot {hover}/>
  {#if arrow}
    <img id="arrow" src={arrowImage} alt="" />
  {/if}
</button>

<style lang="scss">
  @use "../../stylesheets/variables.scss" as colors;
  @use "sass:color";
  button{
    height: fit-content;
    white-space: nowrap;
    height: fit-content;
    max-width: fit-content;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    border: 0px solid white;
    font-family: 'Supreme';
    font-weight: 500;
    letter-spacing: -.5px;

  }
  .bold{
    font-weight: 600;
  }
  #arrow {
    height: 0.7rem;
    padding-left: 1rem;
    justify-content: center;
  }
  button.circle {
    --r: 0.5rem;
    aspect-ratio: 1/1;
    border-radius: 100%; // make it a circle
    line-height: 0.7rem; // center the arrow
    background-color: transparent;
    border: 1px solid black;
    box-shadow: none;
    padding: calc(var(--r)) var(--r);
    & > * {
      padding: 0 !important;
    }
    &:hover,&.hover{
      background-color: inherit;
    }
    &:active{
      background-color: inherit;
    }
  }
  button.default {
    white-space: nowrap;
    background-color: colors.$teal;
    color: black;
    transition: 0.5s background-size ease-in-out,
      0.1s background-color ease-in-out;

    &:hover,&.hover {
      background-color: color.scale(colors.$teal, $lightness: -10%);
      
    }
    &:active {
      background-color: color.scale(colors.$teal, $lightness: -20%);
    }
  }
  .blue_green {
    $base-color: colors.$blue_green;
    height: fit-content;
    white-space: nowrap;
    background-color: $base-color;
    border: 0px solid white;
    color: black;
    transition: 0.5s background-size ease-in-out,
      0.1s background-color ease-in-out;
    max-width: fit-content;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    &:hover,&.hover {
      background-color: color.scale($base_color, $lightness: -10%);
    }
    &:active {
      background-color: color.scale($base_color, $lightness: -20%);
    }
  }
  .gradient1 {
    color: black;
    $base-color: color.scale(colors.$teal, $lightness: 30%);
    background: linear-gradient(to bottom left, $base-color 0%, #ffffff00 95%),
      #ffffff;
    border: 1px solid rgb(217, 217, 217);
    box-shadow: 0px 2px 1px 1px transparent;
    background-size: 100%;
    &:hover,&.hover {
      background-color: color.scale($base-color, $lightness: -10%);
      background-size: 100%;
    }
    &:active {
      background-color: color.scale($base-color, $lightness: -20%);
    }
  }
  .white {
    $color: 250;
    $grey: rgb($color, $color, $color);
    background-color: $grey;
    box-shadow: 0px 2px 1px 1px rgba(40, 40, 40, 0.092);
    transition: 100ms all ease-in-out, 100ms background-color ease-in-out,
      10ms box-shadow ease-out;
    &:hover,&.hover {
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
