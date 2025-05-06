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
  site: process.env.GITHUB_ACTIONS ? undefined : "http://kntryton.agh.edu.pl",
});
