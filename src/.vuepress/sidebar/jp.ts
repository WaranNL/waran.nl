import { sidebar } from "vuepress-theme-hope";

export const jpSidebar = sidebar({
  "/jp/": [
    "",
    {
      text: "プログラミング",
      prefix: "programming/",
      link: "programming/",
      children: "structure",
    },
    {
      text: "文章",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
