import Image from "next/image";
import Link from "next/link";
import { about, skills, whyUs } from "@/content/about";
import { blogIntro, formatPostDate, posts } from "@/content/blog";
import { courses, coursesIntro } from "@/content/courses";
import { rankers, rankersIntro } from "@/content/rankers";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { enquiryCopy } from "@/content/about";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,161,14,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(0,90,170,0.45),transparent_42%)]" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Maharashtra · Since {site.establishedYear}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium leading-snug text-white sm:text-2xl">
            Empowering aspirants to become future{" "}
            <span className="text-gold">IITians & Doctors</span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
            {site.heroSupport}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.talentHuntUrl} external variant="accent">
              Talent Hunt Exam 2025
            </Button>
            <Button href="/contact-us" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
        <aside className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <p className="text-sm font-semibold text-gold">At a glance</p>
          <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat value={String(site.establishedYear)} label="Established" />
            <Stat value={site.selectedStudentsLabel} label="Selections" />
            <Stat value="5" label="Branches" />
          </dl>
          <p className="mt-6 text-sm leading-6 text-white/75">{about.short}</p>
          <Link href="/about-us" className="mt-4 inline-block text-sm font-semibold text-white underline">
            About KCP
          </Link>
        </aside>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 px-2 py-4">
      <dt className="text-xs text-white/70">{label}</dt>
      <dd className="mt-1 text-lg font-bold">{value}</dd>
    </div>
  );
}

export function CourseGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="What we offer" title="Our Courses" body={coursesIntro} />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {courses.map((course, index) => (
            <li key={course.id}>
              <Link
                href="/courses"
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  width={393}
                  height={205}
                  className="h-auto w-full"
                />
                <span className="px-6 pt-6 text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-3 px-6 text-xl font-semibold">{course.name}</h3>
                <p className="mt-3 flex-1 px-6 text-sm leading-6 text-muted">{course.summary}</p>
                <span className="mt-5 px-6 pb-6 text-sm font-semibold text-brand">View course</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Button href="/courses">All courses</Button>
        </div>
      </Container>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why us"
            title={whyUs.title}
            body={whyUs.intro}
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {whyUs.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-ink">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-brand-dark p-8 text-white">
          <h3 className="text-2xl font-semibold leading-snug">{skills.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/75">{skills.intro}</p>
          <ul className="mt-8 space-y-5">
            {skills.items.map((item) => (
              <li key={item.label}>
                <div className="flex items-baseline justify-between text-sm font-semibold">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/15">
                  <div
                    className="h-1.5 rounded-full bg-gold"
                    style={{ width: item.value }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function RankerGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Top achievers" title="Our Top Rankers" body={rankersIntro} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rankers.map((student) => (
            <li key={student.name}>
              <Link
                href="/results"
                className="block h-full overflow-hidden rounded-3xl border border-line bg-white"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={352}
                  height={333}
                  className="h-auto w-full bg-[#ece8f4]"
                />
                <div className="p-6">
                <p className="text-lg font-semibold text-ink">{student.name}</p>
                {student.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-muted">
                    {line}
                  </p>
                ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function TestimonialList() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Students Say" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={item.name} className="rounded-3xl bg-surface p-7">
              <p className="text-base leading-7 text-ink">“{item.quote}”</p>
              <p className="mt-5 font-semibold">{item.name}</p>
              <p className="text-sm text-muted">{item.place}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function NewsPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="The blog" title="Our Recent News" body={blogIntro} />
        <ul className="mt-10 grid gap-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-3xl border border-line bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  {post.category} · {formatPostDate(post.updatedAt)}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{post.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">Read article</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function EnquiryBand() {
  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={enquiryCopy.eyebrow}
            title={enquiryCopy.title}
            body={enquiryCopy.body}
            align="left"
            tone="dark"
          />
        </div>
        <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
