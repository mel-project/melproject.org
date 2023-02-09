<script lang="ts">
  export let title: string;
  export let graphic: string | null = null;
</script>

<section>
  <h2>{@html title}</h2>
  <div class="body">
    {#if graphic}
      <div class="left">
        <img src={graphic} />
      </div>
    {/if}
    <div class="right"><slot /></div>
  </div>
</section>

<style>
  section {
    padding-top: 7rem;
    padding-bottom: 7rem;
    font-size: 120%;
    line-height: 1.66;
  }
  h2 {
    font-size: 250%;
    padding-bottom: 1rem;
  }

  .body {
    display: flex;
  }

  .left {
    margin-right: 1rem;
  }

  .left img {
    width: 10rem;
  }
</style>
