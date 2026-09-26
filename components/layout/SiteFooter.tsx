import Link from "next/link";
import { branches } from "@/content/branches";
import { footerLinks } from "@/content/navigation";
import { site, telHref } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-2xl font-semibold">Kishor Career Point</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
            {site.footerBlurb}
          </p>
          <ul className="mt-5 flex gap-4 text-sm font-semibold">
            <li>
              <a href={site.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6">
            <li>
              <a href={telHref(site.phone)} className="font-semibold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="font-semibold">
                {site.email}
              </a>
            </li>
            <li className="text-white/80">{site.addressShort}</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Useful links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.olympiadUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/85 hover:text-white"
              >
                Olympiad
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Ichalkaranji
          </h2>
          <iframe
            title="Map of Kishor Career Point, Ichalkaranji"
            src={site.headquartersMapEmbed}
            className="mt-4 h-40 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Branches
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {branches.map((branch) => (
              <li key={branch.id} className="text-center">
                <a href={telHref(branch.phone)} className="block">
                  <span className="block text-xs font-bold tracking-wide">
                    {branch.name.toUpperCase()}
                  </span>
                  <span className="mt-1 block text-sm text-white/80">
                    {branch.phoneDisplay}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-white/70">
            Kishor Career Point. © {year}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
