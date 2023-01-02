<script>
  import { localize } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/wide-banner.jpg";
  import Card from "@src/components/elements/Card.svelte";
  import Button from "@src/components/Button.svelte";

  import SpaceshipImage from "@src/assets/images/spaceship-and-planet.png";
  import ComposableBlocksImage from "@src/assets/images/composable-blocks.png";
  import VaultImage from "@src/assets/images/vault.png";
  
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
  <img src={HeroImage} alt="hero" />
  <div class="container">
    <div class="row subhero">
      <div class="col text-center">
        <h1>A nice tagline for the project.</h1>
        <Button size="large">A call to action</Button>
      </div>
    </div>

    <div class="row cards">
      <div class="col-lg mb-4">
        <Card variant="gradient1">
          <div class="card-content">
            <div>
              <h2>Empowering dapps beyond blockchains</h2>
              <p>
                We’re bringing blockchain superpowers out of the “web3”
                ecosystem. Whether you are writing an on-chain contract or fully
                off-chain protocol, you’ll have the tools to ensure your app has
                robust decentralization, censorship resistance, and user-centric
                incentives.
              </p>
            </div>
            <Button>Read our whitepaper</Button>
            <img src={SpaceshipImage} />
          </div>
        </Card>
      </div>
      <div class="col-lg mb-4">
        <Card variant="gradient1">
          <div class="card-content">
            <div>
              <h2>Neutral, composable, and built for everyone</h2>
              <p>
                Decentralized trust should be a no-brainer. Themelio is
                clean-slate, governance-free, and radically embeddable L1 that
                makes accessing Web3 superpowers off-chain a breeze.
              </p>
            </div>
            <Button>Build your own off-chain dApp</Button>
            <img src={ComposableBlocksImage} />
          </div>
        </Card>
      </div>
    </div>
    <div class="row cards">
      <div class="col-lg mb-4">
        <Card variant="gradient1">
          <div class="card-content">
            <div>
              <h2>Cross-chain compatibility, built in</h2>
              <p>
                Themelio’s new paradigm and the existing DeFi ecosystem don’t
                have to be at odds. Every Themelio asset can be accessed on
                EVM-compatible chains through trustless two-way relay contracts.
              </p>
            </div>
            <Button>Try our testnet relay</Button>
            <img />
          </div>
        </Card>
      </div>
      <div class="col-lg mb-4">
        <Card variant="gradient1">
          <div class="card-content">
            <div>
              <h2>Monetary infrastructure for a better future</h2>
              <p>
                The future we are building needs a new kind of money — MEL is
                the first cryptocurrency that’s both stable and trustless. It’s
                the first truly decentralized unit of account, changing
                everything from payments to incentive design.
              </p>
            </div>
            <Button>Learn about Melmint</Button>
            <img src={VaultImage} />
          </div>
        </Card>
      </div>
    </div>

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
  .main-body {
    width: 100vw;
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
