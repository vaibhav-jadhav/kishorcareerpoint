"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { branches, branchMapContent } from "@/content/branches";
import { telHref } from "@/content/site";
import { MAP_H, MAP_W, inset, kcpDistricts, projectLatLng } from "@/components/home/branchMapGeo";

/*
 * Branch finder. The list is the main control (name, call, directions), and the
 * map is a synced aid for orientation. Numbers on the map match the list.
 * The map is schematic: Karad is drawn near Urun-Islampur (see mapLat/mapLng in
 * content/branches.ts) so the pins fit together.
 */

type Point = { lat: number; lng: number };

/** Straight-line distance in km. Only used to number the branches near-to-far. */
function mapPoint(branch: Point & { mapLat?: number; mapLng?: number }): Point {
  return { lat: branch.mapLat ?? branch.lat, lng: branch.mapLng ?? branch.lng };
}

function distanceKm(a: Point, b: Point) {
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

/** Where the name tag sits relative to its pin, chosen so tags never overlap. */
const labelSide: Record<string, "above" | "below" | "left" | "right"> = {
  ichalkaranji: "below",
  "tekit-mall": "left",
  kolhapur: "above",
  hatkanangale: "above",
  sangli: "left",
  karad: "right",
};

const labelClass = {
  above: "bottom-full left-1/2 mb-0.5 -translate-x-1/2",
  below: "left-1/2 top-full mt-0.5 -translate-x-1/2",
  left: "right-full top-1/2 mr-0.5 -translate-y-1/2",
  right: "left-full top-1/2 ml-0.5 -translate-y-1/2",
};

function routePath(from: { x: number; y: number }, to: { x: number; y: number }, bend: number) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const cx = mx - (to.y - from.y) * bend;
  const cy = my + (to.x - from.x) * bend;
  const r = (n: number) => Math.round(n * 10) / 10;
  return `M${r(from.x)} ${r(from.y)}Q${r(cx)} ${r(cy)} ${r(to.x)} ${r(to.y)}`;
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mr-2 h-4 w-4">
      <path d="M5.2 2.5h2.3l1.1 3.3-1.6 1.2a9.5 9.5 0 0 0 4 4l1.2-1.6 3.3 1.1v2.3a1.8 1.8 0 0 1-1.9 1.8A12.5 12.5 0 0 1 3.4 4.4 1.8 1.8 0 0 1 5.2 2.5z" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mr-2 h-4 w-4"
    >
      <path d="M10 18s6-5.2 6-9.5a6 6 0 1 0-12 0C4 12.8 10 18 10 18z" />
      <circle cx="10" cy="8.5" r="2.2" />
    </svg>
  );
}

