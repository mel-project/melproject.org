<script lang="ts">
  export let name: string;
  export let title: string;
  export let url: string = "";
</script>

{#if url === ""}
  <div class="wrapper" href={url}>
    <div class="name">
      {name}
    </div>
    <div class="title">
      {title}
    </div>
  </div>
{:else}
  <a class="wrapper" href={url} target="_blank" rel="noopener">
    <div class="name">
      {name}
    </div>
    <div class="title">
      {title}
    </div>
  </a>
{/if}

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;
    text-decoration: unset;
  }

  .picture {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 100rem;
    border: 1px solid black;
    margin-right: 0.5rem;
  }
  .name {
    font-weight: 500;
    margin-right: 0.5rem;
  }

  .title {
    opacity: 0.8;
    /* color: var(--primary-purple); */
  }
</style>
