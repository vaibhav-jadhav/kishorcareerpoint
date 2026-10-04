"use client";

import { useEffect, useRef, useState } from "react";
import { buildGoalWhatsappLink, goals, goalsHeading } from "@/content/goals";
import type { ClassOption, Goal, GoalId } from "@/content/goals";

function GoalArt({ id }: { id: GoalId }) {
  const common = { viewBox: "0 0 96 96", "aria-hidden": true, className: "h-full w-full" };

  if (id === "doctor") {
    return (
      <svg {...common}>
        <path d="M30 40c0-14 8-22 18-22s18 8 18 22v16H30z" fill="#2b2a3a" />
        <path d="M18 92c0-18 12-28 30-28s30 10 30 28z" fill="#ffffff" stroke="#c9d8e6" strokeWidth="1.5" />
        <path d="M38 64l10 14 10-14z" fill="#8fc7ee" />
        <path d="M40 66c-4 6-4 14 2 16M56 66c4 6 4 14-2 16" fill="none" stroke="#1d6fb8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="84" r="3" fill="#1d6fb8" />
        <rect x="42" y="52" width="12" height="13" rx="5" fill="#f2c29b" />
        <ellipse cx="48" cy="41" rx="14" ry="16" fill="#f7cfa9" />
        <path d="M33 38c2-12 9-17 15-17s13 5 15 17c-6-3-10-8-15-8s-9 5-15 8z" fill="#2b2a3a" />
        <rect x="32" y="29" width="32" height="4" rx="2" fill="#1d6fb8" />
        <circle cx="48" cy="28" r="6" fill="#ffc20e" stroke="#1d6fb8" strokeWidth="2.5" />
        <circle cx="43" cy="42" r="1.6" fill="#2b2a3a" />
        <circle cx="53" cy="42" r="1.6" fill="#2b2a3a" />
        <path d="M44 48c2 2 6 2 8 0" fill="none" stroke="#b5654a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "engineer") {
    return (
      <svg {...common}>
        <path d="M16 92c0-18 13-28 32-28s32 10 32 28z" fill="#2a78c2" />
        <rect x="30" y="64" width="8" height="28" fill="#1d5f9e" />
        <rect x="58" y="64" width="8" height="28" fill="#1d5f9e" />
        <rect x="42" y="52" width="12" height="13" rx="5" fill="#e9b88c" />
        <ellipse cx="48" cy="42" rx="14" ry="16" fill="#f0c49a" />
        <path d="M33 36c0-12 6-19 15-19s15 7 15 19z" fill="#ffc20e" />
        <rect x="45" y="14" width="6" height="22" rx="2" fill="#f2a900" />
        <rect x="28" y="34" width="40" height="5" rx="2.5" fill="#f2a900" />
        <circle cx="43" cy="45" r="1.6" fill="#2b2a3a" />
        <circle cx="53" cy="45" r="1.6" fill="#2b2a3a" />
        <path d="M44 51c2 2 6 2 8 0" fill="none" stroke="#b5654a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <ellipse cx="30" cy="84" rx="14" ry="6" fill="#ffffff" />
      <ellipse cx="66" cy="84" rx="14" ry="6" fill="#ffffff" />
      <ellipse cx="48" cy="80" rx="12" ry="6" fill="#ffffff" />
      <path d="M42 70c0 8 3 14 6 18 3-4 6-10 6-18z" fill="#ffc20e" />
      <path d="M45 70c0 5 1.5 9 3 11 1.5-2 3-6 3-11z" fill="#4aa8f0" />
      <path d="M32 58l-8 12 12-3zM64 58l8 12-12-3z" fill="#27a463" />
      <path d="M48 10c-10 8-15 20-15 34v26h30V44c0-14-5-26-15-34z" fill="#ffffff" stroke="#c9d8e6" strokeWidth="1.5" />
      <path d="M48 10c-5 4-9 9-11 15h22c-2-6-6-11-11-15z" fill="#27a463" />
      <circle cx="48" cy="44" r="8" fill="#4aa8f0" stroke="#1d6fb8" strokeWidth="3" />
      <path d="M33 62h30v6H33z" fill="#27a463" />
    </svg>
  );
}

function Progress({ done }: { done: boolean }) {
  // Step 1 (goal) is always complete here; step 2 (class) completes once a class is picked.
  return (
    <div className="flex h-2 w-40 items-center overflow-hidden rounded-full" aria-hidden="true">
      <span className="h-full flex-1 bg-tag/70" />
      <span className="h-full w-1 bg-ink" />
      <span className={`h-full flex-1 transition-colors ${done ? "bg-tag/70" : "bg-select/25"}`} />
    </div>
  );
}

export function GoalSelector() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [option, setOption] = useState<ClassOption | null>(null);
  const classHeadingRef = useRef<HTMLHeadingElement>(null);
  const goalHeadingRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    // Move focus to the new step's heading, but not on first render.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    (goal ? classHeadingRef : goalHeadingRef).current?.focus();
  }, [goal]);

  function reset() {
    setGoal(null);
    setOption(null);
  }

  return (
    <section className="bg-white py-6 sm:py-8" aria-labelledby="goal-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {goal === null ? (
          <div>
            <h2
              id="goal-heading"
              ref={goalHeadingRef}
              tabIndex={-1}
              className="text-center text-xl font-extrabold leading-tight tracking-tight text-ink outline-none sm:text-2xl"
            >
              {goalsHeading.lead}
              <span className="block text-brand">{goalsHeading.accent}</span>
            </h2>
            <ul className="mt-5 flex justify-center gap-3 sm:gap-5">
              {goals.map((item) => (
                <li key={item.id} className="w-full max-w-[7.25rem] flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setGoal(item);
                      setOption(null);
                    }}
                    className="group flex w-full flex-col items-center gap-2 rounded-xl border border-line bg-white p-2 text-center transition hover:border-brand hover:shadow-[0_8px_20px_-10px_rgba(0,90,170,0.4)] sm:p-2.5"
                  >
                    <span className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center rounded-lg bg-brand-soft p-1.5">
                      <GoalArt id={item.id} />
                    </span>
                    <span className="text-sm font-bold text-ink group-hover:text-brand sm:text-base">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded-2xl border border-line bg-white p-5 shadow-[0_10px_28px_-18px_rgba(4,40,74,0.35)] sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <Progress done={option !== null} />
              <p className="text-sm font-medium text-ink underline decoration-line underline-offset-4">
                {goal.course}
              </p>
            </div>
            <h2
              id="goal-heading"
              ref={classHeadingRef}
              tabIndex={-1}
              className="mt-6 text-center text-lg font-medium text-gray-700 outline-none"
            >
              Select your class
            </h2>

            <div
              role="radiogroup"
              aria-labelledby="goal-heading"
              className={`mt-4 grid gap-2.5 ${
                goal.classOptions.length === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
              }`}
            >
              {goal.classOptions.map((item) => {
                const selected = option?.label === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setOption(item)}
                    className={`rounded-xl border px-3 py-3 text-base font-medium transition ${
                      selected
                        ? "border-select bg-select text-white"
                        : "border-line bg-surface text-gray-700 hover:border-select/50 hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {goal.id !== "foundation" ? (
              <p className="mt-3 text-center text-xs text-muted">
                12+ is our repeater batch for students who have already passed 12th.
              </p>
            ) : null}

            <div className="mt-7 flex items-center justify-between">
              <button
                type="button"
                onClick={reset}
                className="rounded-lg px-2 py-2 text-base font-bold text-ink hover:text-select"
              >
                Cancel
              </button>
              {option ? (
                <a
                  href={buildGoalWhatsappLink(goal, option)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg px-2 py-2 text-base font-bold text-select hover:underline"
                >
                  Next
                  <span className="sr-only"> (opens WhatsApp)</span>
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="cursor-not-allowed rounded-lg px-2 py-2 text-base font-bold text-gray-400"
                >
                  Next
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
