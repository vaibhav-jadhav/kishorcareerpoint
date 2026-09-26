import Link from "next/link";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="font-medium text-brand hover:underline">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{title}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
