import type { Metadata } from "next";
import { courses, coursesPageIntro } from "@/content/courses";
import { TestimonialList } from "@/components/home/HomeSections";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Courses",
  description: coursesPageIntro,
};

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Courses" />
      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Kishor Career Point</h2>
          <p className="mt-4 text-base leading-7 text-muted">{coursesPageIntro}</p>
        </div>
        <ul className="mt-10 grid gap-5">
          {courses.map((course) => (
            <li key={course.id} id={course.id} className="rounded-3xl border border-line p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">{course.name}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{course.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
      <TestimonialList />
    </>
  );
}
