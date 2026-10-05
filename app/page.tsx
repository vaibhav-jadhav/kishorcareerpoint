import type { Metadata } from "next";
import { CourseSection } from "@/components/home/CourseSection";
import { GoalSelector } from "@/components/home/GoalSelector";
import { JourneySection } from "@/components/home/JourneySection";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { RecordSection } from "@/components/home/RecordSection";
import { TestimonialList } from "@/components/home/TestimonialSection";

import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ ...seo.home, path: "/" }),
  title: { absolute: seo.home.title },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <GoalSelector />
      <CourseSection />
      <JourneySection />
      <RecordSection />
      <TestimonialList />
    </>
  );
}
