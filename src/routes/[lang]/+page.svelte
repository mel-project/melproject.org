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
  import BoxesImage from "@src/assets/images/homeicons/boxes.png";
  import AtmImage from "@src/assets/images/homeicons/atm.png";
  import InfrastructureImage from "@src/assets/images/infrastructure.png";
  import TalkingPoint from "./TalkingPoint.svelte";

  import HeroBackground from "@src/assets/images/homeicons/hero.png";
</script>

<div class="hero">
  <div class=" main-content">
    <div class="text-end">
      <h1>A blockchain to free us from blockchains.</h1>
    </div>

    <div class="hero-text mt-5">
      <p>
        We are building a clean-slate L1 for a decentralized, secure, and
        private internet beyond blockchains.
      </p>
      <p>
        Learn more about <a href="#vision">our vision</a>, or dive into running
        nodes and protocol development.
      </p>
      <p>And join our growing community:</p>
      <p>Discord &centerdot; Matrix &centerdot; Telegram</p>
    </div>
  </div>
</div>

<div class="main-content" id="vision">
  <TalkingPoint
    title="Decentralization <b><nobr>beyond blockchains</nobr></b>."
  >
    <p>
      Today, Web3's decentralization revolution is largely limited to blockchain
      smart contracts. Real apps running on your device &mdash; even Web3
      frontends &mdash; still suffer under Web2's regime of centralization and
      insecurity.
    </p>
    <p>
      Mel presents a new paradigm: <b>off-chain composability</b>. Here, "Web3
      protocol" and "dApp" aren't fancy names for smart contracts loosely taped
      onto a Web2 frontend. Instead, they're next-generation network protocols
      and apps transformed by a blockchain providing radical decentralization,
      censorship resistance, and incentive-based security.
    </p>
    <a href="#">Our off-chain composable vision</a>
  </TalkingPoint>

  <TalkingPoint
    title="Universal, composable, and <nobr><b>fiercely neutral</b></nobr>."
    graphic={BoxesImage}
  >
    <p>
      Conventional blockchains are complex machines running an ecosystem of
      on-chain smart contracts. Complexity leads to messy governance, unwieldy
      off-chain clients, and cripple growth beyond "crypto" apps like DeFi.
    </p>
    <p>
      Mel's clean-slate L1 turns this model upside-down. Everything is designed
      for easy and secure access by regular, non-blockchain programs. Trustless
      clients easily power everything from naming systems to data storage
      networks.
    </p>
    <p>
      And rather than adding complexity, we end up with an elegant, minimal
      blockchain that goes back to the very root of blockchains' incentive-based
      trust: an immutable, "code-is-law" system that liberates us from
      contentious human governance.
    </p>
    <a href="#">How neutrality synergizes with composability</a>
  </TalkingPoint>

  <TalkingPoint
    title="The first <b>zero-trust, <nobr>low-volatility</nobr></b> currency."
    graphic={AtmImage}
  >
    <p>
      The future we are building needs a new kind of money. Neither volatile
      cryptocurrencies nor fiat-pegged, oracle-trusting stablecoins point to our
      monetary future.
    </p>
    <p>
      MEL is the first ever cryptocurrency that's both stable and trustless.
      Protocol-internal mechanisms dampen its value against computation time
      without any oracles. A truly decentralized unit of account changes
      everything from payments to incentive design.
    </p>
    <a href="#">How Melmint stabilizes MEL</a>
  </TalkingPoint>

  <TalkingPoint
    title="Off-chain composability means <b>cross-chain</b> composability."
  >
    <p>
      Mel's new paradigm and the existing ecosystem aren't inherently at odds.
      The technology letting non-blockchain logic securely access blockchain
      data also enables cross-chain apps that are completely decentralized and
      trustless.
    </p>
    <p>
      As an official demo, we are building FancyName, an autonomous relay
      protocol with EVM-compatible chains. Every Mel-based asset can be accessed
      on other chains in a trustlessly wrapped form. This also means that wMEL
      will be the first low-volatility, truly crypto-native asset in the current
      DeFi ecosystem.
    </p>
    <a href="#">Mint your first wMEL</a>
  </TalkingPoint>
</div>

<!-- <div class="row talking-point">
  <div class="col">
    <div class="card-inner">
      <h2>Monetary infrastructure for a better future.</h2>
      <p>
        The future we are building needs a new kind of money &mdash; $MEL is the
        the first truly decentralized unit of account, changing everything from
        payments to incentive design.
      </p>
      <img />
    </div>
  </div>
  <div class="col">
    <div class="card-inner">
      <h2>From off-chain to cross-chain.</h2>
      <p>
        Mel’s new paradigm enabling off-chain composability also makes
        cross-chain a breeze. And every Mel-based asset can be accessed on
        EVM-compatible chains through trustless two-way relay contracts.
      </p>
      <img />
    </div>
  </div>
</div> -->
<style>
  .main-content {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1200px) {
    .main-content {
      max-width: 850px;
    }
  }

  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20vmin;
    padding-bottom: 20vmin;
  }

  .hero h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  .hero-text {
    font-size: 1.5rem;
  }

  .talking-point {
    margin-bottom: 8rem;
  }

  .talking-point p {
    font-size: 110%;
  }

  .talking-point h2 {
    font-weight: 500;
    letter-spacing: -0.03em;
    font-size: 250%;
  }

  .talking-point img {
    aspect-ratio: 2;
    width: 80%;
    margin-left: 10%;

    border: 1px solid black;
    margin-bottom: 1rem;
  }

  .talking-point .desc {
    margin-top: 0.5rem;
  }

  .talking-point .card-inner {
    margin: 3rem;
  }
</style>
