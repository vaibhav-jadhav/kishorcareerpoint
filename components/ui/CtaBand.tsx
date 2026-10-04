import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site, telHref, whatsappLink } from "@/content/site";

type CtaBandProps = {
  title: string;
  body: string;
  whatsappMessage: string;
};

export function CtaBand({ title, body, whatsappMessage }: CtaBandProps) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-10 text-white sm:px-12 sm:py-12">
          <span
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-white/10"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-20 right-1/4 h-48 w-48 rounded-full bg-sun/15"
            aria-hidden="true"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/80 sm:text-base">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={whatsappLink(whatsappMessage)} external variant="sun">
                Chat on WhatsApp
              </Button>
              <Button href={telHref(site.phone)} variant="ghost">
                Call {site.phoneDisplay}
              </Button>
              <Button href={site.brochureUrl} external variant="light">
                Download brochure
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
