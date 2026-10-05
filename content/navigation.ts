import { site } from "@/content/site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  /** Small green tag shown above the label in the top bar. */
  badge?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results", badge: "New" },
  { label: "Branches", href: "/branches" },
  { label: "Contact Us", href: "/contact-us" },
];

export const secondaryNav: NavItem[] = [
  { label: "Careers", href: "/careers" },
  {
    label: "Olympiad",
    href: "https://www.kishorolympiadschool.com/",
    external: true,
  },
];

export type FooterColumn = {
  heading: string;
  links: NavItem[];
};

/** Link columns in the footer. Branch phone numbers come from content/branches.ts. */
export const footerColumns: FooterColumn[] = [
  {
    heading: "About us",
    links: [
      { label: "About KCP", href: "/about-us" },
      { label: "Our Branches", href: "/branches" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Courses",
    links: [
      { label: "JEE (Main + Advanced)", href: "/courses#jee" },
      { label: "NEET (UG)", href: "/courses#neet" },
      { label: "Foundation (8th–10th)", href: "/courses#foundation" },
      { label: "Olympiad School", href: site.olympiadUrl, external: true },
      { label: "Talent Hunt Exam", href: site.talentHuntUrl, external: true },
      { label: "Download Brochure", href: site.brochureUrl, external: true },
    ],
  },
];
