SvelteKit website for https://melproject.org.

Install dependencies with `pnpm install --frozen-lockfile` using pnpm 8.6.6,
then run `pnpm run build`. The static output is written to `build/`.

Cloudflare Pages build settings:

- Project: `melproject-org` (`https://melproject-org.pages.dev`)
- Custom domains: `melproject.org` and `www.melproject.org`
- GitHub repository: `mel-project/melproject.org`
- Production branch: `mel`
- Build command: `pnpm run build`
- Build output directory: `build`
- Node.js version: `22`

Pushes to `mel` automatically build and deploy the production site through
Cloudflare's GitHub integration. Other branches receive preview deployments.

The build includes `/en/`, `/zhs/`, and `/zht/`. Cloudflare's
`static/_redirects` rule redirects `/` to `/en/` with status 308.
`static/404.html` provides a 404 response for unknown paths.

For deployment from a local build, authenticate Wrangler with a Cloudflare
API token and account ID, then run:

```sh
npx wrangler pages deploy build --project-name melproject-org --branch mel
```

Add custom domains through the Pages project before updating DNS to the
project's `pages.dev` hostname.
