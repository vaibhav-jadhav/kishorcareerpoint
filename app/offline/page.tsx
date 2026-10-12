import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { branches } from "@/content/branches";
import { site, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: "You are offline",
  robots: { index: false, follow: false },
};

/** Shown by the service worker when a page is not saved and there is no connection. */
export default function OfflinePage() {
  return (
    <Container className="py-16 text-center sm:py-24">
      <h1 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">You are offline</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        This page is not saved on your phone yet. Pages you have already opened still work. To reach us right now, call
        a branch.
      </p>

      <div className="mt-8">
        <Button href={telHref(site.phone)} variant="accent">
          Call {site.phoneDisplay}
        </Button>
      </div>

      <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left sm:grid-cols-2">
        {branches.map((branch) => (
          <li key={branch.id}>
            <a
              href={telHref(branch.phone)}
              className="block rounded-2xl border border-line bg-white px-4 py-3 transition hover:border-brand/40"
            >
              <span className="block text-base font-extrabold text-brand-dark">{branch.name}</span>
              <span className="block text-sm text-muted">{branch.phoneDisplay}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
