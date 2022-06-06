<script>
    
import MainLayout from "../../components/MainLayout.svelte";
import { l10nLoad, lang } from "../../l10n/l10n";

import base from "../../l10n/base.yaml";
import layer from "../../l10n/overview.l10n.yaml"

console.log(base)
$: l10n = l10nLoad({ ...base, ...layer }, $lang);

</script>

<template lang="pug">
MainLayout(title="overview")
    .section
      .section__inner.container
        .row
          .col
            h1 {@html l10n("nav/overview")}
            p.text--lead {@html l10n("overview/hero")}
        .row
          .col-lg.round-card.arch-description.m-3.p-5
            img.img-fluid(src='/images/smillust/badstack.png', style='mix-blend-mode: darken')
            div {@html l10n("overview/traditional-blockchains")}
          .col-lg.round-card.arch-description.m-3.p-5
            img.img-fluid(src='/images/smillust/goodstack.png', style='mix-blend-mode: darken')
            div {@html l10n("overview/themelio-decoupled")}
    .section.section--darken
      .section__inner.container
        .row
          .col-lg-4
            img.img-fluid(src='/images/smillust/endotrust.png', style='mix-blend-mode: darken')
          .col-lg-8
            | {@html l10n("overview/robust-endogenous-trust")}
    .section
      .section__inner.container
        .row
          .col-lg-8
            | {@html l10n("overview/smart-coins")}
          .col-lg-4
            img.img-fluid(src='/images/smillust/utxo.png', style='mix-blend-mode: darken')
    .section.section--darken
      .section__inner.container
        .row
          .col-lg-4
            img.img-fluid(src='/images/smillust/consensus.png', style='mix-blend-mode: darken')
          .col-lg-8
            | {@html l10n("overview/collusion-resistant")}
    .section
      .section__inner.container
        .row
          .col-lg-8
            | {@html l10n("overview/non-fiat-stablecoin")}
          .col-lg-4
            img.img-fluid(src='/images/smillust/stablecoin.png', style='mix-blend-mode: darken')
    .section.section--darken
      .section__inner.container
        .row
          //
            <div class="col-lg">
            <h2>Join our testnet</h2>
            <p class="text--lead">Test out the Themelio network and get mainnet rewards by participating in testnet contests.</p>
            <a href="" class="btn btn-outline-dark btn-lg">Testnet portal</a>
            </div>
          .col-lg
            | {@html l10n("overview/knowledge-base")}
</template>