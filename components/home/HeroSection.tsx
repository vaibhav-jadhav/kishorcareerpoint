import { HeroShowcase } from "@/components/home/HeroShowcase";
import { Button } from "@/components/ui/Button";
import { heroContent, showcaseSlides } from "@/content/home";
import type { HeroStatIcon } from "@/content/home";
import { site, telHref } from "@/content/site";

function StatIcon({ name }: { name: HeroStatIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-[1.15rem] w-[1.15rem]",
  };

  if (name === "years") {
    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="5.5" />
        <path d="m9 14 -1.5 7 4.5 -2.5 4.5 2.5 -1.5 -7" />
        <path d="m10 9 1.5 1.5L14.5 7.5" />
      </svg>
    );
  }
  if (name === "medical") {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5z" />
      <path d="M6.5 11.8v4.2c0 1.3 2.5 2.5 5.5 2.5s5.5-1.2 5.5-2.5v-4.2" />
      <path d="M21.5 9.5V15" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="ml-2 h-4 w-4"
    >
      <path d="M6 14 14 6M7 6h7v7" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sky">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/60" />
      <div className="pointer-events-none absolute -bottom-40 right-1/3 h-[28rem] w-[28rem] rounded-full bg-brand/5" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border-[28px] border-brand/5" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,25rem)_minmax(0,28rem)] lg:justify-center lg:gap-14 lg:py-8">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            {heroContent.headline}{" "}
            <span className="text-brand">{heroContent.headlineAccent}</span>
          </h1>

          <ul className="mt-5 space-y-2.5">
            {heroContent.stats.map((stat) => (
              <li
                key={stat.highlight}
                className="flex items-center gap-3 rounded-xl border border-white bg-white px-3 py-2.5 shadow-[0_4px_14px_-8px_rgba(4,40,74,0.25)]"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sun text-brand-dark">
                  <StatIcon name={stat.icon} />
                </span>
                <p className="text-sm leading-snug text-ink">
                  <strong className="font-extrabold text-brand">{stat.highlight}</strong>{" "}
                  {stat.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={telHref(site.phone)} variant="sun" className="rounded-lg px-4 py-2.5">
              Call now
              <ArrowUpRight />
            </Button>
            <Button
              href={site.brochureUrl}
              external
              variant="outline"
              className="rounded-lg px-4 py-2.5"
            >
              Download brochure
              <ArrowUpRight />
            </Button>
          </div>
        </div>

        <HeroShowcase slides={showcaseSlides} />
      </div>
    </section>
  );
}
