export type Ranker = {
  name: string;
  lines: string[];
};

export const rankersIntro =
  "Meet our outstanding students who have excelled in national and state-level exams. Their dedication and success inspire future aspirants.";

export const rankers: Ranker[] = [
  {
    name: "Kartik Satpute",
    lines: ["NEET 2025 — Score 705", "AIIMS NAGPUR"],
  },
  {
    name: "Rasika Patil",
    lines: ["IISER EXAM-2025 — 1 AIR"],
  },
  {
    name: "Saadahamad Mulla",
    lines: ["NEET 2025 — Score 593"],
  },
  {
    name: "Ishan Patil",
    lines: ["IIT Bombay"],
  },
  {
    name: "Varad Kale",
    lines: ["NIT Warangal"],
  },
  {
    name: "Shreya Adsul",
    lines: ["IISER — Bhopal"],
  },
];

export type ResultHighlight = {
  title: string;
  image: string;
};

export const resultHighlights: ResultHighlight[] = [
  { title: "Achievement in JEE", image: "/results/achievement-in-jee.jpg" },
  { title: "JEE Mains 2025", image: "/results/jee-mains-2025.jpg" },
  { title: "KCP's NITians", image: "/results/kcp-nitians.jpg" },
  { title: "Stars in IISER exam", image: "/results/stars-in-iiser.jpg" },
  { title: "NEET 2024", image: "/results/neet-2024.jpg" },
  { title: "AIIMS Pearls", image: "/results/aiims-pearls.jpg" },
  { title: "Achievement in MHT-CET 2024", image: "/results/mht-cet-2024.jpg" },
];
