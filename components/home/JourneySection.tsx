"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { JourneyArt } from "@/components/home/JourneyScenes";
import { Reveal } from "@/components/ui/Reveal";
import { journeyHeading, journeySteps } from "@/content/journey";
import type { JourneyPhoto } from "@/content/journey";

function ZigZag({ position, fill }: { position: "top" | "bottom"; fill: string }) {
  const teeth = 40;
  const step = 1200 / teeth;
  const points: string[] = position === "top" ? ["0,0", "1200,0"] : ["0,18", "1200,18"];
  for (let i = teeth; i >= 0; i -= 1) {
    const odd = i % 2 === 1;
    const y = position === "top" ? (odd ? 18 : 6) : odd ? 0 : 12;
    points.push(`${i * step},${y}`);
  }
  return (
    <svg
      viewBox="0 0 1200 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute left-0 z-10 h-3 w-full sm:h-[18px] ${position === "top" ? "top-0" : "bottom-0"}`}
    >
      <polygon points={points.join(" ")} fill={fill} />
    </svg>
  );
}

function Photo({ photo, className }: { photo: JourneyPhoto; className: string }) {
  if (photo.shape === "circle") {
    return (
      <div
        className={`relative aspect-square overflow-hidden rounded-full border-4 border-white bg-white shadow-xl ${className}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="96px"
          className="object-cover object-center"
        />
      </div>
    );
  }
  return (
    <figure
      className={`overflow-hidden rounded-xl border-[3px] border-white bg-white shadow-xl ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="140px"
        className="h-auto w-full"
      />
      {photo.caption ? (
        <figcaption className="bg-brand-dark px-1.5 py-0.5 text-center text-[10px] font-bold leading-tight text-white">
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function photoClass(photo: JourneyPhoto, count: number, index: number) {
  if (photo.shape === "circle") return "absolute -bottom-2 -right-2 w-[30%]";
  if (count === 1) return "absolute -bottom-3 -right-3 w-[44%] rotate-2";
  return index === 0
    ? "absolute -bottom-4 right-[18%] z-10 w-[28%] -rotate-3"
    : "absolute -right-4 top-3 w-[28%] rotate-3";
}

export function JourneySection() {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [reached, setReached] = useState(0);

  // The line fills and the numbered nodes light up as the visitor scrolls down.
  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const list = listRef.current;
      const fill = fillRef.current;
      if (!list || !fill) return;

      const marker = window.innerHeight * 0.6;
      const listTop = list.getBoundingClientRect().top;
      const first = nodeRefs.current[0]?.getBoundingClientRect();
      const startOffset = first ? first.top - listTop + first.height / 2 : 20;
      const height = Math.max(0, Math.min(list.offsetHeight - startOffset, marker - listTop - startOffset));
      fill.style.height = `${height}px`;

      let count = 0;
      nodeRefs.current.forEach((node) => {
        if (node && node.getBoundingClientRect().top + 20 < marker) count += 1;
      });
      setReached((previous) => (previous === count ? previous : count));
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#4aa3f2] via-[#2f8ae6] to-[#1f78d6] py-10 text-white sm:py-14"
      aria-labelledby="journey-heading"
    >
      <ZigZag position="top" fill="#f4f7fb" />
      <ZigZag position="bottom" fill="#ffffff" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="anim-rays absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 bg-[repeating-conic-gradient(from_0deg,rgba(255,255,255,0.06)_0deg_6deg,transparent_6deg_12deg)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.14),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2
            id="journey-heading"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            {journeyHeading}
          </h2>
        </Reveal>

        <ol ref={listRef} className="relative mt-7 space-y-6 sm:mt-9 sm:space-y-7">
          {/* Timeline line and its scroll-driven fill */}
          <span
            className="absolute bottom-5 left-[1.125rem] top-5 w-0.5 -translate-x-1/2 rounded-full bg-white/20 lg:left-1/2"
            aria-hidden="true"
          />
          <span
            ref={fillRef}
            className="absolute left-[1.125rem] top-5 w-0.5 -translate-x-1/2 rounded-full bg-sun shadow-[0_0_12px_rgba(255,194,14,0.7)] lg:left-1/2"
            style={{ height: 0 }}
            aria-hidden="true"
          />

          {journeySteps.map((step, i) => {
            const artLeft = i % 2 === 0;
            const lit = i < reached;
            return (
              <li
                key={step.id}
                className="relative grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-3 lg:grid-cols-[1fr_2.25rem_1fr] lg:items-center lg:gap-x-8"
              >
                <span
                  ref={(node) => {
                    nodeRefs.current[i] = node;
                  }}
                  className={`relative z-10 col-start-1 row-start-1 flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-extrabold transition duration-500 lg:col-start-2 ${
                    lit
                      ? "scale-110 border-sun bg-sun text-brand-dark shadow-[0_0_0_6px_rgba(255,194,14,0.25)]"
                      : "border-white/50 bg-[#1f78d6] text-white"
                  }`}
                >
                  {i + 1}
                </span>

                <Reveal
                  from={artLeft ? "right" : "left"}
                  delay={80}
                  className={`col-start-2 row-start-1 self-center lg:row-start-1 ${
                    artLeft ? "lg:col-start-3 lg:text-left" : "lg:col-start-1 lg:text-right"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-snug sm:text-xl">
                    {step.title}
                  </h3>
                </Reveal>

                <Reveal
                  from={artLeft ? "left" : "right"}
                  className={`col-start-2 row-start-2 lg:row-start-1 ${
                    artLeft ? "lg:col-start-1 lg:justify-self-end" : "lg:col-start-3 lg:justify-self-start"
                  }`}
                >
                  <div className="relative w-full max-w-[11.5rem] sm:max-w-[13.5rem]">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-[3px] border-white/80 bg-[#d9ecfc] shadow-[0_14px_30px_-14px_rgba(0,0,0,0.55)]">
                      <JourneyArt scene={step.scene} />
                    </div>
                    {step.photos.map((photo, p) => (
                      <Photo
                        key={photo.src}
                        photo={photo}
                        className={photoClass(photo, step.photos.length, p)}
                      />
                    ))}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
