import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

// Static pages carry no lastModified: a date that changes on every build is
// ignored by search engines. Blog posts use their real updatedAt date.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/courses", priority: 0.9 },
    { path: "/results", priority: 0.9 },
    { path: "/branches", priority: 0.8 },
    { path: "/about-us", priority: 0.7 },
    { path: "/contact-us", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
    { path: "/careers", priority: 0.3 },
  ];
  const pages = paths.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    priority,
  }));
  const articles = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
