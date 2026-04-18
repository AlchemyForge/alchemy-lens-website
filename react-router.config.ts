import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: async () => {
    const staticRoutes = ["/", "/about", "/survey", "/blog"];

    try {
      const res = await fetch(
        `${process.env.VITE_API_BASE_URL}/api/v1/blog/posts?pageSize=100`,
      );
      if (!res.ok) return staticRoutes;

      const data = await res.json();
      const slugRoutes = (data.items ?? []).map(
        (p: { slug: string }) => `/blog/${p.slug}`,
      );
      return [...staticRoutes, ...slugRoutes];
    } catch {
      return staticRoutes;
    }
  },
} satisfies Config;
