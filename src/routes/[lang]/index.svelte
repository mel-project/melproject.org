<script context="module">
  export async function load({ params }) {
    return { props: { lang: params.lang } };
  }
</script>

<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import { l10nLoad } from "../../l10n/l10n";
  import base from "../../l10n/base.yaml";
  export let lang;

  $: l10n = l10nLoad(base, lang);
</script>

<MainLayout title="{'Hello'}," {lang} />

{lang}
