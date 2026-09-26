import type { Metadata } from "next";
import { about } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: about.short,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" description="About Kishor Career Point" />
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl space-y-5 text-base leading-7 text-ink/90">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-surface p-7">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{about.mission}</p>
          </article>
          <article className="rounded-3xl bg-brand-dark p-7 text-white">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-sm leading-7 text-white/80">{about.vision}</p>
          </article>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Core Values</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value) => (
            <li
              key={value}
              className="rounded-2xl border border-line px-4 py-4 text-sm font-semibold"
            >
              {value}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
