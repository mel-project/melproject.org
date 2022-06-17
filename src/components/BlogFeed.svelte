<script>
  import { read } from "feed-reader";
  import { browser } from "$app/env";

  let blogEntries = [];
  (async () => {
    if (browser) {
      const feed = await read("https://themelio.org/blog.rss");
      console.log(feed);
      blogEntries = feed.entries;
    }
  })();

  const getPreviewImage = async (url) => {
    const response = await fetch("https://themelio.org/peekalink", {
      method: "POST",
      body: JSON.stringify({ link: url }),
      headers: { "content-type": "application/json" },
    });
    return (await response.json())?.image?.url;
  };

  let showAll = false;
</script>

<div class="container-fluid p-0 placeholder-glow">
  {#if blogEntries.length > 1}
    <div class="row blog-section">
      <div class="latest-post">
        <a
          class="first"
          href={blogEntries[0].link}
          target="_blank"
          rel="noopener"
        >
          {#await getPreviewImage(blogEntries[0].link)}
            <div class="preview-image placeholder" />
          {:then url}
            <img class="preview-image" src={url} />
          {:catch}
            <div class="preview-image placeholder" />
          {/await}
          <h3>{blogEntries[0].title}</h3>
          <span class="read-more">Read more</span>
        </a>
      </div>
        {#each blogEntries as entry, index}
          {#if index > 0 && (showAll || index < 4)}
            <a class={"inner other-posts post-"+{index}} href={entry.link} target="_blank" rel="noopener">
              {#await getPreviewImage(entry.link)}
                <div class="preview-image placeholder" />
              {:then url}
                <img class="preview-image" src={url} />
              {:catch}
                <div class="preview-image placeholder" />
              {/await}

              <div class="">
                <h3>{entry.title}</h3>
                <span class="read-more">Read more</span>
              </div>
            </a>
          {/if}
        {/each}
        {#if !showAll}
          <div class="inner">
            <button
              class="btn btn-outline-primary px-4"
              on:click={() => (showAll = true)}>Show all</button
            >
          </div>
        {/if}
      </div>
  {/if}
</div>

<style>
  .inner {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  .btn {
    font-weight: 500;
  }

  .read-more {
    font-weight: 700;
    color: var(--primary-color);
  }

  .read-more::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0 3px 0 5px;
  }

  .inner h3 {
    font-weight: 600;
    font-size: 120%;
  }

  .inner .preview-image {
    background-color: #eee;
    height: 3.333rem;
    display: block;
    flex: 0 0 5rem;
    max-width: 5rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
  }

  .preview-image {
    border-color: var(--primary-color);
    border: 1px solid;
    object-fit: cover;
  }

  .first {
    margin: 1rem;
    display: block;
  }

  .first h3 {
    font-weight: 600;
    font-size: 140%;
  }

  .first .preview-image {
    width: 100%;
    aspect-ratio: 3/2;
    border-radius: 1rem;
    background-color: #eee;
    margin-bottom: 1rem;
  }
  .blog-section{
    display: grid;
    grid-template-areas: "L A" "L B" "L C";
  }
  .latest-post{
    grid-area: L
  }
  .post-1{
    grid-area: A
  }
  .post-2{
    grid-area: B;
  }
  .post-3{
    grid-area: C;
  }
</style>
