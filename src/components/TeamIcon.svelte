<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faGithub,
    faTwitter,
    faTelegram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { faGlobe } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher, getContext, onMount } from "svelte";

  export let name: string;
  export let title: string;
  export let blurb: string;
  export let img: string;
  export let aka = "";
  export let website = "";
  export let github = "";
  export let twitter = "";
  export let telegram = "";
  export let linkedin = "";

  interface Link {
    href: string;
    icon: any;
  }
  function link(href: string, icon: any): Link {
    return {
      href,
      icon,
    };
  }
  let dispatch = createEventDispatcher();
  let links = [
    link(website, faGlobe),
    link(github, faGithub),
    link(twitter, faTwitter),
    link(telegram, faTelegram),
    link(linkedin, faLinkedin),
  ];
</script>

<template />

<style lang="scss">
  .team-member {
    background: clear;
    border-radius: 1em;
    border: 1px solid var(--primary-color);
    padding: 2em 1.5em;
    margin: 1em;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // gap: 1em;
  }

  .team-member img {
    width: 50%;
    border-radius: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .links {
    display: inline-block;
    width: 2.3em;
    padding-right: 0.5em;
    box-sizing: border-box;
    & :global(svg) {
      height: 100% !important;
    }
  }
</style>
