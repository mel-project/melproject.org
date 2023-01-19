<script>
  import { home_page } from "@src/utils/l10n";
  import { Banner, BubbleBackground, GradientBubble } from "@src/components";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import { Colors } from "@src/utils/colors";
  import { communityIcons } from "@src/utils/navigation";

  // test
  import Homepage from "./[lang]/+page.svelte";
</script>

<div class="layout">
  <GradientBubble offset={["100%", "100%"]} scale={70} />
  <GradientBubble
    offset={["0%", "calc(100% - 20rem)"]}
    scale={30}
    color={Colors.light_blue}
    opacity={20}
  />

  <Navbar />

  <slot />

  <Banner variant="clear">
    <div class="footer">
      <div class="col company-info">
        <div class="content">
          <div class="logo">logo</div>
          <div class="addr">8 The Green, Ste A Dover, <br> DE 19901</div>
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
  .layout {
    position: relative;
    overflow: hidden;
  }
  .company-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .footer {
    overflow: hidden;
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
      padding: .5rem;
      padding-left: 0;
      // border: 1px solid green;
      &:hover{
        color: colors.$green;
      }
    }
  }
</style>
