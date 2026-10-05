import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { about } from "@/content/about";
import { branches } from "@/content/branches";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = pageMetadata({ ...seo.about, path: "/about-us" });

/** Real KCP photos that stay on this page. The old building photo is replaced by the new campus photo. */
const photoStrip = about.gallery.filter((photo) => !photo.src.endsWith("/building.jpg"));

export default function AboutPage() {
  const campus = branches.find((branch) => branch.isMain && branch.image);

  return (
    <>
      <PageHero title="About Us" heading="About Kishor Career Point" />

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl">
              Kishor Career <span className="text-brand">Point</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-ink/90">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {campus?.image ? (
            <Reveal delay={120}>
              <figure className="relative mx-auto max-w-sm overflow-hidden rounded-3xl bg-gradient-to-b from-sky to-[#d3e8f9] px-6 pt-8">
                <span
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/30"
                  aria-hidden="true"
                />
                <span
                  className="absolute -left-12 top-1/3 h-36 w-36 rounded-full border-[18px] border-brand/5"
                  aria-hidden="true"
                />
                <Image
                  src={campus.image}
                  alt="Kishor Career Point campus, Ichalkaranji"
                  width={640}
                  height={858}
                  sizes="(min-width: 1024px) 380px, 90vw"
                  priority
                  className="relative mx-auto h-auto w-full max-w-[19rem] drop-shadow-[0_16px_18px_rgba(4,40,74,0.2)]"
                />
                <figcaption className="relative -mx-6 bg-brand px-4 py-2.5 text-center text-sm font-bold text-white">
                  Ichalkaranji campus
                </figcaption>
              </figure>
            </Reveal>
          ) : null}
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-14" aria-label="Photos of Kishor Career Point">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-3">
            {photoStrip.map((photo) => {
              const contain = photo.src.endsWith("/wordmark.jpg");
              return (
                <li
                  key={photo.src}
                  className="overflow-hidden rounded-2xl border border-line bg-white"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className={`aspect-[4/3] w-full ${contain ? "object-contain" : "object-cover"}`}
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="h-full">
              <article className="relative h-full overflow-hidden rounded-3xl border border-brand/10 bg-sky p-7 sm:p-8">
                <span
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sun/30"
                  aria-hidden="true"
                />
                <h2 className="relative text-2xl font-extrabold text-brand-dark">Mission</h2>
                <p className="relative mt-3 text-sm leading-7 text-ink/85">{about.mission}</p>
              </article>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <article className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-7 text-white sm:p-8">
                <span
                  className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full border-[22px] border-white/10"
                  aria-hidden="true"
                />
                <h2 className="relative text-2xl font-extrabold">Vision</h2>
                <p className="relative mt-3 text-sm leading-7 text-white/85">{about.vision}</p>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl">
              Core <span className="text-brand">Values</span>
            </h2>
            <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {about.values.map((value, index) => (
                <li
                  key={value}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_12px_24px_-14px_rgba(0,90,170,0.4)]"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-extrabold text-brand transition group-hover:bg-brand group-hover:text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-ink">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
