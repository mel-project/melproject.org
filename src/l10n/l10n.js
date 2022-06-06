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

    // console.log(lang, name, mapping[name][lang]);
    try{
      return mapping[name][lang];
    }
    catch(e){
      return "UNDEFINED"
    }
  };
};

export const lang = derived(page, (p) => {
  // console.log("page content", p);
  console.log("lang", p.params.lang)
  return p.params.lang || "en-US";
});
