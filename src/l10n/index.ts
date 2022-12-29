
import { derived, type Readable } from "svelte/store";
import mapping from './index.l10n.yaml';
import { page } from "$app/stores"

export const available_languages = ["EN_US", "ZH_TW", "ZH_CN"] as const
type Languages = typeof available_languages[number];

export const Language_Shortname = {
  EN_US: "en",
  ZH_TW: "zht",
  ZH_CN: "zhs",
} as const satisfies { [k in Languages]: string };

export type Language_Shortname = typeof Language_Shortname[keyof typeof Language_Shortname];
let _lang: Language_Shortname = Language_Shortname.EN_US;




const _localize = ($lang: Language_Shortname) => (name: string, toLang?: Language_Shortname): string => {
  let lang = toLang ||$lang;
  if (mapping[name]) {
    let value = mapping[name][lang] as string;
    if (value) {
      return value;
    }
  }

  return "!!MISSING!! " + name +" "+ lang;

};


export const lang: Readable<Language_Shortname> = derived(page, ($page) => {
  _lang = $page.params.lang;
  return $page.params.lang

})

type Localizer = (name: string, toLang?: Language_Shortname)=>string;
export const localize: Readable<Localizer> = derived(lang, ($lang)=>_localize($lang))


export const home_page: Readable<string> = derived(page, ($page) => {
  return "/" + $page.params.lang

})

export const replace_lang: Readable<(s: string) => string> = derived(page, ($page) => {
  let lang = $page.params.lang;
  let path = $page.url.toString();
  return (toLang: string) => path.replace('/' + lang, '/' + toLang);
})

