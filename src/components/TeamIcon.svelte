<script lang="ts">

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


  let faGlobe = "fa-solid fa-globe"
  let faGithub = "fa-brands fa-github"
  let faTwitter = "fa-brands fa-twitter"
  let faTelegram = "fa-brands fa-telegram"
  let faLinkedin = "fa-brands fa-linkedin"

  interface Link {
    href: string,
    icon: string
  }
  function link(href, icon): Link{
    return {
      href,
      icon
    }
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

<template lang="pug">
    .team-member
      .info
        img(src!="{img}")
        h1 {name}
        small(style="margin-top: -0.5rem; display: block") {aka}
        span.bio-title {title}
        hr
      
        p {blurb}
      .links-container
        +each('links as l')
          +if('l.href != ""')
            a.links(href!="{l.href}")
              i(class!='{l.icon}')
</template>

<style lang="scss">
  .team-member{
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

  .team-member img{
    width: 50%;
    border-radius: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .links{
    display: inline-block;
    width: 2.3em;
    padding-right: .5em;
    box-sizing: border-box;
    & :global(svg){
      height: 100% !important;
    }


    
  }
</style>