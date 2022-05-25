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

  let carouselPosn = 0;
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
          <img
            class="rethink-icon"
            src="/images/smillust/keyhole.png"
            alt="circle with key"
          />
          <div>{@html l10n("why-1")}</div>
        </div>
        <div class="rethink-point col-lg">
          <img
            class="rethink-icon"
            src="/images/smillust/fork.png"
            alt="circle with fork"
          />
          <div>{@html l10n("why-2")}</div>
        </div>
      </div>
      <div class="row">
        <div class="rethink-point col-lg">
          <img
            class="rethink-icon"
            src="/images/smillust/mel-small.png"
            alt="circle with mel"
          />
          <div>{@html l10n("why-3")}</div>
        </div>
        <div class="rethink-point col-lg">
          <img
            class="rethink-icon"
            src="/images/smillust/scalability.png"
            alt="scalable"
          />
          <div>{@html l10n("why-4")}</div>
        </div>
      </div>
    </div>
  </div>

  <!--melmint-->
  <div class="section">
    <div class="section__inner container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <img
            class="img-fluid"
            src="/images/smillust/mel-big.png"
            style="mix-blend-mode: darken;"
            alt="a mel floating on an ocean"
          />
        </div>
        <div class="col-12 col-lg-6">
          <h2>{@html l10n("melmint-title")}</h2>
          {@html l10n("melmint-summary")}
        </div>
      </div>
    </div>
  </div>

  <!--radiobuttons-->
  <div class="section section--darken">
    <div class="section__inner container">
      <div class="row">
        <div class="col-12 pb-3">
          <h2>{@html l10n("explore-themelio")}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <div class="tab-set">
            <div
              class="tab-button"
              class:tab-button-active={carouselPosn == 0}
              on:click={() => (carouselPosn = 0)}
            >
              {l10n("participate")}
            </div>
            <div
              class="tab-button"
              class:tab-button-active={carouselPosn == 1}
              on:click={() => (carouselPosn = 1)}
            >
              {l10n("build")}
            </div>
            <div
              class="tab-button"
              class:tab-button-active={carouselPosn == 2}
              on:click={() => (carouselPosn = 2)}
            >
              {l10n("learn")}
            </div>
          </div>

          {#if carouselPosn == 0}
            <div>{@html l10n("participate-desc")}</div>
          {:else if carouselPosn == 1}
            <div>{@html l10n("build-desc")}</div>
          {:else}
            <div>{@html l10n("learn-desc")}</div>
          {/if}
        </div>
        <div class="col-md">
          <img
            class="img-fluid"
            src={carouselPosn == 0
              ? "/images/homepage-participate.png"
              : carouselPosn == 1
              ? "/images/homepage-build.png"
              : "/images/homepage-learn.png"}
            style="mix-blend-mode: darken;"
            alt="carousel"
          />
        </div>
      </div>
    </div>
  </div>
</MainLayout>

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
