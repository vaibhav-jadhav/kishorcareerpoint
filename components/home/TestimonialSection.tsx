"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials, testimonialsHeading } from "@/content/testimonials";
import type { Testimonial } from "@/content/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d={direction === "prev" ? "m12.5 4-6 6 6 6" : "m7.5 4 6 6-6 6"} />
    </svg>
  );
}

function ReviewCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_8px_24px_-16px_rgba(4,40,74,0.35)]">
      <div className="flex items-center gap-4 bg-brand-soft px-5 py-4">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={352}
            height={333}
            sizes="64px"
            className="h-16 w-16 shrink-0 rounded-2xl border-2 border-white bg-[#ece8f4] object-cover shadow-sm"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br from-[#4aa3f2] to-brand text-xl font-extrabold text-white shadow-sm"
          >
            {initials(item.name)}
          </span>
        )}
        <figcaption className="min-w-0">
          <p className="truncate text-base font-bold text-brand-dark">{item.name}</p>
          <p className="mt-1 inline-block rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-brand">
            {item.result}
          </p>
        </figcaption>
      </div>
      <blockquote className="relative flex-1 px-5 pb-6 pt-5">
        <span
          aria-hidden="true"
          className="absolute right-4 top-0 select-none font-serif text-6xl leading-none text-select/15"
        >
          “
        </span>
        <p className="text-sm leading-7 text-ink">{item.quote}</p>
      </blockquote>
    </figure>
  );
}

export function TestimonialList() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="bg-white py-12 sm:py-16" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="reviews-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            {testimonialsHeading.lead}{" "}
            <span className="text-brand">{testimonialsHeading.accent}</span>{" "}
            {testimonialsHeading.tail}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">{testimonialsHeading.body}</p>
        </Reveal>

        <div className="relative mt-9">
          <ul
            ref={trackRef}
            onScroll={update}
            tabIndex={0}
            aria-label="Student reviews"
            className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]"
              >
                <ReviewCard item={item} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous reviews"
            className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-brand-soft disabled:pointer-events-none disabled:opacity-0 lg:inline-flex"
          >
            <Chevron direction="prev" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next reviews"
            className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-brand-soft disabled:pointer-events-none disabled:opacity-0 lg:inline-flex"
          >
            <Chevron direction="next" />
          </button>
        </div>
      </div>
    </section>
  );
}
