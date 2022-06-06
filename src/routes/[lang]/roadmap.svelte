<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import TeamIcon from "../../components/TeamIcon.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/roadmap.l10n.yaml";

  $: l10n = l10nLoad({ ...base, ...layer }, $lang);
</script>

<template>
    <div class="section">
        <div class="section__inner container">
          <div class="row mb-3">
            <div class="col"><h1>{l10n("phases-title")}</h1> <p class="text--lead">{l10n("phases")}</p> <p class="text--lead"> 
                {l10n("phases-body")}
            </div>
        </div>
      </div>
    </div>
      <div class="section section--darken">
        <div class="section__inner container">
          <div class="row mb-3">
              {l10n("detail1")}
              {l10n("detail2")}
          </div>
        </div>
      </div>
    
</template>