<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import BlogFeed from "../../components/BlogFeed.svelte";
  import BlinkingTexts from "../../components/BlinkingTexts.svelte";
  import ExploreCarousel from "../../components/ExploreCarousel.svelte";
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
          h1 The first #[br] #[i.text-primary #[BlinkingTexts(labels!='{["self-securing", "governance-free", "anti-collusion", "truly trustless"]}')]] #[br] blockchain network
          p.text--blead Themelio is an #[b immutable root of trust] built to realize the blockchain revolution we all wanted: a world secured by robust mechanisms and decentralized incentives, not untrustworthy and centralized third parties.
      .row
        .col 
          a.btn.btn-primary.btn-lg(href='#community-sect').mx-3.m-1
            | {l10n("join-the-community")}
          a.btn.btn-outline-secondary.btn-lg(href='/en/tech').mx-3.m-1
            | {l10n("learn-more")}

  .section.text-center
    .section__inner.container
      .row
        .col
          p.text--blead
            i 🎉 Public alpha of Melodeon: our high-level covenant language 🎉
      .row
        .col
          a.btn.btn-outline-secondary.btn-lg(href='https://melodeonlang.org')
            | Start coding now!


  .section
    .section__inner.container
      .row
        .col-md-5.p-md-3
          <img src="/images/homepage/utxo.png" class="img-fluid my-5"/> 
        .col-md-7.p-md-3
          h2.py-2 Governance-free modular architecture
          p.small-lead Themelio's unique modular architecture achieves Ethereum-like generality #[b and] better-than-Bitcoin immutability and neutrality. This is done through a minimally enhanced UTXO model that focuses on blockchains core task: providing a neutral security foundation independent of all protocol-external trust. 

          a.learnmore(href="https://docs.themelio.org/table-of-contents/") Our robust, app-decoupled design <i class="fa-solid fa-chevron-right fa-sm"></i>
  .section
    .section__inner.container
      .row
        .col-md-5.d-md-none.p-md-3
          <img src="/images/homepage/vault.png" class="img-fluid my-5"/> 
        .col-md-7.p-md-3
          h2.py-2 Decentralized sound money and resilient #[nobr proof-of-stake] consensus
          p.small-lead MEL, the native currency, is a #[a(href="https://docs.themelio.org/basic-concepts/04-melmint/") #[b breakthrough, oracle-free &ldquo;stablecoin&rdquo;]] independent of all fiat currency. Along with SYM, a separate PoS token, it participates in Themelio's uniquely collusion-resistant consensus game Synkletos that greatly improves long-term security over existing mechanisms.

          a.learnmore(href="https://docs.themelio.org/basic-concepts/03-consensus/") Realizing a sound cryptocurrency economy <i class="fa-solid fa-chevron-right fa-sm"></i>
        .col-md-5.d-none.d-md-block.p-md-3
          <img src="/images/homepage/vault.png" class="img-fluid  mb-4"/> 

  .section
    .section__inner.container
      .row
        .col-md-5.p-md-3
          <img src="/images/homepage/balloons.png" class="img-fluid my-5"/> 
        .col-md-7.p-md-3
          h2.py-2 Endless extensibility #[nobr #[i beyond] &ldquo;Web3&rdquo;]
          p.small-lead Thanks to its zero-governance stability and easily embeddable, app-decoupled design, Themelio is a suitable #[b root of trust] for decentralized apps beyond the current scope of Web3. Unlike existing L1s, Themelio is perfect for securing critical non-blockchain, non-financial protocols ranging from end-to-end encrypted communication to uncensorable file publishing.

          a.learnmore(href="https://docs.themelio.org/basic-concepts/01-endogenous-trust/") Themelio&rsquo;s vision for a Web3 paradigm shift <i class="fa-solid fa-chevron-right fa-sm"></i>



  //- Big carousel
  .section.explore
    .section__inner.container.my-md-5
      .row
        .col
          .h1.p-md-3 Explore Themelio
          ExploreCarousel
        .col-md-3
        

  #community-sect.section.section
    .section__inner.container
      .row
        .col.text-center
          h1 Join our community
          p.small-lead Be part of a growing community of global developers, innovators, and users helping us realize Themelio's vision.
      .row
        .col-md-6.container-fluid
          .row
            a.col.text-center.community-card(href="https://discord.gg/themelio" target="_blank" rel="noopener")
              img(src="/images/social_media/discord.png" class="community-icon")
              h5.m-3 Discord
              a.join <i class="fa-solid fa-plus"></i> Join
            a.col.text-center.community-card(href="https://twitter.com/themeliolabs" target="_blank" rel="noopener")
              img(src="/images/social_media/twitter.png" class="community-icon")
              h5.m-3 Twitter
              a.join <i class="fa-solid fa-plus"></i> Join
            a.col.text-center.community-card(href="https://github.com/themeliolabs" target="_blank" rel="noopener")
              img(src="/images/social_media/github.png" class="community-icon")
              h5.m-3 GitHub
              a.join <i class="fa-solid fa-plus"></i> Join
            a.col.text-center.community-card(href="https://t.me/themeliolabs" target="_blank" rel="noopener")
              img(src="/images/social_media/telegram.png" class="community-icon")
              h5.m-3 Telegram
              a.join <i class="fa-solid fa-plus"></i> Join
            a.col.text-center.community-card(href="https://forum.themelio.org" target="_blank" rel="noopener")
              img(src="/images/social_media/discourse.png" class="community-icon")
              h5.m-3 Forum
              a.join <i class="fa-solid fa-plus"></i> Join
            a.col.text-center.community-card(href="https://medium.com/themelio" target="_blank" rel="noopener")
              img(src="/images/social_media/medium.png" class="community-icon")
              h5.m-3 Medium
              a.join <i class="fa-solid fa-plus"></i> Join

  #team-sect.section
    .section__inner.container
      .row.p-md-3
        .col-md
          h2.my-4 Team
          p.small-lead Learn about (and perhaps join!) our visionary founder, top protocol engineers, and industry-leading partners. 
          a.btn.btn-primary(href!="{'/' + $lang + '/team'}")
            | View team <i class="fa-solid fa-chevron-right fa-sm"></i>
          a.btn.btn-outline-secondary.mx-2(href="https://angel.co/company/themelio/jobs" target="_blank" rel="noopener")
            | Current openings <i class="fa-solid fa-arrow-up-right-from-square"></i>
        .col-md
          h2.my-4 Developers
          p.small-lead Read our comprehensive developer documentation and start experimenting with Themelio now!
          a.btn.btn-outline-primary(href="https://docs.themelio.org" target="_blank" rel="noopener") Documentation <i class="fa-solid fa-arrow-up-right-from-square"></i>


  #blog-sect.section.section
    .section__inner.container
      .row
        .col
          h1.p-3 {@html l10n("blog")}
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
    //- background-color: var(--white);
    /* text-shadow: 0px 0px 5px #777; */
  }

  .section--hero h1 {
    font-size: 3rem;
    font-weight: 400;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media (min-width: 768px) {
    .section--hero h1 {
      font-size: 5rem;
      //- font-weight: 0;
    }

    .explore {
      background-image: url("/images/homepage/blocks.png");
      background-size: cover;
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

  .community-icon {
    height: 2rem;
    width: 2rem;
  }

  .community-desc {
    padding-top: 0.5rem;
  }

  .join {
    text-transform: uppercase;
    font-size: 110%;
    text-decoration: none;
    letter-spacing: 0.05rem;
  }

  .community-card {
    border: 1px solid var(--primary-color);
    border-radius: 0.3rem;
    padding: 1rem;
    margin: 1rem;
    display: block;
    text-decoration: none;
    //- background-color: white;
  }

  .community-card:hover {
    background-color: white;
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
    background-color: var(--primary-dark);
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

  .learnmore:hover {
    text-decoration: underline;
  }

  .huge {
    font-size: 300%;
  }
</style>
