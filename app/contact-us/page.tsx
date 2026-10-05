import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { enquiryCopy } from "@/content/about";
import { branches, otherBranchesIntro } from "@/content/branches";
import { site, telHref } from "@/content/site";

export const metadata: Metadata = pageMetadata({ ...seo.contact, path: "/contact-us" });

export default function ContactPage() {
  const others = branches.filter((branch) => !branch.isMain);

  return (
    <>
      <PageHero title="Contact Us" />
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl border border-line shadow-[0_8px_28px_-18px_rgba(4,40,74,0.35)] lg:grid-cols-2">
              <div className="bg-sky p-7 sm:p-10">
                <h2 className="text-2xl font-extrabold text-brand-dark">{site.name}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/80">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <dl className="mt-8 space-y-5">
                  <div>
                    <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">
                      Phone
                    </dt>
                    <dd className="mt-1 text-xl font-bold text-brand-dark">
                      <a href={telHref(site.phone)} className="hover:text-brand">
                        {site.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">
                      Send an email
                    </dt>
                    <dd className="mt-1 text-lg font-bold text-brand-dark">
                      <a href={`mailto:${site.email}`} className="break-all hover:text-brand">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark p-7 text-white sm:p-10">
                <span
                  className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full border-[24px] border-white/10"
                  aria-hidden="true"
                />
                <h2 className="relative text-2xl font-extrabold">{enquiryCopy.contactTitle}</h2>
                <p className="relative mt-3 text-sm leading-7 text-white/85">
                  {enquiryCopy.contactBody}
                </p>
                <div className="relative mt-7 flex flex-wrap gap-3">
                  <Button href={telHref(site.phone)} variant="sun" className="px-6 py-3">
                    Call now
                  </Button>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-tag px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d7a35]"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl">
            Visit Our <span className="text-brand">Other Locations</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-7 text-muted sm:text-base">
            {otherBranchesIntro}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((branch, index) => (
              <li key={branch.id}>
                <Reveal delay={index * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_32px_-18px_rgba(0,90,170,0.4)]">
                    <h3 className="text-lg font-extrabold text-brand-dark">{branch.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{branch.address}</p>
                    <p className="mt-3 text-sm">
                      <span className="font-semibold">Phone: </span>
                      <a className="font-semibold text-brand hover:underline" href={telHref(branch.phone)}>
                        {branch.phoneDisplay}
                      </a>
                    </p>
                    <Link
                      href={`/branches#${branch.id}`}
                      className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
                    >
                      Branch details
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
