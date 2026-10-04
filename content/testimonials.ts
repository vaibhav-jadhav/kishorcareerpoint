export type Testimonial = {
  name: string;
  /** Short result line shown as a badge, e.g. "IISER exam · AIR 1". */
  result: string;
  quote: string;
  /** Portrait in public/. When missing, the card shows the student's initials. */
  image?: string;
};

export const testimonialsHeading = {
  lead: "What our",
  accent: "students & parents",
  tail: "say about us",
  body: "Read the honest reviews and success stories of our top KCP achievers",
};

/** Reviews from the KCP Brochure 2025 ("Topper's Testimonials"). */
export const testimonials: Testimonial[] = [
  {
    name: "Atharv Sahasrabudhe",
    result: "100 percentile · MHT-CET 2025",
    quote:
      "Kishor Career Point provided a disciplined and result-oriented learning environment. The faculty emphasized conceptual clarity, regular practice, and smart exam strategies, which played a major role in helping me to secure 100 percentile in MHT-CET.",
  },
  {
    name: "Rasika Patil",
    result: "IISER exam · AIR 1",
    quote:
      "My journey with Kishor Career Point was truly transformative. The faculty focused not just on exams, but on building deep conceptual understanding and scientific thinking. The consistent support, regular assessments, and positive learning environment helped me achieve my dream of getting into IISER.",
    image: "/rankers/rasika-patil.jpg",
  },
  {
    name: "Rashmi Malusare",
    result: "AIIMS Bhopal",
    quote:
      "What stood out for me at KCP was how each student was treated like a priority. Even in a batch of hundreds, teachers remembered our names, our strengths, and our weak areas. The doubt sessions, personal mentoring, and even motivational talks helped me stay on track. I got selected at AIIMS, and I truly owe this achievement to my mentors at KCP who never gave up on me.",
  },
  {
    name: "Bhavyam Shankar",
    result: "IIT Hyderabad · AIR 274 (EWS)",
    quote:
      "My preparation at Kishor Career Point was structured, focused, and concept-driven. The faculty ensured deep understanding, regular practice, and continuous evaluation, which helped me achieve my goal of getting into IIT Hyderabad.",
  },
  {
    name: "Madhav Kakani",
    result: "GS Mumbai · NEET 2025 · 582",
    quote:
      "The journey to NEET was long and tough, but KCP made it smooth for me. Every concept was taught with such clarity, and we had doubt-solving sessions that cleared even the tiniest confusion. The environment was always peaceful, and the stress-management tips really helped during the last few weeks. Because of KCP, I got one of the best, G.S. - Grant Govt. Medical College Mumbai.",
  },
  {
    name: "Soham Kumbhar",
    result: "NIT Raipur · CET 2025",
    quote:
      "Kishor Career Point gave me a strong academic foundation and a disciplined study approach. The faculty's guidance and constant motivation helped me secure admission to NIT Raipur.",
  },
  {
    name: "Atharav Divate",
    result: "MHT-CET · 99.96 percentile",
    quote:
      "KCP taught me discipline, consistency, and smart exam strategies. The faculty's encouragement and guidance helped me to face MHT-CET with confidence.",
  },
];
