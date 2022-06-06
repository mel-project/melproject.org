<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/index.l10n.yaml";
  $: l10n = l10nLoad({ ...base, ...layer }, $lang);

  let carouselPosn = 0;
  let carouselimgs = "homepage-participate.png homepage-build.png homepage-learn.png".split(" ")
  $: carouselimg = carouselimgs[carouselPosn]

</script>

<template lang="pug">
MainLayout(title!='{l10n("nav/home")}')
  .section.section--hero
    .section__inner.container
      .row
        .col
          .alert.alert-cta
            .ml-3
              | {@html l10n("wallet-cta")}
      .row
        .col-12.col-lg-9
          h1 {@html l10n("tagline")}
          p.text--blead {@html l10n("subtitle")}
        .col-6.col-md-12
          a.btn.btn-outline-primary.btn-lg(href='#community-sect')
            | {l10n("join-the-community")}
  // why themelio
  .section.section--darken
    .section__inner.container
      .row
        .col
          h2 {l10n("why-title")}
      .row
        .rethink-point.col-lg
          img.rethink-icon(src='/images/smillust/keyhole.png', alt='circle with key')
          div {@html l10n("why-1")}
        .rethink-point.col-lg
          img.rethink-icon(src='/images/smillust/fork.png', alt='circle with fork')
          div {@html l10n("why-2")}
      .row
        .rethink-point.col-lg
          img.rethink-icon(src='/images/smillust/mel-small.png', alt='circle with mel')
          div {@html l10n("why-3")}
        .rethink-point.col-lg
          img.rethink-icon(src='/images/smillust/scalability.png', alt='scalable')
          div {@html l10n("why-4")}
  // melmint
  .section
    .section__inner.container
      .row
        .col-12.col-lg-6
          img.img-fluid(src='/images/smillust/mel-big.png', style='mix-blend-mode: darken;', alt='a mel floating on an ocean')
        .col-12.col-lg-6
          h2 {@html l10n("melmint-title")}
          div {@html l10n("melmint-summary")}
  // radiobuttons
  .section.section--darken
    .section__inner.container
      .row
        .col-12.pb-3(class!='{carouselPosn}')
          h2 {@html l10n("explore-themelio")}
      .row
        .col-md
          .tab-set
            .tab-button(class:tab-button-active!="{carouselPosn == 0}" on:click!='{() => (carouselPosn = 0)}')
              | {l10n("participate")}
            .tab-button(class:tab-button-active!="{carouselPosn == 1}" on:click!='{() => (carouselPosn = 1)}')
              | {l10n("build")}
            .tab-button(class:tab-button-active!="{carouselPosn == 2}" on:click!='{() => (carouselPosn = 2)}')
              | {l10n("learn")}

          +if('carouselPosn == 0')
            div {@html l10n("participate-desc")}
            +elseif('carouselPosn == 1')
              div {@html l10n("build-desc")}
            +else
              div {@html l10n("learn-desc")}

        .col-md
          img.img-fluid(src!="/images/{carouselimg}" style="mix-blend-mode: darken;" alt="carousel")
  // community
  #community-sect.section
    .section__inner.container
      .row
        .col-lg-2
          .col.text-center {@html l10n("community")}
          .col-lg-2
          .row
            .col-md
              a.community-card(href='https://discord.gg/qfg35paESn')
                .community-icon
                  img(src='/images/social_media/discord.png', alt='discord')
                .community-desc {@html l10n("community/discord")}
            .col-md
              a.community-card(href='https://t.me/themeliolabs')
                .community-icon
                  img(src='/images/social_media/telegram.png', alt='telegram')
                .community-desc {@html l10n("community/telegram")}
          .row
            .col-md
              a.community-card(href='https://twitter.com/themeliolabs')
                .community-icon
                  img(src='/images/social_media/twitter.png', alt='twitter')
                .community-desc {@html l10n("community/twitter")}
            .col-md
              a.community-card(href='https://github.com/themeliolabs/')
                .community-icon
                  img(src='/images/social_media/github.png', alt='github')
                .community-desc {@html l10n("community/github")}
      // blog
    #blog-sect.section.section.section--darken
      .section__inner.container
        .row
          .col
            h2 {@html l10n("blog")}
            .rss-container
              rssapp-wall#XBZoy5LUiQA6UTZM
            script(src='https://widget.rss.app/v1/wall.js', type='text/javascript', async='')
    // team
    #team-sect.section
      .section__inner.container
        .row
          .col-lg
            .col-lg-8.text-center
              h2 {@html l10n("team")}
              a.btn.btn-outline-primary.btn-lg(href='team.html')
                | {@html l10n("view-our-team")}
            .col-lg
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

  .tab-button {
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
    /* text-shadow: 0px 0px 5px #777; */
  }

  .section--hero h1 {
    font-size: 3rem;
    font-weight: 350;
  }

  @media (min-width: 768px) {
    .section--hero h1 {
      font-size: 5rem;
      font-weight: 300;
    }
  }

  .text--blead {
    font-size: 130%;
  }
  @media (min-width: 992px) {
    .text--blead {
      font-size: 150%;
    }
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
</style>
