import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { shareImage } from "@/lib/seo";
import { organizationSchema } from "@/lib/structuredData";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.home.title,
    template: `%s | ${site.name}`,
  },
  description: seo.home.description,
  applicationName: site.name,
  category: "education",
  keywords: [
    "Kishor Career Point",
    "KCP",
    "NEET coaching",
    "JEE coaching",
    "MHT-CET",
    "Foundation classes",
    "Ichalkaranji",
    "Kolhapur",
    "Sangli",
    "Karad",
    "Hatkanangale",
  ],
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#005aaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" className={sans.variable}>
      <body className="min-h-screen pb-[calc(4rem+env(safe-area-inset-bottom))] xl:pb-0 bg-page font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <MobileTabBar />
      </body>
    </html>
  );
}
