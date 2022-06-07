<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import TeamIcon from "../../components/TeamIcon.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/roadmap.l10n.yaml";

  $: l10n = l10nLoad({ ...base, ...layer }, $lang);
</script>

<template lang="pug">
    MainLayout(title="roadmap")
      .section
        .section__inner.container
          .row.mb-3
            .col
              h1 {l10n("phases-title")}
              p.text--lead {l10n("phases")}  
              p.text--lead {@html l10n("phases-body")}

      .section.section--darken
        .section__inner.container
          .row.mb-3
            div {@html l10n("detail1")}
            div {@html l10n("detail2")}

</template>
