import { edgewoodMap } from "@/content/edgewood-map";

/**
 * EDGEWOOD CITY MAP.
 *
 * Shows what a text description cannot: that Edgewood is a real municipality
 * with drawn city limits, sitting among the lakes on the western side of the
 * Conway chain, distinct from Orlando around it. Geometry is OpenStreetMap
 * (ODbL) — city boundary, lakes and roads — with City Hall at its published
 * address. Attribution below is required by the licence.
 */
export function EdgewoodMap() {
  const { viewBox, boundary, lakes, roads, hall, labels } = edgewoodMap;
  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">The City of Edgewood</h3>
        <p className="mt-1 text-sm text-muted">
          Edgewood is its own municipality, not a neighbourhood of Orlando — about 1.24 square
          miles of land wrapped around the lakes on the western side of the Conway chain.
        </p>
      </div>

      <div className="bg-[#EAF1F0] p-4 sm:p-6">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-[680px]"
          role="img"
          aria-label="Map of the City of Edgewood, Florida, showing its city limits, the surrounding lakes including Lake Jessamine, Lake Gatlin and Little Lake Conway, and the location of Edgewood City Hall."
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

          {/* city limits — the point of the map */}
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
          Edgewood city limits
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-teal-700" />
          City Hall, 405 Bagshaw Way
        </span>
        <span className="ml-auto">City limits, lake and road data &copy; OpenStreetMap contributors</span>
      </figcaption>
    </figure>
  );
}
