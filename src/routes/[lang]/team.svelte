<script>
  import MainLayout from "../../components/MainLayout.svelte";
  import TeamIcon from "../../components/TeamIcon.svelte";
  import { l10nLoad, lang } from "../../l10n/l10n";

  import base from "../../l10n/base.yaml";
  import layer from "../../l10n/team.l10n.yaml";

  $: l10n = l10nLoad({ ...base, ...layer }, $lang);
</script>

<template lang="pug">
  MainLayout(title="Team")
        .section
          .section__inner.container
            .row
              .col
                h1 {l10n("team")}
                p {l10n("mission")}
        .section.section--darken
          .section__inner.container
            .row.bio-row
              .col-lg-4
                .bio-section
                    TeamIcon(
                        name!='{"Eric Tung"}'
                        aka!='{"aka Yuhao Dong, nullchinchilla"}' 
                        title!='{"Founder, CEO"}' 
                        blurb!='{"Cypherpunk, polymath, and security researcher. Architect of novel technologies spanning diverse levels of abstraction. Single-handedly runs Geph, a VPN with unique cryptography-powered privacy protection and censorship circumvention."}' 
                        website!='{"https://nullchinchilla.me"}' 
                        github!='{"https://github.com/nullchinchilla"}' 
                        twitter!='{"https://twitter.com/nullchinchilla"}' 
                        telegram!='{"https://t.me/nullchinchilla"}' 
                        linkedin!='{"https://www.linkedin.com/in/yuhao-dong2021/"}'
                        img='/images/team/eric.jpg')
              .col-lg-4
                .bio-section
                    TeamIcon(
                        name!='{"Meade Kincke"}'
                        title!='{"Head of DevOps"}'
                        blurb!='{"Strategic, ambitious, and self taught technology executive who has worked on everything from global infrastructure to the Rust compiler. Develops and maintains Themelio\'s core infrastructure, finding show-stopping bugs and optimizing safety and performance."}'
                        github!='{"https://github.com/thedarkula"}'
                        img='/images/team/meade.jpg')

              .col-lg-4
                .bio-section
                    TeamIcon(
                        name!='{"Jay Butera"}'
                        title!='{"Compiler Engineer"}'
                        blurb!='{"Contributor to the Ethereum and Polkadot ecosystems, concerning zero-knowledge NFTs and composable graph databases. Develops tools which empower rather than enslave."}'
                        github!='{"https://github.com/jaybutera"}'
                        img='/images/team/jay.jpg')

            .row.bio-row
              .col-lg-4
                .bio-section
                    TeamIcon(
                        name!='{"Shane Mendez"}'
                        title!='{"Software Engineer"}'
                        blurb!='{"Motivated by family, hard work, and loyalty. Crafts not only fast and reliable software, but technologies that uplift people and society."}'
                        github!='{"https://github.com/sshmendez"}'
                        img='/images/team/shane.jpg')
              .col-lg-4
                .bio-section
                    TeamIcon(name!='{"Marco Serrano"}'
                        title!='{"Software Engineer"}'
                        blurb!='{"Hailing from the same alma mater as the Dread Pirate Roberts, but much more scrupulous. Developing software since 2013, obsessed with blockchain since 2017, all-in on defi since 2020. Problem-solver first, focused on security and turning weaknesses into strengths."}'
                        github!='{"https://github.com/sadministrator"}'
                        img='/images/team/marco.jpg')
        .section
          .section__inner.container
            .row
              .col
                h2 Partners
            .row.mt-4
              .col.text-center
                a(href='https://polychain.capital/')
                  img.partner-icon(src='/images/investors/polychain.gif')

</template>
