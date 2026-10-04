"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ShowcaseSlide } from "@/content/home";

const AUTOPLAY_MS = 4500;

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d={direction === "prev" ? "m12.5 4-6 6 6 6" : "m7.5 4 6 6-6 6"} />
    </svg>
  );
}

function Slide({ slide, priority }: { slide: ShowcaseSlide; priority: boolean }) {
  if (slide.kind === "poster") {
    // Posters are square, so show them whole (no cropping) on the same navy as ranker slides.
    return (
      <div className="relative h-full w-full bg-brand-dark">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(min-width: 1024px) 448px, 100vw"
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden bg-brand-dark px-5 py-4 text-white sm:px-7">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/60" />
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-white/5" />
      <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-sun">
        Our top rankers
      </p>
      <div className="relative flex items-center gap-5">
        <div className="w-[46%] shrink-0 overflow-hidden rounded-2xl border-4 border-white/90 bg-[#ece8f4] shadow-xl">
          <Image
            src={slide.image}
            alt={slide.name}
            width={352}
            height={333}
            sizes="200px"
            className="h-auto w-full"
          />
        </div>
        <div className="min-w-0">
          <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
            {slide.name}
          </p>
          {slide.lines.map((line) => (
            <p key={line} className="mt-1.5 text-sm font-semibold leading-snug text-sun">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroShowcase({ slides }: { slides: ShowcaseSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = slides.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const timer = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reducedMotion, count, go]);

  if (count === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="KCP rankers and results"
      className="relative mx-auto w-full min-w-0 max-w-[28rem] lg:mr-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-[0_20px_50px_-12px_rgba(4,40,74,0.35)]">
        <div className="aspect-[5/4] w-full">
          <div
            className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live={paused || reducedMotion ? "polite" : "off"}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
                inert={i !== index}
                className="relative h-full w-full shrink-0"
              >
                <Slide slide={slide} priority={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
      >
        <Arrow direction="prev" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
      >
        <Arrow direction="next" />
      </button>

      <div className="mt-2 flex items-center justify-center gap-1.5" role="group" aria-label="Choose slide">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className="group flex h-4 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-brand" : "w-3 bg-brand/25 group-hover:bg-brand/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
