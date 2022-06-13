<script>
  import Fa from "svelte-fa";
  import {
    faGlobe,
    faGithub,
    faTwitter,
    faTelegram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

  export let name;
  export let title;
  export let blurb;
  export let aka = "";
  export let website = "";
  export let github = "";
  export let twitter = "";
  export let telegram = "";
  export let linkedin = "";

  let links = {
    website: [website, faGlobe],
    github: [github, faGithub],
    twitter: [twitter, faTwitter],
    telegram: [telegram, faTelegram],
    linkedin: [linkedin, faLinkedin],
  };
</script>

<template lang="pug">

    h1 {name}
    small(style="margin-top: -0.5rem; display: block") {aka}
    span.bio-title {title}
    hr
    
    p {blurb}

    +each('Object.values(links) as link')
        svelte:component(this!="{links[1]}")
</template>
