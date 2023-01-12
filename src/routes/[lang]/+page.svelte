<script lang="ts">
  import { localize } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/banner.png";
  import Button from "@src/components/elements/Button.svelte";
  import HomeContent from "@src/components/page-sections/HomeContent.svelte";
  import Banner from "@src/components/elements/Banner.svelte";
  import { communityIcons } from "@src/utils/navigation";
</script>

<div class="home">
  <Navbar />

  <div class="top">
    <img class="hero" src={HeroImage} alt="hero" />
  </div>

  <div class="SPACER" />

  <div class="subhero">
    <h1>A nice tagline for the project.</h1>
    <Button size="large">A call to action</Button>
  </div>

  <div class="SPACER" />

  <HomeContent />

  <Banner>
    <div class="join">
      <h1>Join our community</h1>
      <p class="main-lead">
        Be part of a growing community of global developers, innovators, and
        users helping us realize Themelio's vision.
      </p>
    </div>
  </Banner>

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
  .home {
    display: grid;
    grid-template-rows: 5rem auto 10vh auto 35vh;
    grid-template-columns: 100vw;
  }
  .top {
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      border-radius: 1rem;
      margin: 0.5rem;
    }
  }

  .subhero {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }
</style>
