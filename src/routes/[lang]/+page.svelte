<script lang="ts">
  import BoxesImage from "@src/assets/images/homeicons/boxes.png";
  import AtmImage from "@src/assets/images/homeicons/atm.png";
  import TalkingPoint from "./TalkingPoint.svelte";
</script>

<div class="hero">
  <div class="content">
    <div class="text-end">
      <h1>A blockchain to <b>free us from blockchains.</b></h1>
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
      <p>
        <a href="https://discord.gg/qfg35paESn">Discord</a> &centerdot;
        <a href="https://matrix.to/#/#community:matrix.themelio.org">Matrix</a> &centerdot;
        Telegram
      </p>
    </div>
  </div>
</div>

<div class="divider">Why Mel?</div>

<div class="content" id="vision">
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
    <a class="point-link" href="#">Our off-chain composable vision</a>
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
    <a class="point-link" href="#"
      >How neutrality synergizes with composability</a
    >
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
    <a class="point-link" href="#">How Melmint stabilizes MEL</a>
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
    <a class="point-link" href="#">Mint your first wMEL</a>
  </TalkingPoint>

  <div class="divider">Links</div>
  <div class="links content">
    <div class="row">
      <div class="col">
        <h3>Concepts</h3>
      </div>
      <div class="col">
        <h3>Developers</h3>
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20vmin;
    padding-bottom: 8rem;
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2em;
    font-style: italic;

    color: var(--primary-purple);
  }

  .divider::before {
    content: "";
    background-color: var(--primary-purple);
    height: 1px;
    width: 5rem;
    margin-right: 1rem;
  }

  .divider::after {
    content: "";
    background-color: var(--primary-purple);
    height: 1px;
    width: 5rem;
    margin-left: 1rem;
  }

  .hero h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  .hero-text {
    font-size: 1.5rem;
  }

  .point-link {
    color: var(--primary-purple);
  }

  .links {
    padding-top: 8rem;
  }
</style>
