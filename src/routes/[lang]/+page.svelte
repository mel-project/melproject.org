<script lang="ts">
  import { localize } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/wide-banner.jpg";
  import Card from "@src/components/elements/Card.svelte";
  import Button from "@src/components/elements/Button.svelte";
  import GradientBubble from "@src/components/elements/GradientBubble.svelte";
  import SpaceshipImage from "@src/assets/images/spaceship-and-planet.png";
  import ComposableBlocksImage from "@src/assets/images/composable-blocks.png";
  import VaultImage from "@src/assets/images/vault.png";
  import { Colors } from "@src/utils/colors";
  import HomeContent from "@src/components/page-sections/HomeContent.svelte";

  const communityIcons = [
    {
      name: "Discord",
    },
    {
      name: "Twitter",
    },
    {
      name: "GitHub",
    },
    {
      name: "Forum",
    },
    {
      name: "Medium",
    },
    {
      name: "Telegram",
    },
  ];
</script>

<div class="home">
  <Navbar />
  <div class="top">
      <img class="hero" src={HeroImage} alt="hero" />

  </div>
  <div class="spacer"></div>
  <div class="subhero">
    <h1>A nice tagline for the project.</h1>
    <Button size="large">A call to action</Button>
  </div>
  <div class="spacer"></div>
  <HomeContent />

  <div class="join">
    <h1>Join our community</h1>
    <p class="main-lead">
      Be part of a growing community of global developers, innovators, and users
      helping us realize Themelio's vision.
    </p>
  </div>
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        {#each communityIcons as icon}
          <div class="col-lg-4 mb-5">{icon.name}</div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .home{
    display: grid;
    grid-template-rows: 5rem auto 10vh auto 35vh;
    grid-template-columns: 100vw;
  }
  .top{
    display:flex;
    flex-direction: column;
    img{
      max-width: 100%;
      border-radius: 1rem;
      margin: .5rem;
    }
  }


  
  .subhero{
    display: flex;
    justify-content: center;;
    margin: 5rem 0;
  }
</style>
