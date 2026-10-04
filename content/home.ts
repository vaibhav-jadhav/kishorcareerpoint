import { rankers, resultHighlights } from "@/content/rankers";

export type HeroStatIcon = "years" | "medical" | "iit";

export type HeroStat = {
  icon: HeroStatIcon;
  /** Bold lead-in, e.g. "12 years". */
  highlight: string;
  /** Rest of the sentence. */
  text: string;
};

export const heroContent = {
  headline: "Empowering aspirants to become future",
  headlineAccent: "IITians & Doctors",
  stats: [
    {
      icon: "years",
      highlight: "12 years",
      text: "of transforming dreams into reality",
    },
    {
      icon: "medical",
      highlight: "12%",
      text: "of AIIMS doctors are from KCP",
    },
    {
      icon: "iit",
      highlight: "21%",
      text: "of IITians are alumni of KCP",
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
