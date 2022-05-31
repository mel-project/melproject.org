<script>
  export let title;

  export let currentPath = "";

  import themelioLogo from "../assets/new-logo.png";
  import NavLink from "./NavLink.svelte";
  import base from "../l10n/base.yaml";
  import { lang, l10nLoad } from "../l10n/l10n";
  import NavDropdown from "./NavDropdown.svelte";

  $: l10n = l10nLoad(base, $lang);
</script>

<svelte:head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

  <title>{title}</title>
  <meta
    content="width=device-width, initial-scale=1.0 user-scalable=no"
    name="viewport"
  />
  <meta
    content="Themelio is a new kind of public blockchain designed as a radically immutable trust substrate."
    name="description"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <link href="" rel="icon" />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous"
    defer></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"
    integrity="sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg=="
    crossorigin="anonymous"
    defer></script>

  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/chiron-fonts/chiron-sans-hk-pro@1.007/build/webfont/css/vf.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/chiron-fonts/chiron-sans-hk-pro@1.007/build/webfont/css/vf-italic.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700"
    rel="stylesheet"
  />
</svelte:head>

<svelte:body {lang} />

<header>
  <nav class="navbar py-md-2 py-1 navbar-expand-md navbar-light">
    <div class="container">
      <div class="row align-items-center" style="width:100%">
        <div class="col">
          <a href={`/${lang}/`}>
            <img
              class="navbar-brand px-2"
              src={themelioLogo}
              alt="themelio logo"
            />
          </a>
        </div>

        <div class="col-6 top-nav">
          <NavLink href={`/${lang}/`} active={currentPath == ""}>
            {l10n("nav/home")}
          </NavLink>

          <NavDropdown title={l10n("nav/learn")}>
            <NavLink href={`/${lang}/`}>
              {l10n("nav/overview")}
            </NavLink>

            <NavLink href={`/${lang}/`}>
              {l10n("nav/roadmap")}
            </NavLink>

            <NavLink
              href="https://docs.themelio.org/basic-concepts/05-tokenomics/"
            >
              Tokenomics
            </NavLink>
          </NavDropdown>

          <NavDropdown title={l10n("nav/developers")}>
            <NavLink href={`/${lang}/`}>
              {l10n("nav/docs")}
            </NavLink>

            <NavLink href="https://github.com/themeliolabs">GitHub</NavLink>

            <NavLink href="https://scan.themelio.org/">Melscan</NavLink>
          </NavDropdown>

          <NavLink href={`/${lang}/team`} active={currentPath == "team"}>
            {l10n("nav/team")}
          </NavLink>

          <NavLink href={`/${lang}/team`}>
            {l10n("nav/blog")}
          </NavLink>
        </div>

        <div class="col lang-selector">
          <a href={`/en/${currentPath}`}>EN</a>/<a
            lang="zh-HK"
            href={`/zht/${currentPath}`}>繁中</a
          >/<a lang="zh-CN" href={`/zhs/${currentPath}`}>简中</a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#collapse"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>

<slot />

<footer id="footer">
  <div class="container">
    <style>
      img.social-media-icon {
        max-width: 4em;
      }
    </style>
    <div class="row">
      <div class="col-lg-1">
        <img
          src="/images/logo-only-bw.png"
          style="max-width: 48px; mix-blend-mode: lighten; opacity: 0.9"
        />
      </div>
      <div class="col-lg mb-3">
        <h4>{l10n("footer/updates")}</h4>
        <p>{@html l10n("footer/updateblurb")}</p>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://pm.us20.list-manage.com/subscribe/post?u=d1fa068da18aba6d2e0e0dc79&amp;id=61a9213385"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group form-group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email form-control"
                  id="mce-EMAIL"
                  placeholder="your&#x40;email.com"
                />
                <small class="form-text text-muted"
                  >{l10n("footer/noshare")}</small
                >
              </div>
              <div id="mce-responses" class="clear form-group">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display:none"
                />
                <div
                  class="response"
                  id="mce-success-response"
                  style="display:none"
                />
              </div>
              <!-- real people should not fill this in and expect good things - do not r emove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_d1fa068da18aba6d2e0e0dc79_61a9213385"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear form-group">
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="btn btn-lg"
                >
                  {l10n("footer/subscribe")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg" />
      <div class="col-lg-5 container-fluid">
        <div class="row">
          <div class="col">
            <h4>Themelio Labs</h4>
          </div>
          <div class="col text-muted">
            8 The Green, Ste A<br />
            Dover, DE 19901
          </div>
        </div>
        <div class="row text--normweight mt-3">
          <div class="col">
            <a
              href="https://github.com/themeliolabs/"
              target="_blank"
              rel="noopener">GitHub</a
            >
          </div>
          <div class="col">
            <a href="https://medium.com/themelio" target="_blank" rel="noopener"
              >Medium</a
            >
          </div>
          <div class="col">
            <a
              href="https://discord.gg/zJ4mwM5pzD"
              target="_blank"
              rel="noopener">Discord</a
            >
          </div>
          <div class="col">
            <a href="https://t.me/themeliolabs" target="_blank" rel="noopener"
              >Telegram</a
            >
          </div>
          <div class="col">
            <a
              href="https://twitter.com/ThemelioLabs"
              target="_blank"
              rel="noopener">Twitter</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .navbar-brand {
    max-width: 10rem;
    width: 100%;
    display: inline-block;
  }

  .top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .lang-selector {
    text-align: right;
  }

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
