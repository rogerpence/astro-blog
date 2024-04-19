import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import syntaxTheme from "./shiki-night-owl.json";
//import syntaxTheme from "./shiki-houston.json";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  integrations: [icon(), mdx()],
  //   redirects: {
  //     "/": "/posts",
  //   },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: "css-variables",
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes
      //   themes: {
      //     light: "github-light",
      //     dark: "github-light",
      //   },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
  output: "hybrid",
  adapter: vercel(),
});
