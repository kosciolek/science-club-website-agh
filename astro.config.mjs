// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // for github pages
  site: "https://kosciolek.github.io",
  base: "/science-club-website-agh",
});
