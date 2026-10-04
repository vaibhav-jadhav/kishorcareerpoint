"use client";

import { useEffect, useState } from "react";
import { branches } from "@/content/branches";
import { telHref } from "@/content/site";

/** Compact list of every branch. Selecting one shows its map. */
export function BranchList() {
  const [activeId, setActiveId] = useState(branches[0].id);
  const active = branches.find((branch) => branch.id === activeId) ?? branches[0];

  // Links such as /branches#sangli (from the contact page) open that branch.
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (branches.some((branch) => branch.id === fromHash)) setActiveId(fromHash);
  }, []);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <ul className="space-y-2.5" aria-label="Branches">
        {branches.map((branch) => {
          const selected = branch.id === active.id;
          return (
            <li
              key={branch.id}
              id={branch.id}
              className={`scroll-mt-28 rounded-xl border bg-white transition ${
                selected
                  ? "border-select shadow-[0_8px_20px_-12px_rgba(31,111,235,0.6)] ring-1 ring-select"
                  : "border-line hover:border-select/40"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveId(branch.id)}
                aria-pressed={selected}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span
                  className={`mt-1 h-3 w-3 shrink-0 rounded-full border-2 ${
                    selected ? "border-select bg-select" : "border-line bg-white"
                  }`}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-bold text-brand-dark">{branch.name}</span>
                    {branch.isMain ? (
                      <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-brand">
                        Main
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-0.5 block text-xs leading-5 text-muted">{branch.address}</span>
                </span>
              </button>
              {selected ? (
                <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-line px-4 py-2.5 pl-10 text-sm">
                  <a href={telHref(branch.phone)} className="font-semibold text-brand hover:underline">
                    {branch.phoneDisplay}
                  </a>
                  <a href={`mailto:${branch.email}`} className="text-brand hover:underline">
                    {branch.email}
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-brand hover:underline"
                  >
                    Get directions
                    <span className="sr-only"> to {branch.name} branch</span>
                  </a>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="overflow-hidden rounded-2xl border border-line bg-white lg:sticky lg:top-28 lg:self-start">
        <iframe
          key={active.id}
          title={`Map of Kishor Career Point, ${active.name}`}
          src={active.mapEmbedUrl}
          className="h-72 w-full border-0 lg:h-[26rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
