<script lang="ts">
    import NavLink from "./NavLink.svelte"
    import NavDropdown from "./NavDropdown.svelte";
    import themelioLogo from "../assets/new-logo.png";
    import base from "../l10n/base.yaml";
    import { lang, l10nLoad } from "../l10n/l10n";
    import Fa from "svelte-fa";
    import {faBars as faHamburger} from "@fortawesome/free-solid-svg-icons";
    import {navlink, Nav, Link} from "../utils/navigation"
    export let currentPath = "";

    $: l10n = l10nLoad(base, $lang);
 

    let lang_url: (s?: string|undefined) => string;
    lang_url =  (url)=>`/${$lang}/` + (url || "");
    
    let learn_dropdown_items: Link[];

    $: learn_dropdown_items = [
        navlink(lang_url("overview"), l10n("nav/overview")),
        navlink(lang_url("roadmap"), l10n("nav/roadmap")),
        navlink('https://docs.themelio.org/basic-concepts/05-tokenomics/', "Tokenomics")
    ]
    // $: developers_drowdown_items = [
    //     navlink(lang_url())
    // ]
    let navigation: Nav[];
    $: navigation = [
        navlink(lang_url(),l10n("nav/home"),true )

    ]

    $: nav_style = `
      visibility: ${showNav ? "" : "hidden"}; 
    `

</script>

<template lang="pug">
    nav.navbar
      .container
        .row.navigation(style='width:100%')
          .col.logo
            a(href!='{`/${$lang}/`}')
              img.navbar-brand(src!='{themelioLogo}' alt='themelio logo')
          .col.top-nav.center(style!="{nav_style}")
            NavLink(href!='{`/${$lang}/`}'
                    active!='{currentPath = ""}')
              | {l10n("nav/home")}
            NavDropdown(title!='{l10n("nav/learn")}')
              NavLink(href!='{`/${$lang}/overview`}')
                | {l10n("nav/overview")}
              NavLink(href!='{`/${$lang}/roadmap`}')
                | {l10n("nav/roadmap")}
              NavLink(href='https://docs.themelio.org/basic-concepts/05-tokenomics/')
                | Tokenomics
            NavDropdown(title!='{l10n("nav/developers")}')
              NavLink(href!='{`/${$lang}/`}')
                | {l10n("nav/docs")}
              NavLink(href='https://github.com/themeliolabs') GitHub
              NavLink(href='https://scan.themelio.org/') Melscan
            NavLink(href!='{`/${$lang}/team`}'
                    active!='{currentPath == "team" }')
              | {l10n("nav/team")}
            NavLink(href!='{`/${$lang}/team`}')
              | {l10n("nav/blog")}
          .col.center
            .lang
              a(href!='{`/en/${currentPath}`}') EN
              | /
              a(lang='zh-HK' href!='{`/zht/${currentPath}`}') &#x7E41;&#x4E2D;
              | /
              a(lang='zh-CN' href!='{`/zhs/${currentPath}`}') &#x7B80;&#x4E2D;

</template>

<style lang="scss">
.navigation{
  display: grid;
  grid-auto-flow: column;
  // grid-template-columns:  repeat(max-content,3);
  grid-template-areas: "logo nav lang";
}

.logo{
  grid-area: logo;
}
.top-nav{
  grid-area: nav;
}
.lang{
  grid-area: lang;
  text-align: right;
  & button{
    padding-right: 0;
  }
}
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

.center{
    text-align: center;
    margin: auto;
    line-height: 3.2
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
        &:focus{
          outline: none;
          box-shadow: 0 0 0 0;
        }
        .hamburger{
          line-height: 6;
        }
    }
    .navigation{
      grid-template-areas: "logo lang" "nav nav";
    }
    .lang-selector{
      text-align: right;
    }   
}

</style>