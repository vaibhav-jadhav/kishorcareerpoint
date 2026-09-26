export type Opening = {
  id: string;
  title: string;
  location: string;
  summary: string;
};

export const openings: Opening[] = [];

export const careers = {
  title: "Careers",
  intro:
    "Kishor Career Point hires faculty and staff who care about students and the craft of teaching. Open roles are listed on this page when we are hiring.",
  emptyTitle: "No openings right now",
  emptyBody:
    "We are not hiring at the moment. When a role opens, it will be posted here with the branch, subject, and how to apply.",
  futureNote:
    "If you would like us to keep your profile for a future role, email your résumé to the address below.",
} as const;
