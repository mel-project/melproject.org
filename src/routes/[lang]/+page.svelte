<script lang="ts">
  import { localize } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/banner.png";
  import Button from "@src/components/elements/Button.svelte";
  import HomeContent from "@src/components/page-sections/HomeContent.svelte";
  import GradientBubble from "@src/components/elements/GradientBubble.svelte";
  import Range from "@src/components/Range.svelte";
    import { Colors } from "@src/utils/colors";
    import Card from "@src/components/elements/Card.svelte";

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

  <Range to={10}>
    <GradientBubble color={Colors.teal} scale={20} opacity={20} offset="random"/>
  </Range>

  <div class="spacer" />

  <div class="subhero">
    <h1>A nice tagline for the project.</h1>
    <Button size="large">A call to action</Button>
  </div>

  <div class="spacer" />


  <HomeContent />

  <Card>
    <div class="join">
      <h1>Join our community</h1>
      <p class="main-lead">
        Be part of a growing community of global developers, innovators, and users
        helping us realize Themelio's vision.
      </p>
    </div>
  </Card>

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
