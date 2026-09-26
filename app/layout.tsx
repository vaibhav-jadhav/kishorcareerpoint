import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { themeBootScript } from "@/components/layout/theme";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/content/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Kishor Career Point",
    "KCP",
    "JEE",
    "NEET",
    "MHT-CET",
    "Foundation",
    "Ichalkaranji",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-page font-sans text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
