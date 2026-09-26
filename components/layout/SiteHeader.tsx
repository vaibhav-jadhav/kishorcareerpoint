"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { primaryNav, secondaryNav } from "@/content/navigation";
import { site, telHref } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [...primaryNav, ...secondaryNav];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/95 backdrop-blur">
      <div className="hidden border-b border-line bg-brand-dark text-white lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <p>Coaching for JEE, NEET and Foundation across Maharashtra</p>
          <a href={telHref(site.phone)} className="font-semibold">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt=""
            width={120}
            height={60}
            priority
            className="h-12 w-auto"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-ink sm:text-base">
              Kishor Career Point
            </span>
            <span className="hidden text-xs font-medium text-muted sm:block">
              IIT · NEET · Foundation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-semibold ${
                isCurrent(pathname, item.href)
                  ? "bg-brand-soft text-brand"
                  : "text-ink hover:bg-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.olympiadUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink hover:bg-surface"
          >
            Olympiad
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.talentHuntUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark sm:inline-flex"
          >
            Talent Hunt Exam
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-page px-5 py-3 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {links.map((item) =>
              item.external ? (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-3 text-base font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-surface"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <a
            href={site.talentHuntUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            Talent Hunt Exam 2025
          </a>
        </nav>
      ) : null}
    </header>
  );
}
