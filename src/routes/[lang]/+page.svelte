<script lang="ts">
  import { localize, lang } from "@l10n";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import HeroImage from "@src/assets/images/wide-banner.jpg";
  import Button from "@src/components/elements/Button.svelte";
  import Banner from "@src/components/elements/Banner.svelte";
  import { communityIcons } from "@src/utils/navigation";
  import { Card, GradientBubble } from "@src/components";
  import { Colors } from "@src/utils/colors";

  import SpaceshipImage from "@src/assets/images/spaceship-and-planet.png";
  import ComposableBlocksImage from "@src/assets/images/composable-blocks.png";
  import VaultImage from "@src/assets/images/vault.png";
  import InfrastructureImage from "@src/assets/images/infrastructure.png";
</script>

<div class="top">
  <img class="hero" src={HeroImage} alt="hero" />
</div>
<div class="container main-content">
  <div class="row talking-point">
    <div class="col">
      <Card>
        <div class="card-inner">
          <h2>Decentralized protocols beyond blockchains.</h2>
          <p>
            Mel empowers a vast world of non-blockchain apps with key Web3
            superpowers &mdash; decentralization, censorship resistance, and
            user-centric incentives.
            <a href="#">Our off-chain composable vision</a>
          </p>
          <img />
        </div>
      </Card>
    </div>
    <div class="col">
      <Card>
        <div class="card-inner">
          <h2>Neutral, composable, and works for everything.</h2>
          <p>
            Decentralized trust should be a no-brainer. Themelio is a
            clean-slate, governance-free, and radically embeddable L1 that makes
            accessing Web3 superpowers off-chain a breeze.
            <a href="#">Build your first off-chain dapp</a>
          </p>
          <img />
        </div>
      </Card>
    </div>
  </div>
  <div class="row talking-point">
    <div class="col">
      <Card>
        <div class="card-inner">
          <h2>Monetary infrastructure for a better future.</h2>
          <p>
            The future we are building needs a new kind of money &mdash; $MEL is
            the the first truly decentralized unit of account, changing
            everything from payments to incentive design.
          </p>
          <img />
        </div>
      </Card>
    </div>
    <div class="col">
      <Card>
        <div class="card-inner">
          <h2>From off-chain to cross-chain.</h2>
          <p>
            Mel’s new paradigm enabling off-chain composability also makes
            cross-chain a breeze. And every Mel-based asset can be accessed on
            EVM-compatible chains through trustless two-way relay contracts.
          </p>
          <img />
        </div>
      </Card>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../stylesheets/spacing";
  span.button.hover {
    filter: invert(40%);
  }

  .main-content {
    margin-top: 5rem;
    margin-bottom: 15rem;
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

  .talking-point p {
    font-size: 95%;
  }

  .talking-point h2 {
    font-weight: 600;
    letter-spacing: -0.02em;
    font-size: 150%;
  }

  .talking-point img {
    aspect-ratio: 2;
    width: 80%;
    margin-left: 10%;

    border: 1px solid black;
    margin-bottom: 1rem;
  }

  .talking-point .card-inner {
    margin: 3rem;
  }
</style>
