import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "@/content/home";
import { site } from "@/content/site";

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8" aria-labelledby="intro-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -left-24 -top-10 h-48 w-48 rounded-full bg-sky" />
        <span className="absolute -bottom-10 right-1/3 h-28 w-28 rounded-full bg-sun/15" />
      </div>

      <div className="relative mx-auto flex max-w-4xl items-center justify-between gap-5 px-5 sm:gap-10 sm:px-6">
        <Reveal from="up" className="min-w-0 flex-1">
          <h2
            id="intro-heading"
            className="inline-block rounded-lg bg-brand px-4 py-1.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl"
          >
            {site.name}
          </h2>
          <p className="mt-3 text-base font-bold leading-snug text-brand-dark sm:text-xl">
            {heroContent.headline}{" "}
            <span className="underline decoration-sun decoration-[3px] underline-offset-4">
              {heroContent.headlineAccent}
            </span>
          </p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{site.heroSupport}</p>
        </Reveal>

        <Reveal from="up" delay={120} className="shrink-0">
          <div className="relative">
            <span
              className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-2xl bg-gradient-to-br from-brand to-brand-dark"
              aria-hidden="true"
            />
            <Image
              src="/about/owner.jpg"
              alt="Owner of Kishor Career Point"
              width={656}
              height={900}
              sizes="(min-width: 640px) 144px, 104px"
              priority
              className="relative aspect-[4/5] w-[6.5rem] rounded-2xl border-2 border-white bg-[#efe9dd] object-cover object-top shadow-md sm:w-36"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
