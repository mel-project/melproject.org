<script>
  import NavLink from "./NavLink.svelte";
  import NavDropdown from "./NavDropdown.svelte";
  // import themelioLogo from "../assets/new-logo.png";
  import { lang, Language_Shortname, localize } from "../l10n";
  import { page } from "$app/stores";

  export let currentPath = ""; // the usage here needs a refactor

  $: l10n = localize($lang);
</script>

<template />

<style lang="scss">
  .navbar-brand {
    max-width: 10rem;
    width: 100%;
    display: inline-block;
  }

  .top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
  }

  .center {
    text-align: center;
    margin: auto;
    line-height: 3.2;
  }

  img.social-media-icon {
    max-width: 4em;
  }
  .navbar-toggler {
    display: none;
    position: absolute;
  }
  @media only screen and (max-width: 770px) {
    .navbar-toggler {
      display: inline-block;
      position: inherit;
      color: var(--primary-color);
      border: none !important;
      &:focus {
        outline: none;
        box-shadow: 0 0 0 0;
      }
      .hamburger {
        line-height: 6;
      }
    }
    .lang-selector {
      text-align: right;
    }
  }
</style>
