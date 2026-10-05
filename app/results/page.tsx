import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import { ResultsExplorer } from "@/components/results/ResultsExplorer";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { rankersIntro } from "@/content/rankers";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({ ...seo.results, path: "/results" });

export default function ResultsPage() {
  return (
    <>
      <PageHero title="Results" description={rankersIntro} />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <ResultsExplorer />
        </Container>
      </section>
      <CtaBand
        title="Be our next topper"
        body="Join the students who turned steady preparation into top ranks. Talk to us about the right batch for you."
        whatsappMessage={`Hello ${site.name}, I would like to know about admission to the next batch.`}
      />
    </>
  );
}
