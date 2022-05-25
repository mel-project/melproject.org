<script>
  export let active = false;
  export let href = "";
</script>

<div><a class:active {href}><slot /></a></div>

<style>
  @import "navlink.css";
</style>
