export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Branches", href: "/branches" },
  { label: "Contact Us", href: "/contact-us" },
];

export const secondaryNav: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  {
    label: "Olympiad",
    href: "https://www.kishorolympiadschool.com/",
    external: true,
  },
];

export const footerLinks: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Branches", href: "/branches" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];
