import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { introContent } from "@/content/home";
import { site } from "@/content/site";

export function IntroSection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark py-6 text-white sm:py-8"
      aria-labelledby="intro-heading"
    >
      {/* Soft rings and a dot grid add depth to the flat blue. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1.2px,transparent_1.4px)] [background-size:22px_22px] opacity-60" />
        <span className="absolute -left-20 -top-24 h-64 w-64 rounded-full border-[28px] border-white/5" />
        <span className="absolute -bottom-24 right-[18%] h-56 w-56 rounded-full bg-white/5" />
        <span className="absolute right-[8%] top-6 h-16 w-16 rounded-full bg-sun/20" />
      </div>

      <div className="relative mx-auto flex max-w-4xl items-center justify-between gap-5 px-5 sm:gap-12 sm:px-6">
        <Reveal from="up" className="min-w-0 flex-1">
          <h1 id="intro-heading">
            <span className="inline-block rounded-lg bg-sun px-4 py-1.5 text-xl font-extrabold tracking-tight text-brand-dark shadow-[0_6px_16px_-8px_rgba(0,0,0,0.5)] sm:text-2xl">
              {site.name}
            </span>
            <span className="mt-4 block text-xl font-extrabold leading-snug tracking-tight sm:text-3xl">
              {introContent.tagline}
            </span>
          </h1>
          <span className="mt-3 block h-1 w-14 rounded-full bg-sun" aria-hidden="true" />
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            {introContent.support}
          </p>
        </Reveal>

        <Reveal from="up" delay={120} className="shrink-0">
          <div className="relative">
            <span
              className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl bg-sun"
              aria-hidden="true"
            />
            <Image
              src="/about/owner.jpg"
              alt="Owner of Kishor Career Point"
              width={656}
              height={900}
              sizes="(min-width: 640px) 144px, 104px"
              priority
              className="relative aspect-[4/5] w-[6.5rem] rounded-2xl border-[3px] border-white bg-[#efe9dd] object-cover object-top shadow-lg sm:w-36"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
