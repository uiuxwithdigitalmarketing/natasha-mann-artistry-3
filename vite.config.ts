import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" ||
  !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  vite: {
    base: "/natasha-mann-artistry-3/",
  },

  // Lovable's config already provides Nitro. Keep it enabled for
  // GitHub Pages static prerendering; disabling it prevents index.html
  // from being generated in .output/public.

  tanstackStart: {
    server: { entry: "server" },

    prerender: isLovableSandbox
      ? undefined
      : {
          enabled: true,
          autoSubfolderIndex: true,
          crawlLinks: true,
          failOnError: true,
        },
  },
});
