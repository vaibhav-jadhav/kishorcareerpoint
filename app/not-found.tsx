import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-3 text-4xl font-semibold">This page is not on the site</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The link may be old. Head back to the homepage or contact the Ichalkaranji office.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
