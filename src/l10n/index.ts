
import { derived, type Readable } from "svelte/store";
import mapping from './index.l10n.yaml';


export enum Language {
  EN_US = "en-US",
  ZH_TW = "zh-TW",
  ZH_CN = "zh-CN",
}


export type Obj<T> = { [key: string]: T };
type localizeer = (b: Language) => (c: string) => string;

export const localize: localizeer = (lang: Language) => (name: string) => {
  // console.log(lang, name, mapping[name][lang]);
  let value = mapping[name][lang];
  if (value) {
    return value;
  }
  return "!!MISSING!!";

};

export const lang: Readable<Language> = derived(null, (set: any) => {
  set(Language.EN_US)
})