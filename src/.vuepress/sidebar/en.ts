import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Programming",
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
