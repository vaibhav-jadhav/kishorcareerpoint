export type Branch = {
  id: string;
  name: string;
  /** Short name for the small tags on the home page map, when the full name is long. */
  mapName?: string;
  isMain: boolean;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  /** Photo of KCP's own building. Only set for branches KCP owns; rented branches have none. */
  image?: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  /** Used to place the branch on the home page map. */
  lat: number;
  lng: number;
  /** Where the pin is drawn on the home page map, when it differs from the real location. */
  mapLat?: number;
  mapLng?: number;
};

export const branchesIntro =
  "Kishor Career Point (KCP) is centered in Ichalkaranji, which serves as our main branch and administrative hub. In addition to Ichalkaranji, KCP has branches at Tekit Mall Ichalkaranji, Kolhapur, Sangli, Karad, and Hatkanangale, each providing the same high-quality coaching, experienced faculty, and student-focused support. Contact your nearest branch for course details, schedules, and admissions information.";

export const otherBranchesIntro =
  "In addition to our main branch in Ichalkaranji, we have branches at Tekit Mall Ichalkaranji, Kolhapur, Sangli, Karad, and Hatkanangale. Each location offers the same high-quality coaching and support.";

export const branches: Branch[] = [
  {
    id: "ichalkaranji",
    name: "Ichalkaranji",
    isMain: true,
    address:
      "Ring Road, near Niramay Hospital Road, Rajwada, Ichalkaranji, Maharashtra 416115",
    phone: "9370145659",
    phoneDisplay: "93 7014 5659",
    email: "contact@kishorcareerpoint.com",
    image: "/building/ichalkaranji.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7558682284016!2d74.46779717580075!3d16.689095722544565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e273f9c92a37%3A0xe779a417ba4465d5!2sKishor%20Career%20Point!5e0!3m2!1sen!2sin!4v1765048151678!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16.688901122541733,74.47085036378876",
    lat: 16.6889,
    lng: 74.4709,
  },
  {
    id: "tekit-mall",
    name: "Tekit Mall Ichalkaranji",
    mapName: "Tekit Mall",
    isMain: false,
    address: "Tekit Mall, Panchvati Talkies Road, Tambe Mala, Ichalkaranji, Maharashtra 416115",
    // Same number as the main centre until this branch has its own line.
    phone: "9370145659",
    phoneDisplay: "93 7014 5659",
    email: "contact@kishorcareerpoint.com",
    mapEmbedUrl: "https://www.google.com/maps?q=16.6890198,74.4537751&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16.6890198,74.4537751",
    lat: 16.6890198,
    lng: 74.4537751,
    // About 2 km from the main centre, so the schematic home page map draws it a little
    // further west to keep the two pins apart. Directions use the real location.
    mapLat: 16.689,
    mapLng: 74.407,
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    isMain: false,
    address:
      "6th Ln, opposite shriram high school, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416008",
    phone: "9172605112",
    phoneDisplay: "91 7260 5112",
    email: "contact@kishorcareerpoint.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6440243901416!2d74.2390111758009!3d16.694687622389388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101e93c2b53c3%3A0x125da80c277fbc19!2sKishor%20Career%20Point%20(KCP)%20Kolhapur!5e0!3m2!1sen!2sin!4v1765048442134!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16.694692096226365,74.2415405761218",
    lat: 16.6947,
    lng: 74.2415,
  },
  {
    id: "sangli",
    name: "Sangli",
    isMain: false,
    address:
      "D-Mart to Ushahkal Abhinav Hospital Road, Sangli, Maharashtra 416416",
    phone: "8483055112",
    phoneDisplay: "84 8305 5112",
    email: "contact@kishorcareerpoint.com",
    image: "/building/sangli.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.808071404551!2d74.5727447758029!3d16.83587491845758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12326dd50a4f5%3A0xa3d1d9fd58e65985!2sKishor%20Career%20Point%20(KCP)!5e0!3m2!1sen!2sin!4v1765048528335!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16.835893139392685,74.57523019280691",
    lat: 16.8359,
    lng: 74.5752,
  },
  {
    id: "karad",
    name: "Karad",
    isMain: false,
    address:
      "Krishna Naka, near Swimming Pool, Ranjeet Nagar, Rukmini Nagar, Karad, Maharashtra 415110",
    phone: "9767305112",
    phoneDisplay: "97 6730 5112",
    email: "contact@kishorcareerpoint.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.480303303446!2d74.18548907580949!3d17.292360005534444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc18238a901ae9f%3A0x659a60d35c86542f!2sKISHOR%20CAREER%20POINT!5e0!3m2!1sen!2sin!4v1765048581423!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=17.292342258502195,74.18808780744061",
    lat: 17.2923,
    lng: 74.1881,
    // The home page map is schematic: the Karad pin is drawn near Urun-Islampur so it sits
    // close to the other branches. Directions and the address still use the real Karad location.
    mapLat: 17.0447,
    mapLng: 74.265,
  },
  {
    id: "hatkanangale",
    name: "Hatkanangale",
    isMain: false,
    address: "Hatkanangale, Maharashtra 416109",
    phone: "8180865112",
    phoneDisplay: "81 8086 5112",
    email: "contact@kishorcareerpoint.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282.281911146061!2d74.41863965506931!3d16.74826988368148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11cf665edc157%3A0x7337074c4cff0417!2sHatkanangale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1765048624168!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16.7483,74.4186",
    lat: 16.7483,
    lng: 74.4186,
  },
];

export const branchMapContent = {
  eyebrow: "Find us near you",
  heading: "5+ branches across Western Maharashtra",
  lead: "Ichalkaranji · Tekit Mall Ichalkaranji · Kolhapur · Sangli · Karad · Hatkanangale",
  mainBadge: "Main centre",
  mapNote: "Use Directions for the exact route.",
};

export function getMainBranch() {
  const main = branches.find((branch) => branch.isMain);
  if (!main) {
    throw new Error("Main branch is missing from content/branches.ts");
  }
  return main;
}
