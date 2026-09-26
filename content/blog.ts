export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  sections: BlogSection[];
};

export const blogIntro =
  "Stay updated with the latest articles, expert tips, and inspiring stories from our institute. Explore topics that help students, parents, and educators achieve academic success and personal growth.";

export const posts: BlogPost[] = [
  {
    slug: "kcp-blog",
    title:
      "NEET 2025 Exam Guide: Eligibility, Syllabus, Pattern, Dates and Top Preparation Tips",
    description:
      "A complete NEET exam guide covering exam pattern, eligibility, syllabus, important dates, and section-wise preparation tips for Physics, Chemistry and Biology.",
    category: "NEET",
    publishedAt: "2025-10-31",
    updatedAt: "2025-12-03",
    sections: [
      {
        id: "intro-what-is-neet",
        heading: "Intro: What is NEET?",
        paragraphs: [
          "NEET UG is a national entrance test conducted once a year for admission to MBBS, BDS and other undergraduate medical courses across India. The exam is conducted by the National Testing Agency (NTA) in offline mode using OMR sheets at centres across the country. NEET is mandatory for almost all government and private medical colleges, so every MBBS aspirant must qualify this exam to get admission.",
        ],
      },
      {
        id: "neet-2025-exam-overview",
        heading: "NEET 2025 exam overview",
        paragraphs: [
          "NEET 2025 is scheduled in offline, pen-and-paper mode with a single question paper for Physics, Chemistry and Biology. As per recent updates, the test consists of 180 multiple-choice questions to be solved in 3 hours, with 4 marks for every correct answer and 1 mark deducted for each wrong answer. The paper is available in multiple languages, and all questions are objective type with four options and one correct choice.",
        ],
      },
      {
        id: "eligibility-criteria",
        heading: "Eligibility criteria",
        paragraphs: [
          "To appear for NEET, students must have passed or be appearing in Class 12 or equivalent with Physics, Chemistry, Biology/Biotechnology and English as core subjects from a recognised board. General category candidates typically need at least 50% aggregate in PCB, while reserved categories like SC, ST and OBC receive certain percentage relaxations. There are also age and attempt rules defined by NMC and NTA, so students should carefully read the latest information bulletin before applying.",
        ],
      },
      {
        id: "exam-pattern-and-marking-scheme",
        heading: "Exam pattern and marking scheme",
        paragraphs: [
          "NEET 2025 question paper carries a total of 180 questions from Physics, Chemistry, Botany and Zoology, making the maximum score 720 marks. Each correct answer gives +4 marks and each incorrect answer results in -1 mark, while unattempted questions carry zero marks. The duration of the exam is 3 hours, so students get roughly one minute per question, making time management extremely important.",
        ],
      },
      {
        id: "syllabus-overview",
        heading: "Syllabus overview",
        paragraphs: [
          "The NEET syllabus is mainly based on Physics, Chemistry and Biology topics from CBSE Class 11 and 12, with final topics approved by the National Medical Commission. In Physics, key areas include mechanics, thermodynamics, electricity, magnetism, optics and modern physics, while Chemistry covers physical concepts, chemical bonding, organic mechanisms and biomolecules. Biology focuses on cell biology, plant and human physiology, reproduction, genetics, evolution, ecology and human health and diseases.",
        ],
      },
      {
        id: "important-dates-and-application",
        heading: "Important dates and application",
        paragraphs: [
          "NTA publishes the NEET information bulletin each year with application start date, last date, fee details and exam schedule. Students have to register online on the official NEET portal, fill the form carefully, upload documents and pay the prescribed fee for their category before the deadline. Admit cards are released a few weeks before the exam and results are usually announced about a month after the test, followed by counselling rounds conducted by national and state authorities.",
        ],
      },
      {
        id: "preparation-strategy-for-neet",
        heading: "Preparation strategy for NEET",
        paragraphs: [
          "A strong NEET preparation plan starts with understanding the updated syllabus, analysing previous year papers and creating a realistic timetable that covers all three subjects. Experts advise giving maximum weightage to Biology because it carries 50% of the total marks, while not ignoring Physics and Chemistry numericals which often decide top ranks. Regular self-study supported by coaching, online lectures or test series helps students identify weak areas and steadily improve accuracy and speed.",
        ],
      },
      {
        id: "subject-wise-study-tips",
        heading: "Subject-wise study tips",
        paragraphs: [],
        bullets: [
          "Physics: Focus on basic concepts, formulae and derivations, then practice lots of numerical problems from topics like mechanics, electricity, magnetism and modern physics.",
          "Chemistry: Make concise notes for inorganic, practise numerical problems in physical chemistry and revise reaction mechanisms in organic chemistry frequently.",
          "Biology: Read NCERT line by line, underline important points, learn diagrams and terminology, and revise multiple times using short notes and flashcards.",
        ],
      },
      {
        id: "role-of-mock-tests-and-pyqs",
        heading: "Role of mock tests and PYQs",
        paragraphs: [
          "Attempting regular full-length mock tests in a simulated exam environment improves time management, stamina and OMR accuracy. Analysing previous year question papers helps identify commonly repeated topics, question formats and the relative difficulty of each subject. After every mock, students should review mistakes, classify them as conceptual, careless or time-related and then adjust their study plan accordingly.",
        ],
      },
      {
        id: "time-management-and-examday-tips",
        heading: "Time management and exam-day tips",
        paragraphs: [
          "During the exam, students should divide time between sections, avoid getting stuck on any single problem and keep the last 15–20 minutes for bubbling remaining answers on the OMR sheet. It is important to read each question carefully, eliminate obviously wrong options and make calculated guesses only when at least two options can be ruled out. Carrying all required documents, reaching the centre early and staying calm can prevent last-minute stress and silly mistakes.",
        ],
      },
      {
        id: "common-mistakes-to-avoid",
        heading: "Common mistakes to avoid",
        paragraphs: [
          "Many aspirants ignore NCERT basics and focus only on advanced reference books, which reduces accuracy on direct theory questions. Skipping revision and mock analysis, memorising without understanding and inconsistent daily study hours are other major reasons for low scores. Students should also avoid changing strategies close to the exam and instead refine the plan that has worked during their preparation.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(`${isoDate}T00:00:00+05:30`));
}
