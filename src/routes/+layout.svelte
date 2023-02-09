<script>
  import { home_page } from "@l10n";
  import { Banner, BubbleBackground, GradientBubble } from "@src/components";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import { Colors } from "@src/utils/colors";
  import { communityIcons } from "@src/utils/navigation";

  // test
  import Homepage from "./[lang]/+page.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="layout-container">
  <Navbar />

  <slot />

  <Banner variant="clear">
    <div class="footer">
      <div class="col company-info">
        <div class="content">
          <div class="logo">logo</div>
          <div class="addr">8 The Green, Ste A Dover, <br /> DE 19901</div>
        </div>
      </div>
      <div class="col socials">
        <div class="title">Socials</div>
        {#each communityIcons as icon}
          <a href="">{icon.name}</a>
        {/each}
      </div>
      <div class="col sitemap">
        <div class="title">Sitemap</div>
        <a href={$home_page}> Home</a>
        <a href="{$home_page}/components"> Components</a>
        <a href="{$home_page}/technology"> Technology</a>
      </div>
      <div class="col melodeon">
        <div class="title">Melodeon</div>
        <a href="">Get started</a>
        <a href="">Guide</a>
        <a href="">Readme</a>
      </div>
    </div>
  </Banner>
</div>

<style lang="scss">
  @use "../stylesheets/variables" as colors;
  @import "../stylesheets/app.scss";

  .layout-container {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .layout {
    position: relative;
    max-width: min(100%, 90rem);
  }
  .company-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .footer {
    width: 100%;
    font-weight: 400;
    letter-spacing: -0.48px;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem 0;
    .title {
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    .col {
      // border: 1px solid red;
      display: flex;
      gap: 0.2rem;
      flex-direction: column;
      min-width: 9rem;
    }
    a {
      text-decoration: none;
      color: black;
      width: max-content;
      padding: 0.5rem;
      padding-left: 0;
      pa
      // border: 1px solid green;
      &:hover {
        color: colors.$green;
      }
    }
  }
</style>
