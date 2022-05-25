<script context="module">
  export async function load({ params }) {
    return { props: { lang: params.lang } };
  }
</script>

<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import { l10nLoad } from "../../l10n/l10n";
  export let lang;

  import base from "../../l10n/base.yaml";
  import layer from "./index.l10n.yaml";
  $: l10n = l10nLoad({ ...base, ...layer }, lang);
</script>

<MainLayout title={l10n("nav/home")} {lang}>
  <!-- main hero -->
  <div class="section section--hero">
    <div class="section__inner container">
      <div class="row">
        <div class="col">
          <div class="alert alert-cta">
            <div class="ml-3">
              {@html l10n("wallet-cta")}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-9">
          <h1>{@html l10n("tagline")}</h1>
          <p class="text--blead">{@html l10n("subtitle")}</p>
        </div>
        <div class="col-6 col-md-12">
          <a href="#community-sect" class="btn btn-outline-primary btn-lg">
            {l10n("join-the-community")}
          </a>
        </div>
      </div>
    </div>
  </div>
</MainLayout>

<style>
  .section {
    padding-top: 3em;
    padding-bottom: 3em;
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

  .section--hero h1 b {
    /* font-size: 3rem; */
    font-weight: 450;
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
</style>
