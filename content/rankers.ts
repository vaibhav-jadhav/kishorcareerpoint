export type ExamId = "neet" | "jee" | "iiser" | "mht-cet";

export const examTabs: { id: ExamId; label: string }[] = [
  { id: "neet", label: "NEET" },
  { id: "jee", label: "JEE" },
  { id: "iiser", label: "IISER" },
  { id: "mht-cet", label: "MHT-CET" },
];

export type Ranker = {
  name: string;
  exam: ExamId;
  lines: string[];
  image: string;
};

export const rankersIntro =
  "Meet our outstanding students who have excelled in national and state-level exams. Their dedication and success inspire future aspirants.";

export const rankers: Ranker[] = [
  {
    name: "Kartik Satpute",
    exam: "neet",
    lines: ["NEET 2025: Score 705", "AIIMS NAGPUR"],
    image: "/rankers/kartik-satpute.jpg",
  },
  {
    name: "Rasika Patil",
    exam: "iiser",
    lines: ["IISER EXAM-2025: 1 AIR"],
    image: "/rankers/rasika-patil.jpg",
  },
  {
    name: "Ishan Patil",
    exam: "jee",
    lines: ["IIT Bombay"],
    image: "/rankers/ishan-patil.jpg",
  },
  {
    name: "Varad Kale",
    exam: "jee",
    lines: ["NIT Warangal"],
    image: "/rankers/varad-kale.jpg",
  },
  {
    name: "Shreya Adsul",
    exam: "iiser",
    lines: ["IISER Bhopal"],
    image: "/rankers/shreya-adsul.jpg",
  },
];

/** Landscape result cards with the student's name and score printed on the image. */
export type RankerPoster = {
  name: string;
  exam: ExamId;
  year: number;
  score: number;
  image: string;
  /** Featured posters also appear in the home page hero and the home page exam tab. */
  featured: boolean;
};

export const rankerPosters: RankerPoster[] = [
  { name: "Gajendra Shikarkhane", exam: "neet", year: 2026, score: 631, image: "/rankers/neet-2026-gajendra-shikarkhane.jpg", featured: true },
  { name: "Atharv Takale", exam: "neet", year: 2026, score: 627, image: "/rankers/neet-2026-atharv-takale.jpg", featured: true },
  { name: "Parth Patil", exam: "neet", year: 2026, score: 611, image: "/rankers/neet-2026-parth-patil.jpg", featured: true },
  { name: "Kshitij Varape", exam: "neet", year: 2026, score: 600, image: "/rankers/neet-2026-kshitij-varape.jpg", featured: true },
  { name: "Srushti Dhere", exam: "neet", year: 2026, score: 600, image: "/rankers/neet-2026-srushti-dhere.jpg", featured: true },
  { name: "Saadahamad Mulla", exam: "neet", year: 2025, score: 593, image: "/rankers/neet-2025-saadahamad-mulla.jpg", featured: false },
  { name: "Madhav Kakani", exam: "neet", year: 2025, score: 582, image: "/rankers/neet-2025-madhav-kakani.jpg", featured: false },
  { name: "Kavyanjali Nagure", exam: "neet", year: 2025, score: 569, image: "/rankers/neet-2025-kavyanjali-nagure.jpg", featured: false },
  { name: "Sanskar Patil", exam: "neet", year: 2025, score: 565, image: "/rankers/neet-2025-sanskar-patil.jpg", featured: false },
  { name: "Yashodip Koli", exam: "neet", year: 2025, score: 553, image: "/rankers/neet-2025-yashodip-koli.jpg", featured: false },
];

export function rankerPosterAlt(poster: RankerPoster) {
  return `${poster.name}, NEET ${poster.year}, score ${poster.score}`;
}

export type ResultHighlight = {
  title: string;
  exam: ExamId;
  image: string;
};

export const resultHighlights: ResultHighlight[] = [
  { title: "Achievement in JEE", exam: "jee", image: "/results/achievement-in-jee.jpg" },
  { title: "JEE Mains 2025", exam: "jee", image: "/results/jee-mains-2025.jpg" },
  { title: "KCP's NITians", exam: "jee", image: "/results/kcp-nitians.jpg" },
  { title: "Stars in IISER exam", exam: "iiser", image: "/results/stars-in-iiser.jpg" },
  { title: "Achievement in MHT-CET 2024", exam: "mht-cet", image: "/results/mht-cet-2024.jpg" },
];
