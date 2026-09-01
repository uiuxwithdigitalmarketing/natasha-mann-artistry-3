import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" ||
  !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  vite: {
    base: "/natasha-mann-artistry-3/",
  },

  // Keep TanStack Start prerendering enabled for GitHub Pages.
  // Do not override the server entry here; Lovable's TanStack config
  // provides the correct server build entry for prerendering.
  tanstackStart: {
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
