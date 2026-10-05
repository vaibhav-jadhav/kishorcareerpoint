import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import { CourseBanner, courseAccents } from "@/components/home/CourseSection";
import { TestimonialList } from "@/components/home/TestimonialSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { courses, coursesPageIntro } from "@/content/courses";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = pageMetadata({ ...seo.courses, path: "/courses" });

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Courses" heading="Courses at Kishor Career Point" />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Kishor Career <span className="text-brand">Point</span>
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{coursesPageIntro}</p>
          </Reveal>

          <ul className="mt-10 grid gap-6">
            {courses.map((course, index) => {
              const accent = courseAccents[course.id] ?? courseAccents.jee;
              const Icon = accent.Icon;
              const flip = index % 2 === 1;
              return (
                <li key={course.id} id={course.id} className="scroll-mt-28">
                  <Reveal delay={index * 80}>
                    <article className="group relative grid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_18px_-10px_rgba(4,40,74,0.25)] transition duration-300 hover:shadow-[0_22px_44px_-18px_rgba(0,90,170,0.4)] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                      <span
                        className={`absolute inset-x-0 top-0 z-10 h-1 md:inset-y-0 md:left-0 md:right-auto md:h-auto md:w-1 ${accent.bar} ${flip ? "md:left-auto md:right-0" : ""}`}
                        aria-hidden="true"
                      />
                      <div className={flip ? "md:order-2" : ""}>
                        <CourseBanner accent={accent} heightClass="h-44 md:h-full md:min-h-64" />
                      </div>
                      <div className="relative flex flex-col justify-center p-6 sm:p-8">
                        <span
                          className="anim-float-slow mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky p-2"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                        <span
                          className={`absolute right-6 top-5 text-5xl font-extrabold leading-none opacity-10 ${accent.chip}`}
                          aria-hidden="true"
                        >
                          0{index + 1}
                        </span>
                        <h3 className="text-2xl font-extrabold tracking-tight text-brand-dark">
                          {course.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                          {course.summary}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button
                            href={whatsappLink(
                              `Hello ${site.name}, I would like to know more about the ${course.name} course.`,
                            )}
                            external
                            variant="primary"
                          >
                            Enquire on WhatsApp
                          </Button>
                          <Button href="/branches" variant="outline">
                            Find a branch
                          </Button>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <TestimonialList />
      <CtaBand
        title="Not sure which course fits you?"
        body="Talk to our counsellors. Tell us the class and the exam you are aiming for and we will guide you."
        whatsappMessage={`Hello ${site.name}, I need help choosing the right course.`}
      />
    </>
  );
}
