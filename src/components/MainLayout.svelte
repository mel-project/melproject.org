<script>
  export let title;

  import Nav from "./Nav.svelte";
  import base from "../l10n/base.yaml";
  import { lang, l10nLoad } from "../l10n/l10n";

  $: l10n = l10nLoad(base, $lang);

  let debugging = false;
  let innerWidth;
</script>

<template lang="pug">
  svelte:head
    meta(http-equiv='Content-Type' content='text/html; charset=UTF-8')
    title {title}
    meta(content='width=device-width, initial-scale=1.0 user-scalable=no' name='viewport')
    meta(content='Themelio is a new kind of public blockchain designed as a radically immutable trust substrate.' name='description')

    
    //- link(href='' rel='icon')
    script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' integrity='sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==' crossorigin='anonymous' defer='')
    script(src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js' integrity='sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg==' crossorigin='anonymous' defer='')
    link(href='https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900' rel='stylesheet')
    link(rel='stylesheet' href='https://cdn.jsdelivr.net/gh/chiron-fonts/chiron-sans-hk-pro@1.007/build/webfont/css/vf.css')
    link(rel='stylesheet' href='https://cdn.jsdelivr.net/gh/chiron-fonts/chiron-sans-hk-pro@1.007/build/webfont/css/vf-italic.css')
    link(href='https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' rel='stylesheet')
    link(href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700' rel='stylesheet')

    link(href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' rel='stylesheet' )
  svelte:body({$lang})
  svelte:window(bind:innerWidth)
  +if('debugging == true')
    div(style="position: sticky; top: 0;") 
      div(style="background-color: grey") {innerWidth}
  header
  
  Nav
  slot
  //- footer#footer
  //-   .container
  //-     .row
  //-       .col-lg-1
  //-         img(src='/images/logo-only-bw.png' style='max-width: 48px; mix-blend-mode: lighten; opacity: 0.9')
  //-       .col-lg.mb-3
  //-         h4 {l10n("footer/updates")}
  //-         p {@html l10n("footer/updateblurb")}
  //-         // Begin Mailchimp Signup Form
  //-         #mc_embed_signup
  //-           form#mc-embedded-subscribe-form.validate(action='https://pm.us20.list-manage.com/subscribe/post?u=d1fa068da18aba6d2e0e0dc79&id=61a9213385' method='post' name='mc-embedded-subscribe-form' target='_blank' novalidate='')
  //-             #mc_embed_signup_scroll
  //-               .mc-field-group.form-group
  //-                 input#mce-EMAIL.required.email.form-control(type='email' value='' name='EMAIL' placeholder='your@email.com')
  //-                 small.form-text.text-muted {l10n("footer/noshare")}
  //-               #mce-responses.clear.form-group
  //-                 #mce-error-response.response(style='display:none')
  //-                   #mce-success-response.response(style='display:none')
  //-                   // real people should not fill this in and expect good things - do not r emove this or risk form bot signups
  //-                   div(style='position: absolute; left: -5000px;' aria-hidden='true')
  //-                     input(type='text' name='b_d1fa068da18aba6d2e0e0dc79_61a9213385' tabindex='-1' value='')
  //-                   .clear.form-group
  //-                     button#mc-embedded-subscribe.btn.btn-lg(type='submit' name='subscribe')
  //-                       | {l10n("footer/subscribe")}
  //-     .col-lg
  //-     .col-lg-5.container-fluid
  //-       .row
  //-         .col
  //-           h4 Themelio Labs
  //-         .col.text-muted
  //-           | 8 The Green, Ste A
  //-           br 
  //-           | Dover, DE 19901
  //-       .row.text--normweight.mt-3
  //-         .col
  //-           a(href='https://github.com/themeliolabs/' target='_blank' rel='noopener') GitHub
  //-         .col
  //-           a(href='https://medium.com/themelio' target='_blank' rel='noopener') Medium
  //-         .col
  //-           a(href='https://discord.gg/zJ4mwM5pzD' target='_blank' rel='noopener') Discord
  //-         .col
  //-           a(href='https://t.me/themeliolabs' target='_blank' rel='noopener') Telegram
  //-         .col
  //-           a(href='https://twitter.com/ThemelioLabs' target='_blank' rel='noopener') Twitter
</template>

<style lang="scss">
  /* footer */

  footer {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--primary-color);
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
