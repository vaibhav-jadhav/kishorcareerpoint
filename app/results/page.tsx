import type { Metadata } from "next";
import Image from "next/image";
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
        <h2 className="sr-only">Achievement highlights</h2>
        <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {resultHighlights.map((item) => (
            <li key={item.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
                {item.title}
              </h3>
              <a href={item.image} target="_blank" rel="noreferrer" className="mt-3 block">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="h-auto w-full rounded-2xl border border-line"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <RankerGrid />
    </>
  );
}
