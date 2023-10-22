<script lang="ts">
  import { page } from "$app/stores";

  import Logo from "@src/assets/images/logo.png";
  import { localize, home_page } from "@l10n";
  import { blogUrl, docsUrl, forumUrl } from "@src/helpers";

  const nav_items = [
    { name: "home", href: $home_page },
    { name: "forum", href: forumUrl },
    { name: "docs", href: docsUrl },
  ];
  $: pathname = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-lg ">
  <div class="container content">
    <a href={$home_page} class="navbar-brand">
      <img src={Logo} height="32rem" alt="Mel Logo" class="me-2" />
      Mel
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mb-2 mb-lg-0">
        {#each nav_items as item}
          <li class="nav-item">
            <a
              class="nav-link"
              class:active={pathname == item.href}
              href={item.href}
              target="_blank"
              rel="noopener"
            >
              {$localize(item.name)}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  .navbar-brand {
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar-brand img {
  }

  .active {
    font-weight: 500;
  }
  nav.navbar {
    background-color: unset;
  }
</style>
