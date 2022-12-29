<script>
  let selected = 0;
  $: selections = [
    {
      label: "Make a wallet",
      icon: "bi-wallet",
    },
    {
      label: "Run a node",
      icon: "bi-diagram-3",
    },
    {
      label: "Mint MEL",
      icon: "bi-coin",
    },
    {
      label: "Develop covenants",
      icon: "bi-braces-asterisk",
    },
  ];
  import { localize, lang } from "../l10n";
  import { slide } from "svelte/transition";
  $: l10n = localize($lang);
</script>

<div class="inner">
  <div class="main">
    {#if selected == 1}
      <div transition:slide>
        <img
          src="/images/homepage/melscan.png"
          alt="melscan"
          class="showcase-img"
        />
        {@html l10n("run-node-desc")}
      </div>
    {:else if selected == 2}
      <div transition:slide>
        <img
          alt="melscan"
          class="showcase-img"
          src="/images/homepage/minting.png"
        />
        Though our token sale has not yet happened, you can obtain MEL right now
        using
        <a href="https://docs.themelio.org/try-themelio/melminter/">Melminter</a
        >. Be one of the first people to own assets on the Themelio mainnet!
      </div>
    {:else if selected == 0}
      <div transition:slide>
        <img
          alt="melscan"
          class="showcase-img"
          src="/images/homepage/wallet.png"
        />
        Themelio's mainnet already has user-friendly wallets supporting everything
        from sending simple transactions to swapping assets using the built-in Melswap
        DEX. You can beta-test our
        <a
          href="https://medium.com/themelio/announcement-incentivized-beta-for-mellis-themelios-gui-wallet-9f0a3b067ff2?source=rss----cd2083e4318---4"
          >GUI wallet Mellis</a
        >, or use the more stable and feature-complete
        <a href="https://docs.themelio.org/try-themelio/my-first-tx/"
          >command-line toolchain</a
        >.
      </div>
    {:else if selected == 3}
      <div transition:slide>
        <img
          alt="melscan"
          class="showcase-img"
          src="/images/homepage/melodeon.png"
        />
        <p>
          Covenants are the equivalent of smart contracts in Themelio's unique
          <a href="https://docs.themelio.org/basic-concepts/02-state/"
            >coin-based transaction model</a
          >. Covenants are typically written in the official high-level language
          Melodeon, an easy-to-use, statically typed, total functional
          programming language which compiles to on-chain MelVM code.
        </p>

        <p>
          We've recently released the <a href="https://melodeonlang.org"
            >first alpha release of Melodeon</a
          >! The <a href="https://guide.melodeonlang.org">Melodeon Guide</a>
          teaches you how to write covenants in Melodeon and deploy them to our
          <a href="https://guide.melodeonlang.org/9_deploying_covenants.html"
            >mainnet and testnet</a
          >.
        </p>
      </div>
    {/if}
  </div>
  <div class="switcher">
    {#each selections as item, idx}
      <span class:active={idx == selected} on:click={() => (selected = idx)}>
        <i class={"bi " + item.icon} />
        {item.label}
      </span>
    {/each}
  </div>
</div>

<style>
  /* .wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
  } */

  .showcase-img {
    border: solid 1px var(--primary-color);
    border-radius: 0.3rem;
    margin-bottom: 2rem;
    aspect-ratio: 16/9;
    width: 100%;
    display: block;
  }

  .inner {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    .inner {
      flex-direction: column-reverse;
    }
  }

  .main {
    flex-grow: 1;

    padding: 1rem;
    font-size: 105%;
  }

  .switcher {
    padding: 1rem;
    min-width: 18rem;
  }

  .switcher span {
    text-decoration: none;
    font-size: 120%;
    cursor: pointer;
    color: #000000a0;
    margin-bottom: 1rem;
    display: block;

    border: solid 1px var(--primary-color);
    border-radius: 0.3rem;
    padding-left: 1rem;
    background-color: white;
  }

  .switcher span:hover {
    color: var(--primary-dark);
  }

  .switcher span.active {
    color: var(--primary-color);
    font-weight: 600;
  }

  .bi {
    font-size: 130%;
  }
</style>
