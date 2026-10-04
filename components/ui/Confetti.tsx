"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Piece = {
  id: number;
  style: CSSProperties;
  round: boolean;
};

const colors = ["#005aaa", "#ffc20e", "#e4570e", "#1aa14a", "#1f6feb", "#4aa8f0", "#ffffff"];

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, id) => {
    const size = 7 + Math.random() * 7;
    const round = Math.random() < 0.25;
    return {
      id,
      round,
      style: {
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${round ? size : size * 1.6}px`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 0.7}s`,
        animationDuration: `${1.8 + Math.random() * 1.4}s`,
        ["--dx" as string]: `${(Math.random() - 0.5) * 220}px`,
        ["--rot" as string]: `${360 + Math.random() * 720}deg`,
      },
    };
  });
}

/**
 * Paper-confetti shower over the whole page. Pass a new positive `fireKey`
 * to start one burst. It never blocks clicks and is skipped for reduced motion.
 */
export function Confetti({ fireKey }: { fireKey: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (fireKey <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPieces(makePieces(window.innerWidth < 640 ? 50 : 90));
    const timer = window.setTimeout(() => setPieces([]), 4500);
    return () => window.clearTimeout(timer);
  }, [fireKey]);

  if (pieces.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className={`anim-confetti absolute -top-6 block ${piece.round ? "rounded-full" : "rounded-[2px]"}`}
          style={piece.style}
        />
      ))}
    </div>
  );
}
