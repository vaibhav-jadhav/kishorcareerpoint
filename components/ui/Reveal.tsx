"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms, used to stagger siblings. */
  delay?: number;
  className?: string;
  /** Direction the content slides in from. Defaults to rising from below. */
  from?: "up" | "left" | "right";
};

const hiddenClass = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
};

/**
 * Fades and lifts its children in when they scroll into view.
 * Content is visible on first paint (server render, no JS, reduced motion);
 * it is only hidden after mount if it starts below the fold.
 */
export function Reveal({ children, delay = 0, className = "", from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: hidden ? "0ms" : `${delay}ms` }}
      className={`transition duration-700 ease-out ${
        hidden ? hiddenClass[from] : "translate-x-0 translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
