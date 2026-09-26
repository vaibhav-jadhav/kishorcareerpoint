import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about-us", "/courses", "/results", "/branches", "/contact-us", "/careers", "/blog"];
  const pages = paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
  const articles = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }));
  return [...pages, ...articles];
}
