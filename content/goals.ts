import { site, whatsappLink } from "@/content/site";

export type GoalId = "doctor" | "engineer" | "foundation";

export type ClassOption = {
  /** Short label on the button, e.g. "11th". */
  label: string;
  /** How the class reads inside the WhatsApp message. */
  phrase: string;
};

export type ExamOption = {
  /** Label on the button, e.g. "MHT-CET". */
  label: string;
  /** Course name used in the WhatsApp message. */
  course: string;
};

export type Goal = {
  id: GoalId;
  label: string;
  /** Course name used in the WhatsApp message when there is no exam step. */
  course: string;
  /** When set, the visitor picks one of these before choosing a class. */
  exams?: ExamOption[];
  classOptions: ClassOption[];
};

export const goalsHeading = {
  lead: "Select your goal",
  accent: "to explore our courses",
};

const seniorClasses: ClassOption[] = [
  { label: "11th", phrase: "Class 11th" },
  { label: "12th", phrase: "Class 12th" },
  { label: "12+", phrase: "12th pass (12+ repeater batch)" },
];

const engineerClasses: ClassOption[] = [
  { label: "10th", phrase: "Class 10th" },
  ...seniorClasses,
];

export const goals: Goal[] = [
  { id: "doctor", label: "Doctor", course: "NEET (UG)", classOptions: seniorClasses },
  {
    id: "engineer",
    label: "Engineer",
    course: "JEE (Main + Advanced)",
    exams: [
      { label: "JEE (Main + Advanced)", course: "JEE (Main + Advanced)" },
      { label: "MHT-CET", course: "MHT-CET" },
    ],
    classOptions: engineerClasses,
  },
  {
    id: "foundation",
    label: "9th - 10th",
    course: "Foundation",
    classOptions: [
      { label: "9th", phrase: "Class 9th" },
      { label: "10th", phrase: "Class 10th" },
    ],
  },
];

export function buildGoalWhatsappLink(goal: Goal, option: ClassOption, exam?: ExamOption | null) {
  const course = exam?.course ?? goal.course;
  const message =
    `Hello ${site.name}, I would like to know more about the ${course} course ` +
    `for ${option.phrase}. Please share the batch details and fees.`;
  return whatsappLink(message);
}
