<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faGithub,
    faTwitter,
    faTelegram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { 
    faGlobe
  } from "@fortawesome/free-solid-svg-icons";

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

  let links = [
    [website, faGlobe],
    [github, faGithub],
    [twitter, faTwitter],
    [telegram, faTelegram],
    [linkedin, faLinkedin],
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
        +each('links as link')
          +if('link[0] != ""')
            a.links(href!="{link[0]}")
              Fa(icon!="{link[1]}")
</template>

<style lang="scss">
  .team-member{
    background: white;
    border-radius: 1em;
    border: 1px solid var(--primary-color);
    padding: 2em;
    margin: 1em;
    height: 34em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .team-member img{
    width: 7em;
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