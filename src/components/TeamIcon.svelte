<script>
    import Fa from 'svelte-fa'
    import { faGlobe } from '@fortawesome/free-solid-svg-icons'
    import { faGithub, faTwitter, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'



    let name;
    let title;
    let blurb;
    let aka = "";
    let website = "";
    let github = "";
    let twitter = "";
    let telegram = "";
    let linkedin = "";


    let links = {
        website: [website, faGlobe],
        github: [github, faGithub],
        twitter: [twitter, faTwitter],
        telegram: [telegram, faTelegram],
        linkedin: [linkedin, faLinkedin]
    }




</script>

<template lang="pug">

    h1 {name}
    small(style="margin-top: -0.5rem; display: block") aka {aka}
    span.bio-title {title}
    hr
    
    p {blurb}

    +each('Object.values(links) as link')
        div {link}
</template>