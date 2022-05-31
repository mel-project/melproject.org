import { page } from "$app/stores";
import { derived } from "svelte/store";

export const l10nLoad = (mapping, lang) => {
  return (name) => {
    if (lang === "en") {
      lang = "en-US";
    } else if (lang === "zht") {
      lang = "zh-TW";
    } else if (lang === "zhs") {
      lang = "zh-CN";
    }
    console.log(lang, name, mapping[name][lang]);
    return mapping[name][lang];
  };
};

export const lang = derived(page, (p) => {
  console.log("page content", p);
  return p.params.lang || "en-US";
});
