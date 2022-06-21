<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import BlogFeed from "../../components/BlogFeed.svelte";
  import BlinkingTexts from "../../components/BlinkingTexts.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/index.l10n.yaml";
  $: l10n = l10nLoad({ ...base, ...layer }, $lang);

  let carouselPosn = 0;
  let carouselimgs =
    "homepage-participate.png homepage-build.png homepage-learn.png".split(" ");
  $: carouselimg = carouselimgs[carouselPosn];
</script>

<template lang="pug">
MainLayout(title!='{l10n("nav/home")}')
  .section.section--hero
    .section__inner.container
      .row
        .col
          //- h1 {@html l10n("tagline")}
          h1 The first #[br] #[i.text-secondary #[BlinkingTexts(labels!='{["self-securing", "governance-free", "collusion-resistant", "truly trustless", "off-chain first"]}')]] #[br] blockchain network
          p.text--blead Themelio is an #[b immutable root of trust] built to realize the blockchain revolution we all wanted: a world secured by robust mechanisms and decentralized incentives, not untrustworthy and centralized third parties.
      .row
        .col 
          a.btn.btn-primary.btn-lg(href='#community-sect')
            | {l10n("join-the-community")}

  //- .section
  //-   .section__inner.container
  //-     .row.py-3
  //-       .col-md
  //-           h1.text-primary.huge Vision
  //-           p.small-lead 
  //-       .col-md
  //-         p
  //-       //- .col-md
  //-       //-   p cool "solarpunk emerging out of lunarpunk" graphic goes here
  .section__inner.container
    .row.py-5.my-5
      .col-md-5
        <img src="/images/homepage/utxo.png" class="img-fluid"/> 
      .col-md-7
        h2.py-2 Governance-free modular architecture
        p.small-lead Themelio unique modular architecture achieves Ethereum-like generality #[b and] better-than-Bitcoin immutability and neutrality. This is done through a minimally enhanced UTXO model that focuses on blockchains core task: providing a neutral security foundation independent of all protocol-external trust. 

        a.learnmore Our robust, app-decoupled design <i class="fa-solid fa-chevron-right fa-sm"></i>
  .section__inner.container
    .row.py-5.my-5
      .col-md-7
        h2.py-2 Decentralized sound money and resilient #[nobr proof-of-stake] consensus
        p.small-lead MEL, the native currency, is a #[b breakthrough, oracle-free &ldquo;stablecoin&rdquo;] independent of all fiat currency. Along with SYM, a separate PoS token, it participates in Themelio's uniquely collusion-resistant consensus game Synkletos that greatly improves long-term security over existing mechanisms.

        a.learnmore Realizing a sound cryptocurrency economy <i class="fa-solid fa-chevron-right fa-sm"></i>
      .col-md-5
        <img src="/images/homepage/vault.png" class="img-fluid"/> 

  .section__inner.container
    .row.py-5.my-5
      .col-md-5
        <img src="/images/homepage/balloons.png" class="img-fluid"/> 
      .col-md-7
        h2.py-2 Endless extensibility #[nobr #[i beyond] &ldquo;Web3&rdquo;]
        p.small-lead Thanks to its zero-governance stability and easily embeddable, app-decoupled design, Themelio is a suitable #[b root of trust] for decentralized apps beyond the current scope of Web3. Unlike existing L1s, Themelio is perfect for securing critical non-blockchain, non-financial protocols ranging from end-to-end encrypted communication to uncensorable file publishing.

        a.learnmore Themelio&rsquo;s vision for a Web3 paradigm shift <i class="fa-solid fa-chevron-right fa-sm"></i>
        // team
  #team-sect.section.section--darken
    .section__inner.container
      .row
        .col-lg
        .col-lg-8.text-center
          h2 {@html l10n("team")}
          a.btn.btn-outline-primary.btn-lg(href!="{'/' + $lang + '/team'}")
            | {@html l10n("view-our-team")}
        .col-lg
  #blog-sect.section.section
    .section__inner.container
      .row
        .col
          h2 {@html l10n("blog")}
          BlogFeed
</template>

<style lang="scss">
  .tab-set {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 500;
    color: var(--dark-color);
    padding-bottom: 2rem;
  }
  -w .tab-button {
    border-bottom: 2px solid transparentize($primary, 0.5);
    flex-basis: 100%;
  }

  .tab-button-active {
    border-bottom: 2px solid $primary;
  }

  .alert-cta {
    border: 2px solid #006e54;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .section--hero {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-image: url("../../assets/castle-fs8.png");
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-color: var(--white);
    /* text-shadow: 0px 0px 5px #777; */
  }

  .section--hero h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .section--hero h1 {
      font-size: 5rem;
      //- font-weight: 0;
    }
  }

  .text--blead {
    font-size: 130%;
    //- letter-spacing: -0.02em;
  }
  @media (min-width: 992px) {
    .text--blead {
      font-size: 150%;
    }
  }

  .invert-box {
    background-color: var(--off-white);
    border: 1px solid black;
    border-radius: 1rem;
  }

  .rethink-point {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
    margin: 1rem;
    background-color: var(--off-white);
  }

  @media (min-width: 992px) {
    .rethink-point {
      display: flex;
      flex-direction: row;
    }
  }

  @media (max-width: 992px) {
    .rethink-point {
      text-align: center;
    }

    .rethink-point div {
      text-align: left;
    }
  }

  .rethink-icon {
    /* border-radius: 100%; */
    height: 6rem;
    width: 6rem;
    /* background-color: #ccc; */
    mix-blend-mode: multiply;
    flex-shrink: 0;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .community-card {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    margin: 1rem;
    margin-left: 0;
    margin-right: 0;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    color: var(--dark);
    background-color: #f2f7f2;
    min-height: 13rem;
  }

  .community-card:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .community-icon {
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;
    margin-right: 1rem;
  }

  .community-icon img {
    height: 100%;
    width: 100%;
  }

  .community-desc {
    padding-top: 0.5rem;
  }

  .rss-container {
    margin-left: -1.8rem;
    margin-right: -1.8rem;
  }

  .small-lead {
    font-size: 110%;
    font-weight: 400;
  }

  .section--darken {
    background-color: var(--dark-color);
  }

  .section--darken * {
    color: rgba(255, 255, 255, 1);
  }

  .learnmore {
    //- text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 600;
    font-family: var(--display-font);
    text-decoration: none;
    font-size: 110%;
  }

  .huge {
    font-size: 300%;
  }
</style>
