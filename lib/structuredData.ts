import { branches } from "@/content/branches";
import { courses } from "@/content/courses";
import { site } from "@/content/site";

const orgId = `${site.url}/#organization`;

function branchAddress(name: string, address: string) {
  return {
    "@type": "PostalAddress",
    streetAddress: address,
    addressLocality: name,
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  };
}

/** Institute plus every branch, so search engines can show each location. */
export function organizationSchema() {
  const main = branches.find((branch) => branch.isMain) ?? branches[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        logo: `${site.url}/brand/logo.png`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        foundingDate: String(site.establishedYear),
        email: site.email,
        telephone: `+91${site.phone}`,
        address: branchAddress(main.name, main.address),
        sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
        areaServed: branches.map((branch) => branch.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Courses",
          itemListElement: courses.map((course) => ({
            "@type": "Course",
            name: course.name,
            description: course.summary,
            provider: { "@id": orgId },
          })),
        },
      },
      ...branches.map((branch) => ({
        "@type": "EducationalOrganization",
        "@id": `${site.url}/branches#${branch.id}`,
        name: `${site.name}, ${branch.name}`,
        parentOrganization: { "@id": orgId },
        url: `${site.url}/branches#${branch.id}`,
        telephone: `+91${branch.phone}`,
        email: branch.email,
        address: branchAddress(branch.name, branch.address),
        hasMap: branch.directionsUrl,
      })),
    ],
  };
}