export function BranchMapSection() {
  const main = branches.find((branch) => branch.isMain) ?? branches[0];

  // Main centre first, then the rest from nearest to farthest. The numbers follow this order.
  const ordered = useMemo(
    () =>
      [...branches].sort(
        (a, b) =>
          Number(b.isMain) - Number(a.isMain) || distanceKm(mapPoint(main), mapPoint(a)) - distanceKm(mapPoint(main), mapPoint(b)),
      ),
    [main],
  );

  const [activeId, setActiveId] = useState(main.id);

  const layout = useMemo(() => {
    return Object.fromEntries(
      ordered.map((branch, index) => {
        const raw = projectLatLng(mapPoint(branch).lat, mapPoint(branch).lng);
        const x = Math.min(Math.max(raw.x, 46), MAP_W - 46);
        const y = Math.min(Math.max(raw.y, 30), MAP_H - 30);
        return [
          branch.id,
          {
            index,
            x,
            y,
          },
        ];
      }),
    );
  }, [ordered]);

  function choose(id: string) {
    setActiveId(id);
  }

  const mainPoint = layout[main.id];

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14" aria-labelledby="branch-map-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="anim-float-slow absolute -left-20 top-6 h-56 w-56 rounded-full bg-brand/5" />
        <span
          className="anim-float-slow absolute -right-16 bottom-4 h-60 w-60 rounded-full bg-sun/15"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-4xl gap-6 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-5">
        {/* Heading */}
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sun" aria-hidden="true" />
            {branchMapContent.eyebrow}
          </p>
          <h2
            id="branch-map-heading"
            className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl"
          >
            <span className="text-brand">5+ branches</span> across Western Maharashtra
          </h2>
          <p className="mt-2 text-sm font-medium text-muted sm:text-base">{branchMapContent.lead}</p>

        </Reveal>

        {/* The map: orientation only, list below is the real control */}
        <Reveal delay={120} className="mx-auto w-full max-w-[24rem] lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div
            className="relative aspect-[390/340] overflow-hidden rounded-3xl border border-brand/15 bg-[#f2f8fe] shadow-[0_22px_44px_-26px_rgba(4,40,74,0.55)]"
            role="group"
            aria-label="Map of KCP branches"
          >
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <pattern id="bm-grid" width="26" height="26" patternUnits="userSpaceOnUse">
                  <path d="M26 0H0V26" fill="none" stroke="#005aaa" strokeOpacity="0.06" />
                </pattern>
              </defs>
              <rect width={MAP_W} height={MAP_H} fill="url(#bm-grid)" />

              {/* Real district outlines */}
              <g strokeLinejoin="round" strokeWidth="1.4" stroke="#7fb0e0">
                <path d={kcpDistricts.sangli} fill="#e1eefb" />
                <path d={kcpDistricts.kolhapur} fill="#cde2f6" />
              </g>
              <g fontSize="9" fontWeight="700" letterSpacing="3" fill="#005aaa" fillOpacity="0.45" textAnchor="middle">
                <text x="224" y="108">SANGLI</text>
                <text x="150" y="320">KOLHAPUR</text>
              </g>

              {/* Routes from the main centre */}
              {ordered
                .filter((branch) => branch.id !== main.id)
                .map((branch, i) => {
                  const point = layout[branch.id];
                  const d = routePath(mainPoint, point, i % 2 === 0 ? 0.14 : -0.14);
                  const isActive = activeId === branch.id;
                  return (
                    <g key={branch.id}>
                      <path
                        d={d}
                        fill="none"
                        stroke="#005aaa"
                        strokeOpacity={isActive ? 0.9 : 0.28}
                        strokeWidth={isActive ? 2.4 : 1.5}
                        strokeLinecap="round"
                        className="anim-flow"
                        style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
                      />
                      {isActive ? (
                        <circle r="3.4" fill="#e4570e" className="map-dot">
                          <animateMotion dur="2.6s" repeatCount="indefinite" path={d} />
                        </circle>
                      ) : null}
                    </g>
                  );
                })}

              {/* Where this is in Maharashtra */}
              <g transform="translate(298 250) scale(0.9)">
                <rect width="92" height="90" rx="10" fill="#ffffff" fillOpacity="0.9" stroke="#005aaa" strokeOpacity="0.2" />
                <g transform="translate(3 4)">
                  <path d={inset.state} fill="#005aaa" fillOpacity="0.1" stroke="#005aaa" strokeOpacity="0.35" strokeWidth="0.4" />
                  <path d={inset.highlight} fill="#e4570e" stroke="#e4570e" strokeWidth="0.4" />
                  <circle
                    className="anim-pulse"
                    cx={inset.marker.x}
                    cy={inset.marker.y}
                    r="5"
                    fill="none"
                    stroke="#e4570e"
                    strokeWidth="1.2"
                  />
                </g>
                <text x="46" y="84" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="1.4" fill="#04284a" fillOpacity="0.75">
                  MAHARASHTRA
                </text>
              </g>
            </svg>

            {/* Pins are buttons for mouse and touch. Keyboard users use the list. */}
            {ordered.map((branch) => {
              const point = layout[branch.id];
              const isActive = branch.id === activeId;
              const side = labelSide[branch.id] ?? "below";
              return (
                <button
                  key={branch.id}
                  type="button"
                  tabIndex={-1}
                  aria-label={`${branch.name} branch${branch.isMain ? ", main centre" : ""}`}
                  onClick={() => choose(branch.id)}
                  style={{ left: `${(point.x / MAP_W) * 100}%`, top: `${(point.y / MAP_H) * 100}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 ${isActive ? "z-20" : "z-10"}`}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    {isActive ? (
                      <span className="absolute inset-0" aria-hidden="true">
                        <span
                          className={`anim-ripple block h-full w-full rounded-full ${branch.isMain ? "bg-sun" : "bg-accent"}`}
                        />
                      </span>
                    ) : null}
                    <span
                      className={`relative flex shrink-0 items-center justify-center rounded-full border-2 border-white text-[11px] font-extrabold shadow-md transition-all duration-300 ${
                        isActive ? "h-8 w-8 text-sm" : "h-6 w-6"
                      } ${
                        branch.isMain
                          ? "bg-sun text-brand-dark"
                          : isActive
                            ? "bg-accent text-white"
                            : "bg-brand text-white"
                      }`}
                    >
                      {point.index + 1}
                    </span>
                  </span>
                  <span
                    className={`pointer-events-none absolute whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-bold leading-tight shadow-sm transition-colors duration-300 sm:text-xs ${labelClass[side]} ${
                      isActive
                        ? "bg-brand-dark text-white"
                        : "border border-line bg-white text-ink"
                    }`}
                  >
                    {branch.mapName ?? branch.name}
                  </span>
                </button>
              );
            })}

            <p className="pointer-events-none absolute right-3 top-2.5 flex items-center gap-3 text-[10px] font-semibold text-brand-dark/70">
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-sun ring-1 ring-brand-dark/20" aria-hidden="true" />
                {branchMapContent.mainBadge}
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
                Branch
              </span>
            </p>
          </div>
          <p className="mt-2 text-center text-xs text-muted">{branchMapContent.mapNote}</p>
        </Reveal>

        {/* The branch list: the main control */}
        <Reveal delay={200} className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <ul className="space-y-2.5" aria-label="Branches">
            {ordered.map((branch) => {
              const point = layout[branch.id];
              const open = branch.id === activeId;
              return (
                <li key={branch.id}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                      open
                        ? "border-brand shadow-[0_14px_30px_-18px_rgba(0,90,170,0.6)]"
                        : "border-line hover:border-brand/40"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`branch-panel-${branch.id}`}
                      onClick={() => choose(branch.id)}
                      className="flex min-h-14 w-full items-center gap-3 px-4 py-2.5 text-left"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                          branch.isMain ? "bg-sun text-brand-dark" : open ? "bg-accent text-white" : "bg-brand text-white"
                        }`}
                        aria-hidden="true"
                      >
                        {point.index + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-base font-extrabold text-brand-dark">{branch.name}</span>
                          {branch.isMain ? (
                            <span className="rounded-full bg-sun px-2 py-0.5 text-[11px] font-bold text-brand-dark">
                              {branchMapContent.mainBadge}
                            </span>
                          ) : null}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 text-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      >
                        <path d="m5 8 5 5 5-5" />
                      </svg>
                    </button>

                    {open ? (
                      <div id={`branch-panel-${branch.id}`} className="anim-pop px-4 pb-4">
                        <p className="text-sm leading-6 text-muted">{branch.address}</p>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          <Button href={telHref(branch.phone)} variant="primary" className="min-h-11 rounded-lg px-4 py-2">
                            <PhoneIcon />
                            {branch.phoneDisplay}
                          </Button>
                          <Button
                            href={branch.directionsUrl}
                            external
                            variant="outline"
                            className="min-h-11 rounded-lg px-4 py-2"
                          >
                            <RouteIcon />
                            Directions
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
