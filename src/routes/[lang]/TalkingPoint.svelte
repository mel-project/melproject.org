<script lang="ts">
  export let title: string;
  export let graphic: string | null = null;
</script>

<section>
  <h2>{@html title}</h2>
  <div class="body">
    {#if graphic}
      <div class="left d-none d-lg-block">
        <img src={graphic} />
      </div>
    {/if}
    <div class="right"><slot /></div>
  </div>
</section>

<style>
  section {
    margin-top: 5rem;
    margin-bottom: 7rem;
    font-size: min(120%, 4.5vw);
    line-height: 1.66;
  }

  @media (min-width: 800px) {
    section {
      margin-bottom: 10rem;
    }
  }

  h2 {
    font-size: min(250%, 9vw);
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
