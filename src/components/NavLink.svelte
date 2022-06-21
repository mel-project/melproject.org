<script>
  export let active = false;
  export let href = "";
</script>

<div>
  <a sveltekit:prefetch class:active class="navlink" {href}><slot /></a>
</div>

<style>
  @import "navlink.css";
</style>
