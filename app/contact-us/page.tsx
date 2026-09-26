import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { enquiryCopy } from "@/content/about";
import { branches, otherBranchesIntro } from "@/content/branches";
import { site, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: enquiryCopy.contactBody,
};

export default function ContactPage() {
  const others = branches.filter((branch) => !branch.isMain);

  return (
    <>
      <PageHero title="Contact Us" />
      <Container className="py-14">
        <div className="grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
          <div className="bg-surface p-7 sm:p-10">
            <h2 className="text-2xl font-semibold">{site.name}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Phone</dt>
                <dd className="mt-1 text-xl font-semibold">
                  <a href={telHref(site.phone)}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  Send an email
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-brand-dark p-7 text-white sm:p-10">
            <h2 className="text-2xl font-semibold">{enquiryCopy.contactTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">{enquiryCopy.contactBody}</p>
            <div className="mt-6 rounded-2xl bg-card p-5 text-ink">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Container>

      <section className="bg-surface py-14">
        <Container>
          <h2 className="text-center text-3xl font-semibold">Visit Our Other Locations</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-muted">
            {otherBranchesIntro}
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {others.map((branch) => (
              <li key={branch.id} className="rounded-3xl border border-line bg-card p-6">
                <h3 className="text-xl font-semibold">{branch.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{branch.address}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Phone: </span>
                  <a className="text-brand" href={telHref(branch.phone)}>
                    {branch.phoneDisplay}
                  </a>
                </p>
                <Link href={`/branches#${branch.id}`} className="mt-3 inline-block text-sm font-semibold text-brand">
                  Branch details
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
