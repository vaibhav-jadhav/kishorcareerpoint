export type Course = {
  id: string;
  name: string;
  summary: string;
};

export const coursesIntro =
  "Explore our range of specialized courses designed to help students excel in national-level exams and school foundations. Gain access to expert faculty, comprehensive materials, and proven results.";

export const coursesPageIntro =
  "Kishor Career Point (KCP) is a focused educational institute committed to delivering result-driven coaching for competitive and school-level examinations. Our experienced faculty, structured syllabi, and modern learning infrastructure help students build strong conceptual foundations, sharpen problem-solving skills, and achieve top results in JEE (Main + Advanced), NEET (UG), and Foundation courses for school students.";

export const courses: Course[] = [
  {
    id: "jee",
    name: "JEE (Main + Advanced)",
    summary:
      "Rigorous coaching for engineering aspirants, covering all critical concepts and problem-solving techniques needed for IIT success.",
  },
  {
    id: "neet",
    name: "NEET (UG)",
    summary:
      "Structured preparation for medical entrance, including in-depth coverage of biology, physics, and chemistry by experienced mentors.",
  },
  {
    id: "foundation",
    name: "Foundation (8th–10th)",
    summary:
      "Focused guidance for school students to build strong academic fundamentals, develop analytical skills, and foster holistic growth.",
  },
];
