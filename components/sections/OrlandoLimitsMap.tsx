import { orlandoMap } from "@/content/orlando-map";

/**
 * CITY OF ORLANDO LIMITS — the shape IS the argument.
 *
 * Most Orange County addresses read "Orlando, FL" and are not in the City of
 * Orlando. An outline map would not show why; a filled map does. The city is
 * drawn solid inside the county outline so three things are visible at a glance:
 * how small a share of the county it is, how ragged its edge is, and the pockets
 * of unincorporated county sitting entirely inside it.
 *
 * Counts in the caption come from `orlandoMap.counts`, which are the true values
 * from the Census boundary file — NOT from the rendered paths, which are
 * simplified and drop a few slivers. Never recount the paths.
 */
export function OrlandoLimitsMap() {
  const { viewBox, county, city, enclaves, downtown, mco, labels, counts } = orlandoMap;

  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">
          The City of Orlando inside Orange County
        </h3>
        <p className="mt-1 text-sm text-muted">
          The city is not one shape. In the Census Bureau&rsquo;s boundary file it is {counts.pieces}{" "}
          separate pieces, with {counts.enclaves} pockets of unincorporated Orange County sitting
          entirely inside it.
        </p>
      </div>

      <div className="bg-[#EAF1F0] p-4 sm:p-6">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-[720px]"
          role="img"
          aria-label={`Map of Orange County, Florida with the City of Orlando shaded. The city occupies a small, irregular share of the county in ${counts.pieces} separate pieces, and contains ${counts.enclaves} enclaves of unincorporated county land.`}
        >
          <g fill="#FBFDFC" stroke="#9AB3AE" strokeWidth={2.5} strokeLinejoin="round">
            {county.map((d, i) => (
              <path key={`c${i}`} d={d} />
            ))}
          </g>

          <g fill="#0E6B63" fillOpacity={0.6} stroke="#0B564F" strokeWidth={1.5} strokeLinejoin="round">
            {city.map((d, i) => (
              <path key={`o${i}`} d={d} />
            ))}
          </g>

          {/* Enclaves painted back to the county colour with a gold edge — they
              are holes in the city, so they must read as not-city. */}
          <g fill="#FBFDFC" stroke="#A8792E" strokeWidth={2} strokeLinejoin="round">
            {enclaves.map((d, i) => (
              <path key={`e${i}`} d={d} />
            ))}
          </g>

          <g fill="#12454A" fontWeight={500} textAnchor="middle">
            {labels.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y}
                fontSize={17}
                fillOpacity={0.75}
                stroke="#EAF1F0"
                strokeWidth={4}
                paintOrder="stroke"
              >
                {l.name}
              </text>
            ))}
          </g>

          <g transform={`translate(${downtown[0]} ${downtown[1]})`}>
            <circle r={9} fill="#A8792E" stroke="#FFFFFF" strokeWidth={3} />
            <text
              x={16}
              y={5}
              fontSize={19}
              fontWeight={600}
              fill="#12303A"
              stroke="#EAF1F0"
              strokeWidth={4}
              paintOrder="stroke"
            >
              Downtown
            </text>
          </g>

          <g transform={`translate(${mco[0]} ${mco[1]})`}>
            <circle r={7} fill="#12454A" stroke="#FFFFFF" strokeWidth={2.5} />
            <text
              x={14}
              y={5}
              fontSize={17}
              fontWeight={500}
              fill="#12303A"
              stroke="#EAF1F0"
              strokeWidth={4}
              paintOrder="stroke"
            >
              MCO
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 px-6 py-4 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-[#0E6B63]/60" />
          In the City of Orlando
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm border-2 border-gold bg-soft-white" />
          Unincorporated Orange County
        </span>
        <span className="ml-auto">
          Boundaries: US Census Bureau TIGER, 2026. Simplified for display.
        </span>
      </figcaption>
    </figure>
  );
}
