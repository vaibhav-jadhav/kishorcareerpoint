"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { examTabs, rankers, resultHighlights } from "@/content/rankers";
import type { ExamId } from "@/content/rankers";

type Filter = "all" | ExamId;

const filters: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...examTabs];

export function ResultsExplorer() {
  const [active, setActive] = useState<Filter>("all");
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const shownRankers = rankers.filter((item) => active === "all" || item.exam === active);
  const shownPosters = resultHighlights.filter((item) => active === "all" || item.exam === active);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % filters.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + filters.length) % filters.length;
    else return;
    event.preventDefault();
    setActive(filters[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter results by exam"
        className="flex flex-wrap justify-center gap-2.5"
      >
        {filters.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                selected
                  ? "border-select bg-select text-white shadow-md"
                  : "border-line bg-white text-ink hover:border-select/50 hover:text-select"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="anim-rise mt-10 space-y-12"
      >
        {shownRankers.length > 0 ? (
          <section aria-labelledby={`${baseId}-rankers`}>
            <h2
              id={`${baseId}-rankers`}
              className="text-xl font-extrabold tracking-tight text-brand-dark sm:text-2xl"
            >
              Our top <span className="text-brand">rankers</span>
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {shownRankers.map((student) => (
                <li
                  key={student.name}
                  className="overflow-hidden rounded-2xl border border-line bg-white text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,90,170,0.45)]"
                >
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={352}
                    height={333}
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 30vw, 46vw"
                    className="h-auto w-full bg-[#ece8f4]"
                  />
                  <div className="px-3 py-3.5">
                    <p className="text-sm font-bold text-ink sm:text-base">{student.name}</p>
                    {student.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-xs leading-snug text-muted sm:text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {shownPosters.length > 0 ? (
          <section aria-labelledby={`${baseId}-posters`}>
            <h2
              id={`${baseId}-posters`}
              className="text-xl font-extrabold tracking-tight text-brand-dark sm:text-2xl"
            >
              Achievement <span className="text-brand">highlights</span>
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {shownPosters.map((poster) => (
                <li key={poster.image}>
                  <a
                    href={poster.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,90,170,0.45)]"
                  >
                    <Image
                      src={poster.image}
                      alt={poster.title}
                      width={1000}
                      height={1000}
                      sizes="(min-width: 1024px) 270px, 46vw"
                      className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="block border-t border-line px-3 py-2.5 text-center text-sm font-bold text-ink">
                      {poster.title}
                      <span className="sr-only"> (opens full size image)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
