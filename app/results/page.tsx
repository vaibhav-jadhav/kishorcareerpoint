import type { Metadata } from "next";
import { RankerGrid } from "@/components/home/HomeSections";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { rankersIntro, resultHighlights } from "@/content/rankers";

export const metadata: Metadata = {
  title: "Results",
  description: rankersIntro,
};

export default function ResultsPage() {
  return (
    <>
      <PageHero title="Results" description={rankersIntro} />
      <Container className="py-14">
        <h2 className="text-2xl font-semibold">Achievement highlights</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resultHighlights.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-line bg-surface px-5 py-5 text-base font-semibold"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </Container>
      <RankerGrid />
    </>
  );
}
