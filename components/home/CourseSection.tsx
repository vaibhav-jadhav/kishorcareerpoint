import Link from "next/link";
import type { JSX } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { courses, coursesIntro } from "@/content/courses";
import type { Course } from "@/content/courses";
import { site, whatsappLink } from "@/content/site";

/** Animated line-art badges. Pure SVG + CSS, so there is nothing extra to download. */
function AtomIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <g className="anim-spin-slow" stroke="#005aaa" strokeWidth="2">
        <ellipse cx="24" cy="24" rx="19" ry="7.5" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(120 24 24)" />
        <circle cx="43" cy="24" r="2.6" fill="#ffc20e" stroke="none" />
        <circle cx="14.5" cy="40.5" r="2.6" fill="#ffc20e" stroke="none" />
        <circle cx="14.5" cy="7.5" r="2.6" fill="#ffc20e" stroke="none" />
      </g>
      <circle cx="24" cy="24" r="4.2" fill="#e4570e" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        className="anim-pulse"
        d="M24 41C10 31 5 24 5 16.5 5 11 9 7 14 7c4 0 8 2.6 10 6.2C26 9.600 30 7 34 7c5 0 9 4 9 9.500C43 24 38 31 24 41z"
        fill="#e4570e"
      />
      <path
        className="anim-ecg"
        d="M3 25h11l4-9 6 17 4-10 3 4h14"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <circle className="anim-twinkle" cx="8" cy="10" r="1.8" fill="#ffc20e" />
      <circle
        className="anim-twinkle"
        style={{ animationDelay: "0.8s" }}
        cx="40"
        cy="14"
        r="1.6"
        fill="#005aaa"
      />
      <circle
        className="anim-twinkle"
        style={{ animationDelay: "1.4s" }}
        cx="38"
        cy="36"
        r="1.4"
        fill="#ffc20e"
      />
      <g className="anim-float">
        <path d="M17 28l-6 8 8-2zM31 28l6 8-8-2z" fill="#1aa14a" />
        <path
          d="M24 4c-5 4-8 10-8 17v14h16V21c0-7-3-13-8-17z"
          fill="#ffffff"
          stroke="#04284a"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M24 4c-3 2-5 5.200-6 8h12c-1-2.800-3-6-6-8z" fill="#e4570e" />
        <circle cx="24" cy="22" r="4.200" fill="#4aa8f0" stroke="#04284a" strokeWidth="1.800" />
        <path className="anim-flame" d="M20.500 36h7L24 45z" fill="#ffc20e" />
      </g>
    </svg>
  );
}

export type Accent = {
  bar: string;
  chip: string;
  gradient: string;
  /** Large heading and small line shown on the banner, same wording as the course name. */
  title: string;
  subtitle: string;
  glyphs: string[];
  Icon: () => JSX.Element;
};

export const courseAccents: Record<string, Accent> = {
  jee: {
    bar: "bg-brand",
    chip: "text-brand",
    gradient: "from-[#0a74cf] via-brand to-brand-dark",
    title: "JEE",
    subtitle: "Main + Advanced",
    glyphs: ["π", "∑", "√", "∫"],
    Icon: AtomIcon,
  },
  neet: {
    bar: "bg-accent",
    chip: "text-accent",
    gradient: "from-[#f97316] via-accent to-[#a8380a]",
    title: "NEET",
    subtitle: "(UG)",
    glyphs: ["+", "○", "+", "○"],
    Icon: HeartIcon,
  },
  foundation: {
    bar: "bg-tag",
    chip: "text-tag",
    gradient: "from-[#25b95f] via-tag to-[#0d6b30]",
    title: "Foundation",
    subtitle: "8th – 10th",
    glyphs: ["★", "A", "★", "B"],
    Icon: RocketIcon,
  },
};

