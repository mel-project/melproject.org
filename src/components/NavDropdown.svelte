<script>
  export let active = false;
  export let href = "";
  export let title;
  import { slide } from "svelte/transition";
  import { debounce } from "debounce";
  let open = false;

  let setOpen = debounce((s) => {
    open = s;
  }, 50);
</script>

<div
  class="dropdown"
  on:mouseenter={() => {
    setOpen(true);
  }}
  on:mouseleave={() => {
    setOpen(false);
  }}
>
  <a class:active class="dropdown-toggle navlink" {href}>{title}</a>
  {#if open}
    <div class="floater" transition:slide>
      <slot />
    </div>
  {/if}
</div>

<style>
  @import "navlink.css";

  .floater {
    position: absolute;
    border: 1px solid var(--primary-color);
    padding: 1.3rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }
</style>
