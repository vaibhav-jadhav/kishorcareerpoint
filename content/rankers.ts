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
    lines: ["NEET 2025 — Score 705", "AIIMS NAGPUR"],
    image: "/rankers/kartik-satpute.jpg",
  },
  {
    name: "Rasika Patil",
    exam: "iiser",
    lines: ["IISER EXAM-2025 — 1 AIR"],
    image: "/rankers/rasika-patil.jpg",
  },
  {
    name: "Saadahamad Mulla",
    exam: "neet",
    lines: ["NEET 2025 — Score 593"],
    image: "/rankers/saadahamad-mulla.jpg",
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
    lines: ["IISER — Bhopal"],
    image: "/rankers/shreya-adsul.jpg",
  },
];

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
  { title: "NEET 2024", exam: "neet", image: "/results/neet-2024.jpg" },
  { title: "AIIMS Pearls", exam: "neet", image: "/results/aiims-pearls.jpg" },
  { title: "Achievement in MHT-CET 2024", exam: "mht-cet", image: "/results/mht-cet-2024.jpg" },
];
