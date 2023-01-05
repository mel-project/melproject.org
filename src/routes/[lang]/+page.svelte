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
  let bubbles = 10;
  let random_placement: ()=>[string,string] = ()=>{
    return [Math.random()*200 -100 + "vw", Math.random()*45 + "vh"] as [string,string]
  }
  function *range(end: number){
    let i = 0;
    while(i < end){
      yield i;
      i++
    }
  }
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

<template>
  <Navbar />
  <!-- <img class="hero" src={HeroImage} alt="hero" /> -->
  <div class="hero">

  </div>
  <div class="container">
    <div class="row subhero">
      <div class="col text-center">
        <h1>A nice tagline for the project.</h1>
        <Button size="large">A call to action</Button>
      </div>
    </div>
    <input type="text" bind:value={bubbles}>
    
    <HomeContent></HomeContent>

    <div class="row mt-5">
      <div class="col-lg-4">
        <h1>Join our community</h1>
        <p class="main-lead">
          Be part of a growing community of global developers, innovators, and
          users helping us realize Themelio's vision.
        </p>
      </div>
      <div class="col-lg">
        <div class="container-fluid">
          <div class="row">
            {#each communityIcons as icon}
              <div class="col-lg-4 mb-5">{icon.name}</div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  .container {
    max-width: 100%;
  }
  img {
    max-width: 100%;
  }

  .cards h2 {
    font-size: 1.6rem;
  }

  .main-lead {
    font-size: 1.1rem;
  }

  .card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .card-content img {
    margin-top: auto;
    width: 300px;
    height: 200px;
    object-fit: contain;
    margin-top: 1rem;
  }

  .subhero {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .subhero h1 {
    margin-bottom: 1rem;
  }
</style>
