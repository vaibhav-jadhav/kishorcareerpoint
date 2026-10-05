import Image from "next/image";
import Link from "next/link";
import { branches, branchesIntro } from "@/content/branches";

/** Intro in the middle, KCP's own building photos on either side. */
export function BranchesHero() {
  const [left, right] = branches.filter((branch) => branch.image);

  return (
    <section className="relative overflow-hidden border-b border-brand/10 bg-gradient-to-b from-sky to-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[30px] border-brand/5" />
        <span className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sun/15" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-end gap-x-6 px-5 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)_15rem]">
        <div className="order-2 flex items-end justify-center lg:order-none">
          {left ? <Building branch={left} /> : null}
        </div>

        <div className="order-1 py-10 text-center sm:py-14 lg:order-none lg:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="font-semibold text-brand hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">Branches</span>
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Kishor Career Point Branches
          </h1>
          <span className="mx-auto mt-4 block h-1.5 w-16 rounded-full bg-sun" aria-hidden="true" />
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{branchesIntro}</p>
        </div>

        <div className="order-3 flex items-end justify-center lg:order-none">
          {right ? <Building branch={right} /> : null}
        </div>
      </div>
    </section>
  );
}

function Building({ branch }: { branch: (typeof branches)[number] }) {
  return (
    <figure className="flex flex-col items-center">
      <Image
        src={branch.image as string}
        alt={`Kishor Career Point building, ${branch.name}`}
        width={480}
        height={640}
        sizes="(min-width: 1024px) 240px, 45vw"
        className="h-auto max-h-72 w-auto max-w-full object-contain drop-shadow-[0_14px_16px_rgba(4,40,74,0.18)] lg:max-h-[22rem]"
      />
      <figcaption className="-mt-1 mb-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
        {branch.name}
      </figcaption>
    </figure>
  );
}
