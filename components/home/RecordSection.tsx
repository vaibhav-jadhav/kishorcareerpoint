"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { examTabs, rankers, resultHighlights } from "@/content/rankers";
import type { ExamId } from "@/content/rankers";

export const recordCopy = {
  lead: "A Record of",
  accent: "Consistent Excellence",
  body: "See the exceptional ranks secured by our students in NEET, JEE, and other exams.",
};

export function RecordSection() {
  const [active, setActive] = useState<ExamId>(examTabs[0].id);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabRankers = rankers.filter((item) => item.exam === active);
  const tabPosters = resultHighlights.filter((item) => item.exam === active);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % examTabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + examTabs.length) % examTabs.length;
    else return;
    event.preventDefault();
    setActive(examTabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="bg-surface py-12 sm:py-16" aria-labelledby="record-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="record-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            {recordCopy.lead} <span className="text-brand">{recordCopy.accent}</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">{recordCopy.body}</p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Results by exam"
          className="mt-7 flex flex-wrap justify-center gap-2.5"
        >
          {examTabs.map((tab, index) => {
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
          className="anim-rise mt-8 flex flex-wrap justify-center gap-4"
        >
          {tabRankers.map((student) => (
            <Link
              key={student.name}
              href="/results"
              className="group w-[calc(50%-0.5rem)] overflow-hidden rounded-2xl border border-line bg-white text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,90,170,0.45)] sm:w-44 lg:w-48"
            >
              <div className="overflow-hidden bg-[#ece8f4]">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={352}
                  height={333}
                  sizes="192px"
                  className="h-auto w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 py-3">
                <p className="text-sm font-bold text-ink">{student.name}</p>
                {student.lines.map((line) => (
                  <p key={line} className="mt-0.5 text-xs leading-snug text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Link>
          ))}
          {tabPosters.map((poster) => (
            <Link
              key={poster.image}
              href="/results"
              className="group w-[calc(50%-0.5rem)] overflow-hidden rounded-2xl border border-line bg-white text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,90,170,0.45)] sm:w-44 lg:w-48"
            >
              <div className="overflow-hidden">
                <Image
                  src={poster.image}
                  alt={poster.title}
                  width={1000}
                  height={1000}
                  sizes="192px"
                  className="h-auto w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="px-2 py-3 text-sm font-bold text-ink">{poster.title}</p>
            </Link>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/results"
            className="inline-flex items-center justify-center rounded-xl bg-select px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition hover:bg-brand"
          >
            Explore All Results
          </Link>
        </div>
      </div>
    </section>
  );
}