export function CourseBanner({
  accent,
  heightClass = "h-40",
}: {
  accent: Accent;
  heightClass?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${heightClass} bg-gradient-to-br ${accent.gradient} text-white`}
      aria-hidden="true"
    >
      {/* Dot grid and soft rings give the flat colour some depth. */}
      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1.2px,transparent_1.4px)] [background-size:18px_18px] opacity-60" />
      <span className="absolute -right-10 -top-12 h-44 w-44 rounded-full border-[22px] border-white/10 transition-transform duration-700 group-hover:scale-110" />
      <span className="absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />
      {accent.glyphs.map((glyph, i) => (
        <span
          key={`${glyph}-${i}`}
          className="anim-float absolute font-bold text-white/30"
          style={{
            right: `${10 + (i % 2) * 22 + i * 4}%`,
            top: `${14 + ((i * 29) % 58)}%`,
            fontSize: `${22 + (i % 3) * 8}px`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {glyph}
        </span>
      ))}
      <span
        className="anim-sweep pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/25"
        style={{ transform: "translateX(-120%) skewX(-18deg)" }}
      />
      <div className="relative flex h-full flex-col justify-center px-5 pb-6">
        <p className="text-4xl font-extrabold leading-none tracking-tight drop-shadow-sm sm:text-[2.6rem]">
          {accent.title}
        </p>
        <p className="mt-2 text-sm font-semibold text-white/90">{accent.subtitle}</p>
      </div>
    </div>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const accent = courseAccents[course.id] ?? courseAccents.jee;
  const Icon = accent.Icon;
  const enquiry = whatsappLink(
    `Hello ${site.name}, I would like to know more about the ${course.name} course.`,
  );

  return (
    <Reveal delay={index * 120} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_18px_-10px_rgba(4,40,74,0.25)] transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_22px_44px_-18px_rgba(0,90,170,0.45)]">
        <span className={`absolute inset-x-0 top-0 z-10 h-1 ${accent.bar}`} aria-hidden="true" />

        <CourseBanner accent={accent} />

        <div className="relative flex flex-1 flex-col px-5 pb-5 pt-10">
          <span
            className="anim-float-slow absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_8px_20px_-8px_rgba(4,40,74,0.45)] ring-4 ring-white"
            aria-hidden="true"
          >
            <Icon />
          </span>
          <span
            className={`absolute right-5 top-3 text-4xl font-extrabold leading-none opacity-15 ${accent.chip}`}
            aria-hidden="true"
          >
            0{index + 1}
          </span>

          <h3 className="text-xl font-bold leading-snug text-ink">{course.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{course.summary}</p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand after:absolute after:inset-0 after:content-['']"
            >
              View course
              <span className="sr-only"> {course.name}</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </Link>
            <a
              href={enquiry}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 rounded-lg border border-line px-3 py-1.5 text-xs font-bold text-ink transition hover:border-tag hover:bg-tag hover:text-white"
            >
              Ask on WhatsApp
              <span className="sr-only"> about {course.name}</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function CourseSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-20" aria-labelledby="courses-heading">
      {/* Soft drifting shapes behind the cards */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="anim-float-slow absolute -left-16 top-10 h-56 w-56 rounded-full bg-brand/5" />
        <span
          className="anim-float-slow absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-sun/15"
          style={{ animationDelay: "2s" }}
        />
        <span className="anim-float absolute left-[12%] top-24 hidden text-3xl font-bold text-brand/15 md:block">
          +
        </span>
        <span
          className="anim-float absolute right-[14%] top-16 hidden text-2xl font-bold text-accent/20 md:block"
          style={{ animationDelay: "1.5s" }}
        >
          ×
        </span>
        <span
          className="anim-float absolute bottom-24 left-[8%] hidden h-3 w-3 rounded-full bg-sun/50 md:block"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sun" aria-hidden="true" />
            What we offer
          </p>
          <h2
            id="courses-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Our <span className="text-brand">Courses</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{coursesIntro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {courses.map((course, index) => (
            <li key={course.id}>
              <CourseCard course={course} index={index} />
            </li>
          ))}
        </ul>

        <Reveal delay={200} className="mt-10 text-center">
          <Button href="/courses" className="rounded-lg px-7 py-3">
            All courses
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
