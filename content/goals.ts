import { site, whatsappLink } from "@/content/site";

export type GoalId = "doctor" | "engineer" | "foundation";

export type ClassOption = {
  /** Short label on the button, e.g. "11th". */
  label: string;
  /** How the class reads inside the WhatsApp message. */
  phrase: string;
};

export type Goal = {
  id: GoalId;
  label: string;
  /** Course name used in the WhatsApp message. */
  course: string;
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

export const goals: Goal[] = [
  { id: "doctor", label: "Doctor", course: "NEET (UG)", classOptions: seniorClasses },
  {
    id: "engineer",
    label: "Engineer",
    course: "JEE (Main + Advanced)",
    classOptions: seniorClasses,
  },
  {
    id: "foundation",
    label: "8th - 10th",
    course: "Foundation",
    classOptions: [
      { label: "8th", phrase: "Class 8th" },
      { label: "9th", phrase: "Class 9th" },
      { label: "10th", phrase: "Class 10th" },
    ],
  },
];

export function buildGoalWhatsappLink(goal: Goal, option: ClassOption) {
  const message =
    `Hello ${site.name}, I would like to know more about the ${goal.course} course ` +
    `for ${option.phrase}. Please share the batch details and fees.`;
  return whatsappLink(message);
}
