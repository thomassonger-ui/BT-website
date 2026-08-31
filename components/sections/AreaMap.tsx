import { windermereMap } from "@/content/windermere-map";
import { drPhillipsMap } from "@/content/dr-phillips-map";
import { pineHillsMap } from "@/content/pine-hills-map";
import { metrowestMap } from "@/content/metrowest-map";
import { lakeNonaMap } from "@/content/lake-nona-map";

/**
 * AREA MAP — one component, five places, so these pages read as a set with the
 * Belle Isle / Edgewood / Winter Park CityMap and the Orlando and College Park
 * maps. Same palette, same gold boundary, same teal water, same caption bar.
 *
 * Two of the five have a legal boundary to draw (Windermere is an incorporated
 * town; Dr. Phillips and Pine Hills are Census Designated Places). MetroWest and
 * Lake Nona do not — they are a master association and a planned development, so
 * no boundary is drawn for them and the map is a locator instead. Drawing an
 * invented line for either would be worse than drawing none.
 */

type Kind = "hall" | "golf" | "transit" | "civic" | "park" | "area";

const MARK: Record<Kind, { r: number; fill: string; bold?: boolean }> = {
  area: { r: 11, fill: "#A8792E", bold: true },
  hall: { r: 10, fill: "#0E6B63" },
  golf: { r: 9, fill: "#0E6B63" },
  transit: { r: 9, fill: "#0E6B63" },
  civic: { r: 9, fill: "#0E6B63" },
  park: { r: 9, fill: "#12454A" },
};

const MAPS = {
  windermere: {
    data: windermereMap,
    title: "The Town of Windermere",
    blurb:
      "The incorporated town is 2.08 square miles of land and 0.75 of water on the Butler Chain. Roughly 1,600 parcels sit inside this line; about 30,000 carry a Windermere mailing address.",
    legend: "Town limits",
    footer: "Town limits and lakes: US Census Bureau TIGER. Simplified for display.",
  },
  "dr-phillips": {
    data: drPhillipsMap,
    title: "Dr. Phillips, unincorporated Orange County",
    blurb:
      "The Census records this as Doctor Phillips CDP — 3.40 square miles of land and 1.31 of water, with no municipal government of its own. Big Sand Lake and Little Sand Lake sit inside it; the Butler Chain does not.",
    legend: "CDP boundary",
    footer: "Boundary, lakes and roads: US Census Bureau TIGER. Simplified for display.",
  },
  "pine-hills": {
    data: pineHillsMap,
    title: "Pine Hills, unincorporated Orange County",
    blurb:
      "12.19 square miles of land, governed by Orange County rather than a city. The improvement district covers only a corridor within this area — not the whole of it.",
    legend: "CDP boundary",
    footer: "Boundary and lakes: US Census Bureau TIGER. Marker positions are approximate.",
  },
  metrowest: {
    data: metrowestMap,
    title: "Where MetroWest sits",
    blurb:
      "A master-planned community inside the City of Orlando, not a municipality — so there is no legal boundary to draw. Kirkman Road (SR 435) runs along the eastern edge, with SR 408 to the south and Turkey Lake to the west.",
    legend: "Interstate & expressway",
    footer: "Lakes and roads: US Census Bureau TIGER. Marker positions are approximate.",
  },
  "lake-nona": {
    data: lakeNonaMap,
    title: "Where Lake Nona sits",
    blurb:
      "A planned development inside the City of Orlando's south-eastern arm, governed by a PD ordinance rather than a municipal boundary. SR 417 runs through it and Orlando International Airport is immediately north-west.",
    legend: "Expressway",
    footer: "Lakes and roads: US Census Bureau TIGER. Marker positions are approximate.",
  },
} as const;

export function AreaMap({ area }: { area: keyof typeof MAPS }) {
  const cfg = MAPS[area];
  const { viewBox, boundary, lakes, lakeLabels, highways, points } = cfg.data;
  const roadSets = Object.values(highways as Record<string, readonly string[]>);

  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">{cfg.title}</h3>
        <p className="mt-1 text-sm text-muted">{cfg.blurb}</p>
      </div>

      <div className="bg-[#EAF1F0] p-4 sm:p-6">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-[620px]"
          role="img"
          aria-label={`Map of ${cfg.title}, showing its lakes, main roads and points of reference.`}
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="#C9B189" strokeWidth={8}>
            {roadSets.flat().map((d, i) => (
              <path key={`r${i}`} d={d} />
            ))}
          </g>

          <g fill="#7FB2AE" fillOpacity={0.85} stroke="#4E8C88" strokeWidth={1.5}>
            {lakes.map((d, i) => (
              <path key={`l${i}`} d={d} />
            ))}
          </g>

          {boundary.length ? (
            <g stroke="#A8792E" strokeWidth={5} fill="none" strokeLinejoin="round">
              {boundary.map((d, i) => (
                <path key={`b${i}`} d={d} />
              ))}
            </g>
          ) : null}

          <g fill="#12454A" fontWeight={500} textAnchor="middle">
            {lakeLabels.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y}
                fontSize={18}
                fillOpacity={0.85}
                stroke="#EAF1F0"
                strokeWidth={5}
                paintOrder="stroke"
              >
                {l.name}
              </text>
            ))}
          </g>

          {points.map((p) => {
            const m = MARK[(p.kind as Kind) ?? "civic"] ?? MARK.civic;
            return (
              <g key={p.name} transform={`translate(${p.x} ${p.y})`}>
                <circle r={m.r} fill={m.fill} stroke="#FFFFFF" strokeWidth={3} />
                <text
                  x={m.r + 8}
                  y={6}
                  fontSize={m.bold ? 24 : 19}
                  fontWeight={m.bold ? 700 : 600}
                  fill="#12303A"
                  stroke="#EAF1F0"
                  strokeWidth={5}
                  paintOrder="stroke"
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 px-6 py-4 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1 w-6 rounded-full bg-gold" />
          {cfg.legend}
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-teal-700" />
          Lakes
        </span>
        <span className="ml-auto">{cfg.footer}</span>
      </figcaption>
    </figure>
  );
}
