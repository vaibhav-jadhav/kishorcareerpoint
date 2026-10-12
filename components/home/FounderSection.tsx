import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { founderMessage } from "@/content/home";

/**
 * Founder message as a photo banner. The whole photo is shown, with him on the
 * right; the left side of the photo turns transparent over a blurred, tinted
 * copy of itself, and the text sits there. On phones the photo sits on top and
 * its bottom edge fades into the text.
 */
export function FounderSection() {
  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="founder-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal from="up">
          <div className="relative isolate overflow-hidden rounded-3xl bg-brand-dark">
            {/* Blurred copy of the photo fills the card behind everything. */}
            <Image
              src="/about/founder-wide.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="400px"
              className="-z-20 scale-125 object-cover object-top blur-2xl"
            />
            <span className="absolute inset-0 -z-10 bg-brand-dark/75" aria-hidden="true" />

            {/* Sharp photo, fading out towards the text. */}
            <div className="founder-fade absolute inset-x-0 top-0 aspect-[2170/1382] md:inset-x-auto md:right-0 md:h-full md:w-auto md:aspect-[2170/1382]">
              <Image
                src="/about/founder-wide.jpg"
                alt={`${founderMessage.name}, ${founderMessage.role} of Kishor Career Point`}
                fill
                sizes="(min-width: 768px) 570px, 100vw"
                className="object-cover object-right"
              />
            </div>

            <div className="relative px-6 pb-7 pt-[calc((100vw-2rem)/1.5695+1rem)] text-white sm:pt-[calc((100vw-3rem)/1.5695+1rem)] md:flex md:min-h-[21rem] md:items-center md:px-10 md:py-7">
              <div className="md:w-[25rem]">
                <h2
                  id="founder-heading"
                  className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl"
                >
                  {founderMessage.heading}
                </h2>
                <span className="mt-4 block h-1 w-14 rounded-full bg-sun" aria-hidden="true" />
                <p className="mt-3 text-sm leading-6 text-white/90">{founderMessage.text}</p>
                <p className="mt-4 text-base font-extrabold">
                  {founderMessage.name}
                  <span className="block text-sm font-semibold text-white/75">{founderMessage.role}</span>
                </p>
                <div className="mt-4">
                  <Button href="/about-us" variant="sun">
                    Know more about us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
