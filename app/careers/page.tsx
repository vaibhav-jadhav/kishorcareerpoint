import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { careers, openings } from "@/content/careers";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.intro,
};

export default function CareersPage() {
  return (
    <>
      <PageHero title={careers.title} description={careers.intro} />
      <Container className="py-14 sm:py-16">
        {openings.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-line bg-surface px-6 py-12 text-center sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Hiring</p>
            <h2 className="mt-3 text-3xl font-semibold">{careers.emptyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">{careers.emptyBody}</p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">{careers.futureNote}</p>
            <a
              href={`mailto:${site.email}?subject=Future%20role%20at%20Kishor%20Career%20Point`}
              className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              {site.email}
            </a>
          </div>
        ) : (
          <ul className="grid gap-4">
            {openings.map((role) => (
              <li key={role.id} className="rounded-3xl border border-line p-6">
                <h2 className="text-2xl font-semibold">{role.title}</h2>
                <p className="mt-1 text-sm font-semibold text-brand">{role.location}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{role.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
