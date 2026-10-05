import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { careers, openings } from "@/content/careers";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({ ...seo.careers, path: "/careers" });

export default function CareersPage() {
  return (
    <>
      <PageHero title={careers.title} description={careers.intro} />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          {openings.length === 0 ? (
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand/10 bg-white px-6 py-10 text-center shadow-[0_8px_28px_-18px_rgba(4,40,74,0.35)] sm:px-12 sm:py-12">
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sun/25"
                aria-hidden="true"
              />
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-7 w-7"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2.500" />
                  <path d="M9 7V5.500A1.500 1.500 0 0 1 10.500 4h3A1.500 1.500 0 0 1 15 5.500V7M3 13h18" />
                </svg>
              </span>
              <h2 className="relative mt-4 text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl">
                {careers.emptyTitle}
              </h2>
              <p className="relative mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
                {careers.emptyBody}
              </p>
              <p className="relative mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
                {careers.futureNote}
              </p>
              <a
                href={`mailto:${site.email}?subject=Future%20role%20at%20Kishor%20Career%20Point`}
                className="relative mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-dark"
              >
                {site.email}
              </a>
            </div>
          ) : (
            <ul className="grid gap-4">
              {openings.map((role) => (
                <li
                  key={role.id}
                  className="rounded-2xl border border-line bg-white p-6 transition hover:border-brand/30 hover:shadow-[0_16px_32px_-18px_rgba(0,90,170,0.4)]"
                >
                  <h2 className="text-xl font-extrabold text-brand-dark">{role.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-brand">{role.location}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{role.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
