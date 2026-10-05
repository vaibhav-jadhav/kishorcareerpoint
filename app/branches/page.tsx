import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import { BranchList } from "@/components/branches/BranchList";
import { BranchesHero } from "@/components/branches/BranchesHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata({ ...seo.branches, path: "/branches" });

export default function BranchesPage() {
  return (
    <>
      <BranchesHero />
      <section className="bg-surface py-12 sm:py-14" aria-labelledby="all-branches-heading">
        <Container>
          <h2
            id="all-branches-heading"
            className="mb-6 text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl"
          >
            All <span className="text-brand">branches</span>
          </h2>
          <BranchList />
        </Container>
      </section>
    </>
  );
}
