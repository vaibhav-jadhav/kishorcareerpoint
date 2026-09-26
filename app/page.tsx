import {
  CourseGrid,
  EnquiryBand,
  Hero,
  NewsPreview,
  RankerGrid,
  TestimonialList,
  WhyUs,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseGrid />
      <WhyUs />
      <RankerGrid />
      <TestimonialList />
      <NewsPreview />
      <EnquiryBand />
    </>
  );
}
