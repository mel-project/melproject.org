import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
// import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["/", "/en/", "/zhs/", "/zht/"],
    },
    alias: {
      "@l10n": "src/utils/l10n",
      "@src": "src",
    },
  },
};

export default config;
