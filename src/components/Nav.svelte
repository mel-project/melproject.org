<script lang="ts">
    import NavLink from "./NavLink.svelte"
    import NavDropdown from "./NavDropdown.svelte";
    import themelioLogo from "../assets/new-logo.png";
    import base from "../l10n/base.yaml";
    import { lang, l10nLoad } from "../l10n/l10n";
    export let currentPath = "";

    $: l10n = l10nLoad(base, $lang);


    let showPanel = false
 
    enum NavType{
        Link = "Link",
        DropDown = "DropDown",
    }
    
    interface Navigation{
        type: NavType
    }
    
    interface Link extends Navigation {
        href: string,
        active: boolean,
        text: string,
    }

    interface DropDown extends Navigation {
            title: string,
            links: Link[],
    }

    type Nav = Link | DropDown

    function navlink(href: string, text: string, active?:boolean,): Link {
        return {
            type: NavType.Link,
            href,
            active: active || false,
            text
        }
    }

    function navdropdown(title: string, links:Link[]): DropDown{
        return {
            type: NavType.DropDown,
            title,
            links
        }
    } 

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

</script>

<template lang="pug">
    nav.navbar
      .container
        .row(style='width:100%')
          .col
            a(href!='{`/${$lang}/`}')
              img.navbar-brand(src!='{themelioLogo}' alt='themelio logo')
          .col.top-nav.center
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
            .lang-selector
              a(href!='{`/en/${currentPath}`}') EN
              | /
              a(lang='zh-HK' href!='{`/zht/${currentPath}`}') &#x7E41;&#x4E2D;
              | /
              a(lang='zh-CN' href!='{`/zhs/${currentPath}`}') &#x7B80;&#x4E2D;
              button.navbar-toggler.border-0(
                type="button" data-toggle="collapse" data-target="#collapse"
                aria-controls='navigation' aria-expanded='false'
                aria-label='Toggle navigation')
                span.navbar-toggler-icon(on:click!="{()=>{showPanel = true}}")
</template>

<style>
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

.row{

    
}

.lang-selector {
    /* text-align: right; */
}

img.social-media-icon {
    max-width: 4em;
}
.navbar-toggler {

    display: none;
    position: absolute;
}
@media only screen and (max-width: 770px) {
    .top-nav{
        display:none;
    }
    .navbar-toggler {
        display: inline-block;
        position: inherit;

    }
    .lang-selector{
      text-align: right;
    }   
}
</style>