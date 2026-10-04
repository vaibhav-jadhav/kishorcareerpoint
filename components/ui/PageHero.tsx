import Link from "next/link";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand/10 bg-gradient-to-b from-sky to-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[30px] border-brand/5" />
        <span className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sun/15" />
        <span className="absolute right-[18%] top-10 hidden h-3 w-3 rounded-full bg-sun md:block" />
      </div>
      <Container className="relative py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="font-semibold text-brand hover:underline">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{title}</span>
        </nav>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
          {title}
        </h1>
        <span className="mt-4 block h-1.5 w-16 rounded-full bg-sun" aria-hidden="true" />
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
