import { edgewoodMap } from "@/content/edgewood-map";
import { belleIsleMap } from "@/content/belle-isle-map";
import { winterParkMap } from "@/content/winter-park-map";

/**
 * CITY MAP — Edgewood, Belle Isle and Winter Park.
 *
 * Both are incorporated cities that people mistake for Orlando neighbourhoods,
 * and the drawn city limits are the fastest way to show otherwise. Geometry is
 * OpenStreetMap (ODbL): city boundary, lakes and roads, with City Hall at each
 * city's published address. Attribution below is required by the licence.
 *
 * Conway is NOT here — it is unincorporated and has no boundary to draw; it uses
 * ChainMap instead.
 */
const MAPS = {
  edgewood: {
    data: edgewoodMap,
    title: "The City of Edgewood",
    blurb:
      "Edgewood is its own municipality, not a neighbourhood of Orlando — about 1.24 square miles of land wrapped around the lakes on the western side of the Conway chain.",
    hallLabel: "City Hall, 405 Bagshaw Way",
  },
  "winter-park": {
    data: winterParkMap,
    title: "The City of Winter Park",
    blurb:
      "Winter Park is its own city with its own electric utility \u2014 8.77 square miles of land and 1.62 of water, wrapped around the chain of lakes the Scenic Boat Tour runs on. Seven pockets of unincorporated Orange County sit inside the limits.",
    hallLabel: "City Hall, 401 S. Park Avenue",
  },
  "belle-isle": {
    data: belleIsleMap,
    title: "The City of Belle Isle",
    blurb:
      "Belle Isle is its own municipality with its own police department — and more of its area is water than land: 2.78 of its 5.19 square miles. The city limits wrap Lake Conway and Little Lake Conway.",
    hallLabel: "City Hall, 1600 Nela Avenue",
  },
} as const;

export function CityMap({ city }: { city: keyof typeof MAPS }) {
  const cfg = MAPS[city];
  const { viewBox, boundary, lakes, roads, hall, labels } = cfg.data;
  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">{cfg.title}</h3>
        <p className="mt-1 text-sm text-muted">{cfg.blurb}</p>
      </div>

      <div className="bg-[#EAF1F0] p-3 sm:p-4">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-full"
          role="img"
          aria-label={`Map of ${cfg.title}, Florida, showing its city limits, the surrounding lakes, and the location of City Hall.`}
        >
          <g fill="none" strokeLinecap="round">
            <g stroke="#CBD8D5" strokeWidth={2}>
              {roads.minor.map((d, i) => (
                <path key={`m${i}`} d={d} />
              ))}
            </g>
            <g stroke="#AFC2BE" strokeWidth={3.5}>
              {roads.major.map((d, i) => (
                <path key={`M${i}`} d={d} />
              ))}
            </g>
          </g>

          <g fill="#7FB2AE" fillOpacity={0.85} stroke="#4E8C88" strokeWidth={1.5}>
            {lakes.map((d, i) => (
              <path key={`l${i}`} d={d} />
            ))}
          </g>

          <g stroke="#A8792E" strokeWidth={5} fill="none" strokeLinejoin="round">
            {boundary.map((d, i) => (
              <path key={`b${i}`} d={d} />
            ))}
          </g>

          <g transform={`translate(${hall[0]} ${hall[1]})`}>
            <circle r={11} fill="#0E6B63" stroke="#FFFFFF" strokeWidth={3} />
            <text x={19} y={6} fontSize={22} fontWeight={600} fill="#12303A">
              City Hall
            </text>
          </g>

          <g fill="#12454A" fontWeight={500} textAnchor="middle">
            {labels.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y}
                fontSize={18}
                fillOpacity={0.8}
                stroke="#EAF1F0"
                strokeWidth={4}
                paintOrder="stroke"
              >
                {l.name}
              </text>
            ))}
          </g>
        </svg>
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 px-6 py-4 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1 w-6 rounded-full bg-gold" />
          City limits
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-teal-700" />
          {cfg.hallLabel}
        </span>
        <span className="ml-auto">City limits, lake and road data &copy; OpenStreetMap contributors</span>
      </figcaption>
    </figure>
  );
}
