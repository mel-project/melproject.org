import { derived, type Readable } from "svelte/store";
import mapping from "./index.l10n.yaml";
import { page } from "$app/stores";

export const Language = ["en", "zht", "zhs"] as const;
type Language = typeof Language[number];

const _localize =
  ($lang: Language) =>
  (name: string, toLang?: Language): string => {
    let lang = toLang || $lang;
    if (mapping[name]) {
      let value = mapping[name][lang] as string;
      if (value) {
        return value;
      }
    }

    return "!!MISSING!! " + name + " " + lang;
  };

export const lang: Readable<Language> = derived(page, ($page) => {
  // _lang = $page.params.lang;
  return $page.params.lang as Language;
});

type Localizer = (name: string, toLang?: Language) => string;
export const localize: Readable<Localizer> = derived(lang, ($lang) =>
  _localize($lang)
);

export const home_page: Readable<string> = derived(page, ($page) => {
  return "/" + $page.params.lang;
});

export const replace_lang: Readable<(s: Language) => string> = derived(
  page,
  ($page) => {
    let lang = $page.params.lang;
    let path = $page.url.toString();
    return (toLang: Language) => path.replace("/" + lang, "/" + toLang);
  }
);
