<script>
    
import MainLayout from "../../components/MainLayout.svelte";
import { l10nLoad, lang } from "../../l10n/l10n";

import base from "../../l10n/base.yaml";
import layer from "../../l10n/overview.l10n.yaml"

console.log(base)
$: l10n = l10nLoad({ ...base, ...layer }, $lang);

</script>

<template>
    <MainLayout>
        <div class="section">
            <div class="section__inner container">
                <div class="row">
                    <div class="col">
                        <h1>{@html l10n("nav/overview")}</h1>
                        <p class="text--lead">{@html l10n("overview/hero")}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg round-card arch-description m-3 p-5">
                        <img src="/images/smillust/badstack.png" class="img-fluid" style="mix-blend-mode: darken">
                        {@html l10n("overview/traditional-blockchains")}
                    </div>
                    <div class="col-lg round-card arch-description m-3 p-5">
                        <img src="/images/smillust/goodstack.png" class="img-fluid" style="mix-blend-mode: darken">
                        {@html l10n("overview/themelio-decoupled")}
                    </div>
                </div>
            </div>
        </div>
        <div class="section section--darken">
            <div class="section__inner container">
                <div class="row">
                    <div class="col-lg-4"><img src="/images/smillust/endotrust.png" class="img-fluid" style="mix-blend-mode: darken">
                    </div>
                    <div class="col-lg-8">
                        {@html l10n("overview/robust-endogenous-trust")}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section__inner container">
                <div class="row">
                    <div class="col-lg-8">
                        {@html l10n("overview/smart-coins")}
                    </div>
                    <div class="col-lg-4"> <img src="/images/smillust/utxo.png" class="img-fluid" style="mix-blend-mode: darken">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section section--darken">
            <div class="section__inner container">
                <div class="row">
                    <div class="col-lg-4"> <img src="/images/smillust/consensus.png" class="img-fluid" style="mix-blend-mode: darken">
                    </div>
                    <div class="col-lg-8">
                        {@html l10n("overview/collusion-resistant")}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section__inner container">
                <div class="row">
                    <div class="col-lg-8">
                        {@html l10n("overview/non-fiat-stablecoin")}
                    </div>
                    <div class="col-lg-4"> <img src="/images/smillust/stablecoin.png" class="img-fluid" style="mix-blend-mode: darken">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section section--darken">
            <div class="section__inner container">
                <div class="row">
                    <!-- <div class="col-lg">
                        <h2>Join our testnet</h2>
                        <p class="text--lead">Test out the Themelio network and get mainnet rewards by participating in testnet contests.</p>
                        <a href="" class="btn btn-outline-dark btn-lg">Testnet portal</a>
                    </div> -->
                    <div class="col-lg">
                        {@html l10n("overview/knowledge-base")}
                    </div>
                </div>
            </div>
        </div>
        

    </MainLayout>

</template>