<script>
  export let active = false;
  export let href = "";
</script>

<div><a class:active class="navlink" {href}><slot /></a></div>

<style>
  @import "navlink.css";
</style>
