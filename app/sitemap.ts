import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { communities } from "@/content/communities";
import { resources } from "@/content/resources";
import { team } from "@/content/team";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/search",
    "/buy",
    "/sell",
    "/home-value",
    "/communities",
    "/relocation",
    "/blog",
    "/about",
    "/team",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    "/fair-housing",
    "/disclosures",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/buy" || path === "/sell" || path === "/home-value" ? 0.9 : 0.6,
  }));

  const communityRoutes = communities.map((c) => ({
    url: `${base}/communities/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${base}/resources/${r.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const teamRoutes = team.map((m) => ({
    url: `${base}/team/${m.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const blogRoutes = (await getPosts()).map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.published_at,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...communityRoutes, ...resourceRoutes, ...teamRoutes, ...blogRoutes];
}
