import { rankerPosterAlt, rankerPosters } from "@/content/rankers";

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
  name: "Vishal D. Pagade",
  role: "Founder",
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

/** Top NEET scorers for the auto-scrolling card beside the hero text. */
export const showcaseSlides: ShowcaseSlide[] = rankerPosters
  .filter((p) => p.featured)
  .map((p) => ({
    kind: "poster",
    id: `ranker-poster-${p.image}`,
    title: rankerPosterAlt(p),
    image: p.image,
  }));
