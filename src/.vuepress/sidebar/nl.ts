import { sidebar } from "vuepress-theme-hope";

export const nlSidebar = sidebar({
  "/nl/": [
    "",
    {
      text: "Programmeren",
      prefix: "programming/",
      link: "programming/",
      children: "structure",
    },
    {
      text: "Articles",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
