import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { branches } from "@/content/branches";
import { footerColumns } from "@/content/navigation";
import { examTabs } from "@/content/rankers";
import { site, telHref } from "@/content/site";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"
    >
      {children}
    </a>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-extrabold uppercase tracking-wider text-brand-dark">
      {children}
    </h2>
  );
}

const linkClass = "text-sm text-ink/80 transition hover:text-brand hover:underline";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/10 bg-sky text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-14 lg:py-14">
        {/* Left: identity */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <Image src="/brand/logo.png" alt="" width={120} height={60} className="h-12 w-auto" />
            <span className="text-xl font-extrabold tracking-tight text-brand-dark">
              Kishor Career Point
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/80">{site.footerBlurb}</p>

          <address className="mt-5 space-y-1 text-sm not-italic leading-6 text-ink/80">
            <p className="font-semibold text-brand-dark">Head Office</p>
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-1">
              <a href={telHref(site.phone)} className="font-semibold hover:text-brand">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </p>
          </address>

          <ul className="mt-5 flex gap-3">
            <li>
              <SocialLink href={site.social.facebook} label="Kishor Career Point on Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.3H8V13.5h2.5V21h3Z" />
                </svg>
              </SocialLink>
            </li>
            <li>
              <SocialLink href={site.social.instagram} label="Kishor Career Point on Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <rect x="4" y="4" width="16" height="16" rx="4.5" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </SocialLink>
            </li>
            <li>
              <SocialLink href={site.social.youtube} label="Kishor Career Point on YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path d="M21.2 8.2a2.5 2.5 0 0 0-1.8-1.8C17.9 6 12 6 12 6s-5.9 0-7.4.4A2.5 2.5 0 0 0 2.8 8.2C2.4 9.7 2.4 12 2.4 12s0 2.3.4 3.8a2.5 2.5 0 0 0 1.8 1.8C6.1 18 12 18 12 18s5.9 0 7.4-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8ZM10.3 14.6V9.4l4.5 2.6-4.5 2.6Z" />
                </svg>
              </SocialLink>
            </li>
          </ul>
        </div>

        {/* Right: link grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <Heading>{column.heading}</Heading>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={linkClass}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <Heading>Results</Heading>
            <ul className="mt-4 flex flex-wrap gap-2">
              {examTabs.map((exam) => (
                <li key={exam.id}>
                  <Link
                    href="/results"
                    className="inline-block rounded-full border border-brand/25 bg-white px-3 py-1 text-xs font-semibold text-brand-dark transition hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {exam.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-3">
            <Heading>Our branches</Heading>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a href={telHref(branch.phone)} className="group block">
                    <span className="block text-sm font-semibold text-ink group-hover:text-brand">
                      {branch.name}
                    </span>
                    <span className="block text-xs text-ink/70">{branch.phoneDisplay}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-ink/70 sm:px-6 lg:text-left">
          © {year} Kishor Career Point. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
