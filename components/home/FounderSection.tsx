import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/about";

export function FounderSection() {
  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="founder-heading">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 sm:flex-row sm:gap-12 sm:px-6">
        <Reveal from="left" className="shrink-0">
          <div className="relative">
            <span
              className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-2xl bg-sun"
              aria-hidden="true"
            />
            <Image
              src="/about/owner.jpg"
              alt="Owner of Kishor Career Point"
              width={656}
              height={900}
              sizes="(min-width: 640px) 224px, 192px"
              className="relative aspect-[4/5] w-48 rounded-2xl border-[3px] border-white bg-[#efe9dd] object-cover object-top shadow-lg sm:w-56"
            />
          </div>
        </Reveal>

        <Reveal from="right" className="text-center sm:text-left">
          <h2
            id="founder-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl"
          >
            {about.heading}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-sun sm:mx-0" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">{about.mission}</p>
          <div className="mt-5">
            <Button href="/about-us" variant="primary">
              Know more about us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
