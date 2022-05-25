import { getContext, setContext } from "svelte";

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
