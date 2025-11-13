import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR for static hosting on GitHub Pages
  ssr: false,
  // Set basename to match GitHub Pages project path
  basename: "/alchemy-lens-website",
} satisfies Config;
