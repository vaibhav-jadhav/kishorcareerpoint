"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { primaryNav, secondaryNav } from "@/content/navigation";
import type { NavItem } from "@/content/navigation";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      {children}
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  "/": (
    <Icon>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.8V20h13V9.8" />
      <path d="M10 20v-5.5h4V20" />
    </Icon>
  ),
  "/courses": (
    <Icon>
      <path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z" />
      <path d="M12 6.5v13" />
    </Icon>
  ),
  "/results": (
    <Icon>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
      <path d="M8 6H5v1.5A3 3 0 0 0 8 10.5M16 6h3v1.5a3 3 0 0 1-3 3" />
      <path d="M12 13v4M8.5 20h7M9.5 17h5" />
    </Icon>
  ),
  "/branches": (
    <Icon>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.800 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Icon>
  ),
  more: (
    <Icon>
      <rect x="4" y="4" width="6.500" height="6.500" rx="1.500" />
      <rect x="13.500" y="4" width="6.500" height="6.500" rx="1.500" />
      <rect x="4" y="13.500" width="6.500" height="6.500" rx="1.500" />
      <rect x="13.500" y="13.500" width="6.500" height="6.500" rx="1.500" />
    </Icon>
  ),
};

const tabHrefs = ["/", "/courses", "/results", "/branches"];

const tabClass = (active: boolean) =>
  `relative flex h-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors ${
    active ? "text-brand" : "text-muted hover:text-brand"
  }`;

function ActiveBar({ active }: { active: boolean }) {
  return active ? (
    <span
      className="absolute inset-x-5 top-0 h-[3px] rounded-b-full bg-brand"
      aria-hidden="true"
    />
  ) : null;
}

/** App-style bottom navigation, shown below the desktop breakpoint. */
export function MobileTabBar() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const tabs = tabHrefs
    .map((href) => primaryNav.find((item) => item.href === href))
    .filter((item): item is NavItem => Boolean(item));
  const moreItems = [
    ...primaryNav.filter((item) => !tabHrefs.includes(item.href)),
    ...secondaryNav,
  ];
  const moreActive = moreItems.some((item) => !item.external && isCurrent(pathname, item.href));

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sheetOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSheetOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sheetOpen]);

  return (
    <div className="xl:hidden">
      {sheetOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-brand-dark/40"
            onClick={() => setSheetOpen(false)}
          />
          <div
            id="more-sheet"
            role="dialog"
            aria-label="More pages"
            className="anim-rise fixed inset-x-3 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-50 rounded-2xl border border-line bg-white p-2 shadow-[0_-8px_30px_rgba(4,40,74,0.2)]"
          >
            <ul className="grid grid-cols-2 gap-1.5">
              {moreItems.map((item) => {
                const className =
                  "flex items-center justify-center rounded-xl bg-surface px-3 py-3.5 text-sm font-bold text-brand-dark hover:bg-brand-soft hover:text-brand";
                return (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={className}
                        onClick={() => setSheetOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${className} ${
                          isCurrent(pathname, item.href) ? "!bg-brand-soft !text-brand" : ""
                        }`}
                        aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : null}

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(4,40,74,0.08)]"
      >
        <ul className="mx-auto grid h-16 max-w-xl grid-cols-5">
          {tabs.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`${tabClass(current)} w-full`}
                >
                  <ActiveBar active={current} />
                  <span className="relative">
                    {icons[item.href]}
                    {item.badge ? (
                      <span className="absolute -right-3 -top-1.5 rounded-[3px] bg-tag px-1 text-[8px] font-bold uppercase leading-tight text-white">
                        {item.badge}
                      </span>
                    ) : null}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              aria-expanded={sheetOpen}
              aria-controls="more-sheet"
              onClick={() => setSheetOpen((value) => !value)}
              className={`${tabClass(sheetOpen || moreActive)} w-full`}
            >
              <ActiveBar active={sheetOpen || moreActive} />
              {icons.more}
              More
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
