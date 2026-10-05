import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Pages carry no lastModified: a date that changes on every build is ignored
// by search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/courses", priority: 0.9 },
    { path: "/results", priority: 0.9 },
    { path: "/branches", priority: 0.8 },
    { path: "/about-us", priority: 0.7 },
    { path: "/contact-us", priority: 0.7 },
    { path: "/careers", priority: 0.3 },
  ];
  return paths.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    priority,
  }));
}
