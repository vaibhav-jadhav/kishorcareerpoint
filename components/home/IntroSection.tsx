import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * Name tag above the hero. It shares the hero's background and width so the
 * two read as one block instead of two stacked bands.
 */
export function IntroSection() {
  return (
    <section className="bg-sky pt-5 sm:pt-6" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-[59.5rem] px-4 sm:px-6">
        <Reveal from="up">
          <h1 id="intro-heading">
            <span className="inline-block rounded-lg bg-sun px-4 py-1.5 text-xl font-extrabold tracking-tight text-brand-dark shadow-sm sm:text-2xl">
              {site.name}
            </span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
