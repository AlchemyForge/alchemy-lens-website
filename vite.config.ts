import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  // Use trailing slash for production builds (GitHub Pages)
  // No trailing slash for local development
  const base = command === "build" ? "/alchemy-lens-website/" : "/alchemy-lens-website";

  return {
    base,
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  };
});
