<script lang="ts">
  import BoxesImage from "@src/assets/images/homeicons/boxes.png";
  import AtmImage from "@src/assets/images/homeicons/atm.png";
  import TalkingPoint from "./TalkingPoint.svelte";
  import Avatar from "./Avatar.svelte";
  import PolychainLogo from "@src/assets/images/polychain-logo.png";
  import Logo from "@src/assets/images/logo-bw.png";

  import {
    twitterUrl,
    discordUrl,
    forumUrl,
    docsUrl,
    telegramUrl,
    blogUrl,
  } from "@src/helpers";

  const occUrl = "https://docs.melproject.org/concepts/web3-beyond-blockchains";
  const dataModelUrl =
    "https://docs.melproject.org/concepts/data-model-and-neutrality";
  const consensusUrl =
    "https://docs.melproject.org/concepts/secure-verifiable-consensus";
  const melmintUrl =
    "https://docs.melproject.org/concepts/mel-trustless-sound-money";

  const melnodeUrl =
    "https://docs.melproject.org/developer-guides/run-a-full-node";
  const gibbernameUrl =
    "https://docs.melproject.org/developer-guides/gibbername";

  const melscanUrl = "https://melscan.io";
  const melodeonUrl = "https://melodeonlang.org";
  const bridgeUrl = "https://docs.melproject.org/szaldi-guide";
</script>

<svelte:head>
  <title>Mel</title>
  <meta
    name="description"
    content="Mel is a clean-slate L1 for a decentralized, secure, and
    private internet beyond blockchains."
  />
</svelte:head>

<div class="notice container content">
  <div class="notice-inner">
    <b>Heads up!</b> We've just renamed from Themelio to Mel, and this website
    is very new!<br /><br />
    All the relevant content <i>should</i> be moved, but if something seems
    missing, please let us know on <a href={discordUrl}>Discord</a>. In the
    meanwhile, you might find missing info at our old documentation website,
    <a href="https://docs.themelio.org">docs.themelio.org</a>.
  </div>
</div>

<div class="hero">
  <div class="container content">
    <div class="text-end">
      <h1>A blockchain for Web3 <b>beyond blockchains.</b></h1>
    </div>

    <div class="hero-text mt-5">
      <p>
        We are building a clean-slate L1 for a decentralized, secure, and
        private internet beyond blockchains.
      </p>
      <p>
        Learn more about <a href="#vision">our vision</a> &mdash; a vibrant ecosystem
        of full-stack decentralized apps freed from the current on-chain smart contract
        model.
      </p>

      <p>
        Our beta mainnet is out, so you can start <a href={melnodeUrl}
          >running nodes</a
        >
        and <a href={gibbernameUrl}>developing protocols</a>. And join our
        growing community:
      </p>
      <p>
        <a href={discordUrl}>Discord</a> &centerdot;
        <a href={twitterUrl}>Twitter</a> &centerdot;
        <a href={telegramUrl}>Telegram</a> &centerdot;
        <a href={forumUrl}>Forum</a>
      </p>
    </div>
  </div>
</div>

