import type { Metadata } from "next";
import { BranchList } from "@/components/branches/BranchList";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { branchesIntro } from "@/content/branches";

export const metadata: Metadata = {
  title: "Branches",
  description: branchesIntro,
};

export default function BranchesPage() {
  return (
    <>
      <PageHero title="Branches" description={branchesIntro} />
      <Container className="py-14 sm:py-16">
        <h2 className="mb-8 text-3xl font-semibold">Our Branches</h2>
        <BranchList />
      </Container>
    </>
  );
}
