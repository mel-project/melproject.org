<script lang="ts">
  import { localize } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/short-banner.png";
  import Button from "@src/components/elements/Button.svelte";
  import HomeContent from "@src/components/page-sections/HomeContent.svelte";
  import Banner from "@src/components/elements/Banner.svelte";
  import { communityIcons } from "@src/utils/navigation";
    import { GradientBubble } from "@src/components";
    import { Colors } from "@src/utils/colors";
</script>

<div class="home">

  <div class="top">
    <img class="hero" src={HeroImage} alt="hero" />
  </div>

  <div class="SPACER" />

  <div class="subhero">
    <GradientBubble scale={30} offset={['0%', '400%']}></GradientBubble>
    <GradientBubble scale={30} offset={['75%', '-150%']}></GradientBubble>
    <GradientBubble scale={20} color={Colors.light_blue} offset={['100%', '600%']}></GradientBubble>
    <h1>dApps beyond blockchains.</h1>
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


</div>

<style lang="scss">
  @use '../../stylesheets/spacing';
  .home {
    display: grid;
    grid-template-rows: auto 15vh auto 15vh;
    grid-template-columns: 100vw;
  }
  .top {
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      border-radius: 1rem;
      margin: spacing.$default-margin
    }
  }

  .subhero {
    position: relative;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    margin: 5rem 0;
    h1{
      margin-right: 2* spacing.$default-margin;
    }
  }
</style>