<div class="container content">
  <div class="divider" id="vision">Why Mel?</div>
  <TalkingPoint
    title="Decentralization <b><nobr>beyond blockchains</nobr></b>."
  >
    <p>
      Today, Web3's revolution is stuck inside blockchain smart contracts. Real
      apps running on your device &mdash; even Web3 frontends &mdash; still
      suffer under Web2's centralization and insecurity.
    </p>
    <p>
      Mel presents a new paradigm: <b>off-chain composability</b>. Here, "Web3
      protocol" and "dApp" aren't fancy names for smart contracts loosely taped
      onto a Web2 frontend.
    </p>
    <p>
      Instead, they're next-generation network protocols and apps, none of which
      run on a blockchain, yet interacting with minimal on-chain code to achieve
      censorship resistance, radical decentralization, and user-aligned
      incentives.
    </p>
    <a class="point-link" href={occUrl}>Our off-chain composable vision</a>
  </TalkingPoint>

  <TalkingPoint
    title="Universal, composable, and <nobr><b>robustly neutral</b></nobr>."
    graphic={BoxesImage}
  >
    <p>
      Conventional blockchains serve intricate smart contract ecosystems. This
      means complex protocols, messy governance, and unwieldy clients &mdash;
      bad news for composability between on-chain and off-chain.
    </p>
    <p>
      Mel turns this model upside-down. Everything is designed for easy access
      not by smart contracts, but by regular non-blockchain programs. Trustless
      light clients easily power everything from naming systems to data storage
      networks.
    </p>
    <p>
      And we get an elegant, minimal blockchain that distills blockchains'
      incentive-based trust: an immutable, credibly neutral, "code-is-law"
      engine that liberates us from contentious human governance.
    </p>
    <a class="point-link" href={dataModelUrl}
      >How composability synergizes with neutrality
    </a>
  </TalkingPoint>

  <TalkingPoint
    title="The first <b>zero-trust, <nobr>low-volatility</nobr></b> currency."
    graphic={AtmImage}
  >
    <p>
      The world we are building needs a new kind of money. Neither volatile
      cryptocurrencies nor oracle-backed fiat stablecoins point to our monetary
      future.
    </p>
    <p>
      MEL is the first ever cryptocurrency that's both stable and trustless.
      Protocol-internal mechanisms dampen its value against computation time
      without any oracles.
    </p>
    <p>
      A truly decentralized unit of account changes everything from payments to
      incentive design.
    </p>
    <a class="point-link" href={melmintUrl}>How we finally get "sound money"</a>
  </TalkingPoint>

  <TalkingPoint
    title="Off-chain composability means <b>cross-chain</b> composability."
  >
    <p>
      Despite their deep differences, Mel's new paradigm and the existing Web3
      ecosystem can interoperate. Cross-chain is just another kind of off-chain,
      so Mel light clients easily enable decentralized and trustless cross-chain
      interop.
    </p>
    <p>
      As an official demo, we are building Szaldi, an autonomous relay protocol
      with EVM-compatible chains. Every Mel-based asset can be accessed on other
      chains in a trustlessly wrapped form.
    </p>
    <p>
      This also means that wMEL will be the first truly crypto-native
      low-volatility asset in the current DeFi ecosystem.
    </p>
    <a class="point-link" href={bridgeUrl}>Mint your first wMEL</a>
  </TalkingPoint>

  <!-- <div class="divider mb-5">Roadmap</div>
  <div class="content">
    <div class="row">
      <div class="col text-end">
        <h2>Tentative roadmap</h2>
      </div>
    </div>
  </div> -->

  <div class="divider my-5">Team</div>
  <div id="team">
    <div class="row">
      <div class="col-lg">
        <h4>Execs</h4>
        <ul class="mb-4">
          <li>
            <Avatar
              name="Eric Tung"
              title="Founder / CEO / CTO"
              url="https://nullchinchilla.me"
            />
          </li>
        </ul>
        <h4>Dev and research</h4>
        <ul>
          <li>
            <Avatar
              name="Gavin Chan"
              title="Engineer"
              url="https://github.com/antidmg"
            />
          </li>
          <li>
            <Avatar
              name="Marco Serrano"
              title="Engineer"
              url="https://github.com/sadministrator/"
            />
          </li>
        </ul>
        <!-- <h4>Community</h4>
        <ul>
          <li>
            <Avatar name="ArtoriaShirou#4266" title="Discord mod" />
          </li>
        </ul> -->
      </div>
      <div class="col-lg">
        <h4>Advisors</h4>
        <ul class="mb-5">
          <li>
            <Avatar
              name="Raouf Boutaba"
              title="Prof @ UWaterloo / FRSC"
              url="https://rboutaba.cs.uwaterloo.ca/"
            />
          </li>
        </ul>

        <h4>Backers</h4>
        <img src={PolychainLogo} class="backer" />
      </div>
    </div>
  </div>

  <div class="divider my-5">Links</div>
  <div class="links content">
    <div class="row">
      <div class="col-lg">
        <h4>About</h4>
        <ul>
          <li>
            <a href={blogUrl} target="_blank" rel="noreferrer">Blog</a>
          </li>
          <!-- <li>
            <a>Roadmap</a>
          </li> -->
        </ul>
        <h4>Concepts</h4>
        <ul>
          <li>
            <a href={occUrl} target="_blank" rel="noreferrer"
              >Web3 beyond blockchains</a
            >
          </li>
          <li>
            <a href={dataModelUrl} target="_blank" rel="noreferrer"
              >Data model and neutrality</a
            >
          </li>
          <li>
            <a href={consensusUrl} target="_blank" rel="noreferrer"
              >Secure, verifiable consensus</a
            >
          </li>
          <li>
            <a href={melmintUrl} target="_blank" rel="noreferrer"
              >MEL: trustless sound money</a
            >
          </li>
        </ul>
      </div>
      <div class="col-lg">
        <h4>Developers</h4>
        <ul>
          <li>
            <a href={docsUrl} target="_blank" rel="noreferrer">Developer docs</a
            >
          </li>
          <li>
            <a href={melodeonUrl} target="_blank" rel="noreferrer"
              >Melodeon: our high-level covenant language</a
            >
          </li>
          <li>
            <a href={melscanUrl} target="_blank" rel="noreferrer"
              >Melscan: official block explorer</a
            >
          </li>
        </ul>
        <h4>Community</h4>
        <ul>
          <li>
            <a href={discordUrl} target="_blank" rel="noreferrer">Discord</a>
          </li>
          <li>
            <a href={twitterUrl} target="_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram</a>
          </li>
          <li>
            <a href={forumUrl} target="_blank" rel="noreferrer">Forum</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<footer class="mt-5">
  <div class="content d-flex align-items-start justify-content-end">
    <div class="address text-end me-3">
      <b>Mel Systems</b> / Themelio Corporation <br />8 The Green, Suite A<br
      />Dover, DE 19901
    </div>
    <img src={Logo} alt="Mel Systems logo" />
  </div>
