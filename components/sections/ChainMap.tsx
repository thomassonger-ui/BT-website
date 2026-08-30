import { chainMap } from "@/content/chain-map";

/**
 * CONWAY CHAIN OF LAKES — map.
 *
 * Geometry is real: lake outlines and road centrelines come from
 * OpenStreetMap (ODbL), queried via Overpass and projected here. Nothing in
 * this drawing is illustrative or approximated by hand.
 *
 * The two highlighted roads carry the actual local knowledge: Hoffner Avenue
 * separates North from Middle Lake Conway, and Nela Avenue separates Middle
 * from Little Lake Conway. Those divisions decide whether a given dock reaches
 * open water, which is the question waterfront buyers on this chain actually
 * ask. Verified two ways — Orange County's historical marker text, and the
 * OSM geometry itself, which puts Nela exactly at the seam between basins.
 *
 * Attribution is required by the ODbL licence and must stay on the page.
 */
export function ChainMap({ highlight }: { highlight?: "conway" | "belle-isle" }) {
  const { viewBox, lakes, roads, office, labels } = chainMap;
  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">The Conway Chain of Lakes</h3>
        <p className="mt-1 text-sm text-muted">
          Two roads divide the chain into separate basins — which one a property fronts
          decides where its dock can actually take you.
        </p>
      </div>

      <div className="bg-[#EAF1F0] p-4 sm:p-6">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-[560px]"
          role="img"
          aria-label="Map of the Conway Chain of Lakes in southeast Orlando, showing Lake Conway, Little Lake Conway, Lake Jessamine and neighbouring lakes, with Hoffner Avenue and Nela Avenue marked where they divide the chain."
        >
          {/* street grid, then arterials — context, drawn light */}
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

          {/* lakes */}
          <g fill="#7FB2AE" fillOpacity={0.85} stroke="#4E8C88" strokeWidth={2}>
            {lakes.map((d, i) => (
              <path key={`l${i}`} d={d} />
            ))}
          </g>

          {/* the two dividing roads, drawn over the water */}
          <g stroke="#A8792E" strokeWidth={5} fill="none" strokeLinecap="round">
            {roads.dividers.map((d, i) => (
              <path key={`d${i}`} d={d} />
            ))}
          </g>

          {/* Bear Team office */}
          <g transform={`translate(${office[0]} ${office[1]})`}>
            <circle r={13} fill="#0E6B63" stroke="#FFFFFF" strokeWidth={3} />
            <text x={22} y={6} fontSize={26} fontWeight={600} fill="#12303A">
              Bear Team
            </text>
          </g>

          {/* lake labels */}
          <g fill="#12454A" fontWeight={500} textAnchor="middle">
            {labels.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y}
                fontSize={l.size === "lake" ? 28 : 19}
                fillOpacity={l.size === "lake" ? 1 : 0.7}
                stroke="#EAF1F0"
                strokeWidth={5}
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
          Hoffner Ave &amp; Nela Ave — the basin divisions
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-teal-700" />
          Bear Team Real Estate, 2300 S Crystal Lake Dr
        </span>
        <span className="ml-auto">Lake and road data &copy; OpenStreetMap contributors</span>
      </figcaption>
    </figure>
  );
}
