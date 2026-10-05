import type { Metadata } from "next";
import { site } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/courses". Used for the canonical URL. */
  path: string;
};

export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Kishor Career Point – NEET, JEE and Foundation coaching",
};

/**
 * Title, description, canonical URL and social tags for one page.
 * Next.js replaces nested objects instead of merging them, so the shared
 * Open Graph fields are repeated here.
 */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
  };
}
