<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/overview.l10n.yaml";

  console.log(base);
  $: l10n = l10nLoad({ ...base, ...layer }, $lang);
</script>

<template lang="pug">
MainLayout(title="Technology" currentPath="tech")
    .section
      .section__inner.container
        .row
          .col
            h1 Technology
            p.text--lead {@html l10n("overview/hero")}
        .row
          .col-lg-1
          .col-lg.round-card.arch-description.m-lg-4.p-5
            img.img-fluid(src='/images/tech/badstack.png', style='mix-blend-mode: darken')
            div {@html l10n("overview/traditional-blockchains")}
          .col-lg.round-card.arch-description.m-lg-4.p-5
            img.img-fluid(src='/images/tech/goodstack.png', style='mix-blend-mode: darken')
            div {@html l10n("overview/themelio-decoupled")}
          .col-lg-1
    .section
      .section__inner.container
        .row
          //
            <div class="col-lg">
            <h2>Join our testnet</h2>
            <p class="text--lead">Test out the Themelio network and get mainnet rewards by participating in testnet contests.</p>
            <a href="" class="btn btn-outline-dark btn-lg">Testnet portal</a>
            </div>
          .col-lg.text-center
            | {@html l10n("overview/knowledge-base")}
    .section
      .section__inner.container
        .row
          .col-lg-6
            .smacard.m-lg-3.my-lg-4.p-3.p-lg-5
              .smicon 
                img.img-fluid(src="/images/tech/keyhole.png")
              div {@html l10n("overview/robust-endogenous-trust")}
          .col-lg-6
            .smacard.m-lg-3.my-lg-4.p-3.p-lg-5
              .smicon 
                img.img-fluid(src="/images/tech/utxo.png") 
              div {@html l10n("overview/smart-coins")}
        .row
          .col-lg-6
            .smacard.m-lg-3.my-lg-4.p-3.p-lg-5
              .smicon 
                img.img-fluid(src="/images/tech/consensus.png")
              div {@html l10n("overview/collusion-resistant")}
          .col-lg-6
            .smacard.m-lg-3.my-lg-4.p-3.p-lg-5
              .smicon 
                img.img-fluid(src="/images/tech/mel.png")
              div {@html l10n("overview/non-fiat-stablecoin")}

</template>

<style>
  .round-card {
    background-color: white;
    border-radius: 0.3rem;
    border: 1px solid var(--primary-color);
  }

  .smacard {
    background-color: white;
    border-radius: 0.3rem;
    border: 1px solid var(--primary-color);

    min-height: 32rem;

    display: flex;
    flex-direction: row;
  }

  .smicon {
    padding-right: 2rem;
    min-width: calc(min(10rem, 20vw));
    flex-grow: 1;
  }

  .smicon img {
    width: calc(min(10rem, 20vw) - 2rem);
    height: calc(min(10rem, 20vw) - 2rem);
  }
</style>
