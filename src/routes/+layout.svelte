<script>
  import Navbar from "@src/components/page-sections/Navbar.svelte";
</script>

<svelte:head />

<Navbar />

<slot />

<style lang="scss">
  @import "../stylesheets/app.scss";
</style>
