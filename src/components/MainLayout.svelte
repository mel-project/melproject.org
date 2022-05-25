<script>
  export let title;

  export let currentPath = "";

  export let lang;

  import themelioLogo from "../assets/new-logo.png";
  import NavLink from "./NavLink.svelte";
  import base from "../l10n/base.yaml";
  import { l10nLoad } from "../l10n/l10n";
  import NavDropdown from "./NavDropdown.svelte";

  $: l10n = l10nLoad(base, lang);
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
</style>
