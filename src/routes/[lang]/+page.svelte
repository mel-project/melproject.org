<script lang="ts">
  import { localize, lang } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/short-banner.png";
  import Button from "@src/components/elements/Button.svelte";
  import Banner from "@src/components/elements/Banner.svelte";
  import { communityIcons } from "@src/utils/navigation";
  import { Card, GradientBubble } from "@src/components";
  import { Colors } from "@src/utils/colors";

  import SpaceshipImage from "@src/assets/images/spaceship-and-planet.png";
  import ComposableBlocksImage from "@src/assets/images/composable-blocks.png";
  import VaultImage from "@src/assets/images/vault.png";
</script>

<div class="home">
  <div class="top">
    <img class="hero" src={HeroImage} alt="hero" />
  </div>

  <div class="SPACER" />

  <div class="subhero">
    <GradientBubble scale={30} offset={["0%", "400%"]} />
    <GradientBubble scale={30} offset={["75%", "-150%"]} />
    <GradientBubble
      scale={20}
      color={Colors.light_blue}
      offset={["100%", "600%"]}
    />
    <h1>dApps beyond blockchains.</h1>
    <Button size="large">A call to action</Button>
  </div>

  <div class="SPACER" />

  <div class="content-frame">
    <div class="content">
      <Card variant="gradient1" interactive let:hover>
        <div>
          <div class="header-arrow">
            <span class="button" class:hover>
              <Button arrow circle />
            </span>
            <h2>Empowering dapps <br />beyond blockchains</h2>
          </div>
          <p>
            We’re bringing blockchain superpowers out of the “web3” ecosystem.
            Whether you are writing an on-chain contract or fully off-chain
            protocol, you’ll have the tools to ensure your app has robust
            decentralization, censorship resistance, and user-centric
            incentives.
          </p>
        </div>
        <img src={SpaceshipImage} />
      </Card>
      <Card variant="gradient2" interactive>
        <div>
          <div class="header-arrow">
            <div />
            <!-- <Button arrow circle /> -->
            <h2>Neutral, composable,<br /> and built for everyone</h2>
          </div>
          <p>
            Decentralized trust should be a no-brainer. Themelio is clean-slate,
            governance-free, and radically embeddable L1 that makes accessing
            Web3 superpowers off-chain a breeze.
          </p>
        </div>
        <Button>Build your own off-chain dApp</Button>
        <img src={ComposableBlocksImage} />
      </Card>
      <Card variant="gradient3" interactive>
        <div>
          <div class="header-arrow">
            <Button circle arrow />
            <h2>Cross-chain compatibility <br /> built in</h2>
          </div>
          <p>
            Themelio’s new paradigm and the existing DeFi ecosystem don’t have
            to be at odds. Every Themelio asset can be accessed on
            EVM-compatible chains through trustless two-way relay contracts.
          </p>
        </div>
        <!-- <Button>Try our testnet relay</Button> -->
        <img />
      </Card>
      <Card variant="gradient1" interactive>
        <div>
          {@html $localize("page1_monetary_infrastructure", $lang)}
        </div>
        <!-- <Button>Learn about Melmint</Button> -->
        <img src={VaultImage} />
      </Card>
    </div>
    <Banner fill>
      <div class="join">
        <h1>Join our community</h1>
        <p class="main-lead">
          Be part of a growing community of global developers, innovators, and
          users helping us realize Themelio's vision.
        </p>
      </div>
    </Banner>
  </div>

 
</div>

<style lang="scss">
  @use "../../stylesheets/spacing";
  span.button.hover {
    filter: invert(40%);
    
  }
  .home {
    display: grid;
    grid-template-rows: auto 15vh auto 15vh;
    grid-template-columns: 100%;
  }
  .top {
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      border-radius: 1rem;
      margin: spacing.$default-margin;
    }
  }

  .subhero {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 5rem 0;
    flex-wrap: wrap;
    gap: 2 * spacing.$default-margin;

    h1 {
      margin: auto 0 ;
    }
  }
  .header-arrow {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .content-frame {
    gap: spacing.$default-margin;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 clamp(1rem, spacing.$default-margin, 100rem);
    max-width: 100%;
    // border: 1px solid red;
  }
  .content {
    & > * {
      max-width: 100%;
    }
    // container-type: inline-size;
    display: grid;
    gap: clamp(2rem, 3%, 3rem);
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: clamp(25rem, 100%, 75rem);
    // height: min(60rem, 1000rem);
  }

  @media screen and (max-width: 50rem) {
    .content-frame {
      justify-content: center;
      padding: spacing.$default-margin;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    :global(.card) {
      :global(h2) {
        padding-bottom: 1rem !important;
      }
    }
  }
</style>
