export const site = {
  name: "Kishor Career Point",
  shortName: "KCP",
  url: "https://www.kishorcareerpoint.com",
  description:
    "KCP - Kishor Career Point - Leading Coaching Institute for JEE, NEET, Olympiad and MHT-CET Preparation in Maharashtra, India.",
  tagline:
    "Empowering aspirants to become future IITians & Doctors",
  heroSupport:
    "Shaping paths for tomorrow's innovators and healers, Empowering excellence through world-class education.",
  email: "contact@kishorcareerpoint.com",
  phone: "9370145659",
  phoneDisplay: "9370145659",
  whatsappUrl:
    "https://wa.me/919370145659?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Kishor%20Career%20point%20Academy.",
  talentHuntUrl: "https://forms.gle/G8DAo3F4eF56ZEwP8",
  olympiadUrl: "https://www.kishorolympiadschool.com/",
  addressShort: "Near Niramay Hospital, Ring Road, Ichalkaranji.",
  addressLines: ["Near Niramay Hospital", "Ring Road", "Ichalkaranji - 416115"],
  footerBlurb:
    "Empowering students with commitment, excellence, and innovation to help them succeed in their academic journey.",
  establishedYear: 2016,
  selectedStudentsLabel: "2000+",
  social: {
    facebook: "https://www.facebook.com/kishorcareerpoint/",
    instagram: "https://www.instagram.com/kishorcareerpoint/",
    youtube: "https://www.youtube.com/@kishorcareerpointiitmedica853",
  },
  headquartersMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7558682284016!2d74.46779717580075!3d16.689095722544565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e273f9c92a37%3A0xe779a417ba4465d5!2sKishor%20Career%20Point!5e0!3m2!1sen!2sin!4v1761987522573!5m2!1sen!2sin",
} as const;

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const local = digits.length > 10 ? digits.slice(-10) : digits;
  return `tel:+91${local}`;
}
