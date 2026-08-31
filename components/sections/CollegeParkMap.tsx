import { collegeParkMap } from "@/content/college-park-map";

/**
 * COLLEGE PARK LOCATOR MAP.
 *
 * College Park is a neighbourhood, not a municipality — it has no legal
 * boundary to draw, and inventing one would be worse than drawing none. So this
 * map answers the question people actually ask about it: where is it, what is
 * it built around, and how far is downtown really?
 *
 * Lakes and highways are Census TIGER geometry. The four point markers are
 * approximate centres for orientation only.
 */
export function CollegeParkMap() {
  const { viewBox, lakes, lakeLabels, highways, points } = collegeParkMap;
  const KIND: Record<string, { r: number; fill: string }> = {
    area: { r: 11, fill: "#A8792E" },
    golf: { r: 8, fill: "#0E6B63" },
    park: { r: 8, fill: "#0E6B63" },
    city: { r: 10, fill: "#12303A" },
  };

  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">
          Where College Park sits
        </h3>
        <p className="mt-1 text-sm text-muted">
          A neighbourhood of the City of Orlando, built around Lakes Adair, Concord, Silver and
          Ivanhoe, with Interstate 4 along its eastern edge and downtown a short run to the
          south-east.
        </p>
      </div>

      <div className="bg-[#EAF1F0] p-4 sm:p-6">
        <svg
          viewBox={viewBox}
          className="mx-auto block h-auto w-full max-w-[560px]"
          role="img"
          aria-label="Locator map of College Park, Orlando, showing its lakes, Interstate 4 to the east, State Road 408 to the south, Dubsdread golf course, the Packing District and downtown Orlando."
        >
          <g fill="#7FB2AE" fillOpacity={0.85} stroke="#4E8C88" strokeWidth={1.5}>
            {lakes.map((d, i) => (
              <path key={`l${i}`} d={d} />
            ))}
          </g>

          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <g stroke="#C9B189" strokeWidth={9}>
              {highways.sr408.map((d, i) => (
                <path key={`s${i}`} d={d} />
              ))}
            </g>
            <g stroke="#A8792E" strokeWidth={11}>
              {highways.i4.map((d, i) => (
                <path key={`i${i}`} d={d} />
              ))}
            </g>
          </g>

          <g fill="#12454A" fontWeight={500} textAnchor="middle">
            {lakeLabels.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y}
                fontSize={19}
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
            const k = KIND[p.kind] ?? KIND.golf;
            return (
              <g key={p.name} transform={`translate(${p.x} ${p.y})`}>
                <circle r={k.r} fill={k.fill} stroke="#FFFFFF" strokeWidth={3} />
                <text
                  x={k.r + 8}
                  y={7}
                  fontSize={p.kind === "area" ? 25 : 20}
                  fontWeight={p.kind === "area" ? 700 : 600}
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
          Interstate 4
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-teal-700" />
          Dubsdread &amp; the Packing District
        </span>
        <span className="ml-auto">
          Lakes and highways: US Census Bureau TIGER. Markers are approximate.
        </span>
      </figcaption>
    </figure>
  );
}
