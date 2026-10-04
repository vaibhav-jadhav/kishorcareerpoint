import { rankers } from "@/content/rankers";

export type JourneyScene = "welcome" | "material" | "classes" | "tests" | "results";

export type JourneyPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** "circle" crops the photo round; default is a rounded rectangle. */
  shape?: "circle";
  caption?: string;
};

export type JourneyStep = {
  id: string;
  /** Short name used under the step number in the stepper. */
  short: string;
  title: string;
  scene: JourneyScene;
  /** Real KCP photos shown next to the illustration. Add or swap files in public/. */
  photos: JourneyPhoto[];
};

export const journeyHeading = "Student Journey at Kishor Career Point";

function rankerPhoto(name: string): JourneyPhoto {
  const ranker = rankers.find((item) => item.name === name);
  if (!ranker) throw new Error(`Unknown ranker: ${name}`);
  return {
    src: ranker.image,
    alt: ranker.name,
    width: 352,
    height: 333,
    caption: ranker.name,
  };
}

export const journeySteps: JourneyStep[] = [
  {
    id: "orientation",
    short: "Orientation",
    title: "Orientation",
    scene: "welcome",
    photos: [
      {
        src: "/about/building.jpg",
        alt: "Kishor Career Point building",
        width: 290,
        height: 488,
        shape: "circle",
      },
    ],
  },
  {
    id: "material",
    short: "Study material",
    title: "Get study material and begin your prep.",
    scene: "material",
    photos: [],
  },
  {
    id: "classes",
    short: "Live classes",
    title: "Interactive classes and personalized attention",
    scene: "classes",
    photos: [
      {
        src: "/about/classroom.jpg",
        alt: "A KCP classroom during a lecture",
        width: 291,
        height: 248,
      },
    ],
  },
  {
    id: "tests",
    short: "Tests",
    title: "Give regular tests and assessments",
    scene: "tests",
    photos: [
      {
        src: "/about/study-hall.jpg",
        alt: "Students studying in the KCP study hall",
        width: 290,
        height: 218,
      },
    ],
  },
  {
    id: "results",
    short: "Results",
    title: "Ace your exams with flying colours!",
    scene: "results",
    photos: [rankerPhoto("Ishan Patil"), rankerPhoto("Kartik Satpute")],
  },
];
