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

  <!--why themelio-->
  <div class="section section--darken">
    <div class="section__inner container">
      <div class="row">
        <div class="col">
          <h2>{l10n("why-title")}</h2>
        </div>
      </div>
      <div class="row">
        <div class="rethink-point col-lg">
          <img class="rethink-icon" src="/images/smillust/keyhole.png" />
          <div>{@html l10n("why-1")}</div>
        </div>
        <div class="rethink-point col-lg">
          <img class="rethink-icon" src="/images/smillust/fork.png" />
          <div>{@html l10n("why-2")}</div>
        </div>
      </div>
      <div class="row">
        <div class="rethink-point col-lg">
          <img class="rethink-icon" src="/images/smillust/mel-small.png" />
          <div>{@html l10n("why-3")}</div>
        </div>
        <div class="rethink-point col-lg">
          <img class="rethink-icon" src="/images/smillust/scalability.png" />
          <div>{@html l10n("why-4")}</div>
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

  .rethink-point {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
    margin: 1rem;
    background-color: var(--off-white);
  }

  .rethink-point h4 {
    margin-bottom: 1rem;
    margin-top: 1rem;
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
</style>
