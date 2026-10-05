/**
 * Search-engine titles and descriptions. These live in <head> only; they do not
 * change any text visitors see on the pages. Titles get " | Kishor Career Point"
 * appended by the root layout, so keep them short (under about 40 characters).
 * Descriptions work best at 150-160 characters.
 */
export const seo = {
  home: {
    title: "Kishor Career Point – NEET, JEE & Foundation Coaching in Ichalkaranji",
    description:
      "Kishor Career Point (KCP) offers NEET (UG), JEE (Main + Advanced) and Foundation (8th–10th) coaching in Ichalkaranji, Kolhapur, Sangli, Karad and Hatkanangale.",
  },
  about: {
    title: "About Us – Mission, Vision & Values",
    description:
      "Kishor Career Point was established in Maharashtra in 2016 to guide students for NEET, JEE and Foundation exams with experienced faculty and focused teaching.",
  },
  courses: {
    title: "NEET, JEE & Foundation Courses",
    description:
      "Explore KCP courses for JEE (Main + Advanced), NEET (UG) and Foundation (8th–10th): experienced faculty, structured syllabi and result-driven coaching.",
  },
  results: {
    title: "Results – NEET, JEE, IISER & MHT-CET",
    description:
      "See the top rankers and results of Kishor Career Point students in NEET, JEE, IISER and MHT-CET, with posters and admissions to leading institutes.",
  },
  branches: {
    title: "Branches – Ichalkaranji, Kolhapur, Sangli",
    description:
      "Find Kishor Career Point branches in Ichalkaranji (main), Kolhapur, Sangli, Karad and Hatkanangale, with addresses, phone numbers and map directions.",
  },
  contact: {
    title: "Contact Us – Call or WhatsApp",
    description:
      "Call or WhatsApp Kishor Career Point for course, admission and campus visit enquiries. Head office: near Niramay Hospital, Ring Road, Ichalkaranji.",
  },
  careers: {
    title: "Careers",
    description:
      "Kishor Career Point hires faculty and staff who care about students and the craft of teaching. Open roles are listed here when we are hiring.",
  },
} as const;
