import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Waran",
      description: "Blog Demo",
    },
    "/nl/": {
      lang: "nl-NL",
      title: "Waran",
      description: "Blog demo",
    },
    "/jp/": {
      lang: "ja-JP",
      title: "和蘭",
      description: "Blog demo",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: true,
});
