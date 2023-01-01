<script>
  import { localize } from "@l10n";
  import HomeContent from "@src/components/page-sections/HomeContent.svelte";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/wide-banner.jpg";
  import GradientCard from "@src/components/elements/GradientCard.svelte";
  import Button from "@src/components/Button.svelte";
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
        <GradientCard>
          <div class="card-content">
            <h2>Empowering dapps beyond blockchains</h2>
            <p>
              We’re bringing blockchain superpowers out of the “web3” ecosystem.
              Whether you are writing an on-chain contract or fully off-chain
              protocol, you’ll have the tools to ensure your app has robust
              decentralization, censorship resistance, and user-centric
              incentives.
            </p>
            <img />
          </div>
        </GradientCard>
      </div>
      <div class="col-lg mb-4">
        <GradientCard>
          <div class="card-content">
            <h2>Neutral, composable, and built for everyone</h2>
            <p>
              Decentralized trust should be a no-brainer. Themelio is
              clean-slate, governance-free, and radically embeddable L1 that
              makes accessing Web3 superpowers off-chain a breeze.
            </p>
            <img />
          </div>
        </GradientCard>
      </div>
    </div>
    <div class="row cards">
      <div class="col-lg mb-4">
        <GradientCard>
          <div class="card-content">
            <h2>Cross-chain compatibility, built in</h2>
            <p>
              Themelio’s new paradigm and the existing DeFi ecosystem don’t have
              to be at odds. Every Themelio asset can be accessed on
              EVM-compatible chains through trustless two-way relay contracts.
            </p>
            <img />
          </div>
        </GradientCard>
      </div>
      <div class="col-lg mb-4">
        <GradientCard>
          <div class="card-content">
            <h2>Monetary infrastructure for a better future</h2>
            <p>
              The future we are building needs a new kind of money — MEL is the
              first cryptocurrency that’s both stable and trustless. It’s the
              first truly decentralized unit of account, changing everything
              from payments to incentive design.
            </p>
            <img />
          </div>
        </GradientCard>
      </div>
    </div>

    {$localize("test")}
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
  }

  .subhero {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .subhero h1 {
    margin-bottom: 1rem;
  }
</style>