</footer>

<style>
  .notice {
    margin-bottom: 5vmin;
    margin-top: 3vmin;
  }

  .notice-inner {
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5vmin;
    padding-bottom: 8rem;
  }

  .divider {
    display: flex;
    align-items: center;
    /* justify-content: center; */
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
    font-size: min(4rem, 13vw);
    font-weight: 500;
  }

  .hero-text {
    font-size: min(1.5rem, 6vw);
  }

  .point-link {
    color: var(--primary-purple);
    opacity: 0.8;
    text-decoration: none;
    font-weight: 500;
  }

  .point-link:hover {
    text-decoration: underline;
    opacity: 1;
  }

  .point-link::after {
    content: " > ";
  }

  ul {
    padding: 0;

    list-style-type: none;
  }

  h4 {
    font-size: 100%;
    font-weight: 500;
    /* text-transform: uppercase; */
    letter-spacing: 0.05em;
    opacity: 0.8;
  }

  h4::before {
    content: "::";
    display: inline-block;
    margin-right: 0.2rem;
    position: relative;
    top: -0.06rem;
  }

  .links h3 {
    font-size: 120%;
    opacity: 0.8;
  }

  .links li {
    font-size: 95%;
    line-height: 1.7;
  }

  .backer {
    width: 6rem;
  }

  footer {
    /* background-color: var(--primary-purple); */
    /* color: white; */
    padding: 2rem;
  }

  footer img {
    width: 1.5rem;
  }

  .address {
    font-size: 75%;
    font-weight: 500;
  }
</style>
