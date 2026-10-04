"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav, secondaryNav } from "@/content/navigation";
import type { NavItem } from "@/content/navigation";
import { site, telHref } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function NavBadge({ children }: { children: string }) {
  return (
    <span className="pointer-events-none absolute -top-2.5 right-0 translate-x-1/3 rounded-[3px] bg-tag px-1 py-px text-[9px] font-bold uppercase leading-tight tracking-wide text-white">
      {children}
    </span>
  );
}

function MoreMenu({ items, pathname }: { items: NavItem[]; pathname: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = items.some((item) => !item.external && isCurrent(pathname, item.href));

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[15px] font-medium transition-colors hover:text-brand ${
          active ? "text-brand" : "text-ink"
        }`}
      >
        More
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <ul className="absolute right-0 top-full z-50 min-w-44 rounded-xl border border-line bg-white p-1.5 shadow-lg">
          {items.map((item) => {
            const className =
              "block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft hover:text-brand";
            return (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={className}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The logo already links home, so the desktop bar starts at About Us.
  const desktopLinks = primaryNav.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white shadow-[0_1px_8px_rgba(4,40,74,0.06)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={120}
            height={60}
            priority
            className="h-10 w-auto lg:h-12"
          />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-brand-dark sm:text-lg">
              Kishor Career Point
            </span>
            <span className="hidden text-[11px] font-semibold sm:block">
              <span className="text-accent">NEET</span>
              <span className="text-muted"> | </span>
              <span className="text-brand">IIT-JEE</span>
              <span className="text-muted"> | </span>
              <span className="text-accent">Foundation</span>
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Primary">
          {desktopLinks.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`relative whitespace-nowrap px-3 py-2 text-[15px] font-medium transition-colors hover:text-brand ${
                  current ? "text-brand" : "text-ink"
                }`}
              >
                <span className="relative">
                  {item.label}
                  {item.badge ? <NavBadge>{item.badge}</NavBadge> : null}
                </span>
                {current ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                ) : null}
              </Link>
            );
          })}
          <MoreMenu items={secondaryNav} pathname={pathname} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telHref(site.phone)}
            className="hidden items-center gap-2.5 xl:flex"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
              <PhoneIcon />
            </span>
            <span className="leading-tight">
              <span className="block text-xs text-muted">Call now</span>
              <span className="block text-sm font-bold text-brand-dark">{site.phoneDisplay}</span>
            </span>
          </a>
          <Link
            href="/branches"
            aria-label="Our branches"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-accent transition hover:bg-brand hover:text-white xl:inline-flex"
          >
            <PinIcon />
          </Link>
          <a
            href={telHref(site.phone)}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-accent-dark xl:hidden"
          >
            <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4"><PhoneIcon /></span>
            Call now
          </a>
        </div>
      </div>
    </header>
  );
}
