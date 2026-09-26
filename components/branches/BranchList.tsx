import { branches } from "@/content/branches";
import { telHref } from "@/content/site";

export function BranchList() {
  return (
    <ul className="space-y-6">
      {branches.map((branch) => (
        <li
          key={branch.id}
          id={branch.id}
          className="overflow-hidden rounded-3xl border border-line bg-card"
        >
          <div className="grid lg:grid-cols-[320px_1fr]">
            <iframe
              title={`Map of Kishor Career Point, ${branch.name}`}
              src={branch.mapEmbedUrl}
              className="h-64 w-full border-0 lg:h-full lg:min-h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold">{branch.name}</h2>
                {branch.isMain ? (
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                    Main branch
                  </span>
                ) : null}
              </div>
              <dl className="mt-5 space-y-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold">Address</dt>
                  <dd className="text-muted">{branch.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone</dt>
                  <dd>
                    <a className="text-brand" href={telHref(branch.phone)}>
                      {branch.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>
                    <a className="text-brand" href={`mailto:${branch.email}`}>
                      {branch.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={branch.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-brand"
              >
                Get directions
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
