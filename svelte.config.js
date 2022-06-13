import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    trailingSlash: "always",
    prerender: {
      default: true,
    },
    adapter: adapter(),
    vite: {
      plugins: [
        ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
        viteCommonjs(),
      ],

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;',
          },
        },
      },
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
      typescript: {
        esModuleInterop: true,
      },
    }),
  ],
};

export default config;
