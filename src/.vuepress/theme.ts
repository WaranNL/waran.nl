import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, jpNavbar, nlNavbar } from "./navbar/index.js";
import { enSidebar, jpSidebar, nlSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://waran.nl",

  author: {
    name: "Bryse Meijer",
    url: "https://www.waran.nl",
  },

  logo: "/icon.svg",

  repo: "warannl/waran.nl",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/brysem",
      Linkedin: "https://www.linkedin.com/in/brysemeijer/",
      VuePressThemeHope: {
        icon: "/icon.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "Programmer Enthusiast",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Japanse locale config
     */
    "/jp/": {
      // navbar
      navbar: jpNavbar,

      // sidebar
      sidebar: jpSidebar,

      footer: "デフォルトのフッター",

      displayFooter: true,

      blog: {
        name: 'ブライス・マイヤー',
        description: "プログラマー愛好家",
        intro: "/jp/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "このページをGitHubで編集する",
      },
    },

    /**
     * Japanse locale config
     */
    "/nl/": {
      // navbar
      navbar: nlNavbar,

      // sidebar
      sidebar: nlSidebar,

      navbarLocales: {
        langName: "Nederlands",
        selectLangAriaLabel: "Selecteer een taal",
      },

      footer: "Standaard voettekst",

      displayFooter: true,

      blog: {
        description: "Programmeer liefhebber",
        intro: "/jp/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Bewerk deze pagina op GitHub",
      },
    }
  },

  encrypt: {
    config: {
      "/programming/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
      "/zh/programming/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,1
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/programming/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
