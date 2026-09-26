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
};

export const resultHighlights: ResultHighlight[] = [
  { title: "Achievement in JEE" },
  { title: "JEE Mains 2025" },
  { title: "KCP's NITians" },
  { title: "Stars in IISER exam" },
  { title: "NEET 2024" },
  { title: "AIIMS Pearls" },
  { title: "Achievement in MHT-CET 2024" },
];
