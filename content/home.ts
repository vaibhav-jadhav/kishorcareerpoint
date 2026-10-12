import { rankers, resultHighlights } from "@/content/rankers";

export type HeroStatIcon = "years" | "concepts" | "practice";

export type HeroStat = {
  icon: HeroStatIcon;
  /** Bold lead-in, e.g. "12 years". */
  highlight: string;
  /** Rest of the sentence. */
  text: string;
};

export const founderMessage = {
  heading: "A message from our founder",
  text: "At Kishor Career Point, we believe every student deserves clear explanations, thoughtful guidance and the opportunity to improve. Our purpose is to build strong concepts, nurture confidence and help students move steadily towards their goals.",
};

export const heroContent = {
  headline: "Behind Every Ambition, There Should Be",
  headlineAccent: "Clear Direction",
  stats: [
    {
      icon: "years",
      highlight: "10 years",
      text: "of transforming dreams into reality",
    },
    {
      icon: "concepts",
      highlight: "Clear Concepts,",
      text: "Strong Fundamentals",
    },
    {
      icon: "practice",
      highlight: "Structured Practice",
      text: "and Regular Assessment",
    },
  ] satisfies HeroStat[],
};

export type ShowcaseSlide =
  | {
      kind: "ranker";
      id: string;
      name: string;
      lines: string[];
      image: string;
    }
  | {
      kind: "poster";
      id: string;
      title: string;
      image: string;
    };

/**
 * Slides for the auto-scrolling card beside the hero text.
 * Built from the real ranker portraits and result posters, alternating
 * between the two so the card does not show only one kind for long.
 */
export const showcaseSlides: ShowcaseSlide[] = (() => {
  const rankerSlides: ShowcaseSlide[] = rankers.map((r) => ({
    kind: "ranker",
    id: `ranker-${r.name}`,
    name: r.name,
    lines: r.lines,
    image: r.image,
  }));
  const posterSlides: ShowcaseSlide[] = resultHighlights.map((p) => ({
    kind: "poster",
    id: `poster-${p.image}`,
    title: p.title,
    image: p.image,
  }));

  const out: ShowcaseSlide[] = [];
  const longest = Math.max(rankerSlides.length, posterSlides.length);
  for (let i = 0; i < longest; i += 1) {
    if (posterSlides[i]) out.push(posterSlides[i]);
    if (rankerSlides[i]) out.push(rankerSlides[i]);
  }
  return out;
})();
