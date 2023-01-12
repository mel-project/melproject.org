export enum NavType {
  Link = "Link",
  DropDown = "DropDown",
}

export interface Navigation {
  type: NavType;
}

export interface Link extends Navigation {
  href: string;
  active: boolean;
  text: string;
}

export interface DropDown extends Navigation {
  title: string;
  links: Link[];
}

export type Nav = Link | DropDown;

export function navlink(href: string, text: string, active?: boolean): Link {
  return {
    type: NavType.Link,
    href,
    active: active || false,
    text,
  };
}

export function navdropdown(title: string, links: Link[]): DropDown {
  return {
    type: NavType.DropDown,
    title,
    links,
  };
}

export const communityIcons = [
  {
    name: "Discord",
  },
  {
    name: "Twitter",
  },
  {
    name: "GitHub",
  },
  {
    name: "Forum",
  },
  {
    name: "Medium",
  },
  {
    name: "Telegram",
  },
];