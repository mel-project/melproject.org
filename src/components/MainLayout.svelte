<script>
  export let title;

  import Nav from "./Nav.svelte";
  import { lang, localize } from "../l10n";

  $: l10n = localize($lang);

  let debugging = false;
  let innerWidth;

  export let currentPath = "";
</script>

<template />

<style lang="scss">
  /* footer */

  footer {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--primary-dark);
    color: var(--white);
  }

  footer * {
    color: var(--white) !important;
  }

  footer .text-muted {
    color: var(--white) !important;
    opacity: 0.8;
  }

  footer .btn {
    background-color: #00be92;
    color: var(--white) !important;
  }

  footer > div > div > div {
    padding-bottom: 2rem;
  }

  .footer__logo {
    max-height: 24pt;
    max-width: 100%;
    height: auto;
    opacity: 0.7;
  }
</style>
