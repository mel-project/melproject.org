import color from "@src/stylesheets/variables.scss";

console.log(color);

export const Colors = {
  teal: "#9AF3D3",
  purple: "#895ABF",
  green: "#21D849",
  light_blue: "#69CFFF",
} as const;

export type Colors = typeof Colors[keyof typeof Colors];
