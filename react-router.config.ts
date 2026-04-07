import type { Config } from "@react-router/dev/config";

export default {
  // Pre-render routes at build time for static hosting (GitHub Pages)
  // This dramatically improves FCP and LCP vs SPA mode
  ssr: false,
  prerender: ["/", "/about", "/survey"],
} satisfies Config;
