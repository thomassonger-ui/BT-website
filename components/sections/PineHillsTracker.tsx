/**
 * PINE HILLS REDEVELOPMENT TRACKER.
 *
 * The whole value of this table is the STATUS column being honest. Competitors
 * describe Pine Hills as "up and coming" and leave buyers to guess what that
 * means. Orange County itself says the 2026 Future Vision renderings are
 * CONCEPTUAL and still collecting community input — so this table separates
 * what is finished and open from what is funded, from what is a drawing.
 *
 * Never move a row up a status tier without a primary source saying so.
 * Every row carries its own source so a reader can check us.
 */

type Status = "Open" | "Under way" | "Funded" | "Concept";

const STATUS_STYLE: Record<Status, string> = {
  Open: "bg-teal-700/10 text-teal-800 ring-teal-700/20",
  "Under way": "bg-gold/15 text-[#7A5714] ring-gold/30",
  Funded: "bg-ink/[0.06] text-charcoal-soft ring-ink/15",
  Concept: "bg-ink/[0.03] text-muted ring-ink/10",
};

const ROWS: {
  project: string;
  where: string;
  status: Status;
  detail: string;
  source: string;
  href: string;
}[] = [
  {
    project: "LYNX Pine Hills Transfer Center",
    where: "2756 Belco Drive, off Silver Star Road",
    status: "Open",
    detail:
      "Eight-bay transfer centre. Groundbreaking October 2023; service began 10 August 2025; grand opening 28 August 2025. County states $18M total project cost with a $1.03M county contribution. Belco Drive was rebuilt with a new full-access signal.",
    source: "Orange County / LYNX",
    href: "https://newsroom.ocfl.net/media-advisories/press-releases/2025/08/orange-county-to-celebrate-grand-opening-of-lynx-pine-hills-bus-station/",
  },
  {
    project: "Orange County Multicultural Center",
    where: "7149 W. Colonial Drive",
    status: "Open",
    detail:
      "17,000 sq ft on a former grocery site. County newsroom gives an opening of 14 November 2023. Described by the county as phase one of a three-phase campus.",
    source: "Orange County",
    href: "https://newsroom.ocfl.net/2023/11/state-of-the-art-multicultural-center-opens-its-doors-in-pine-hills/",
  },
  {
    project: "Pine Hills Trail, Phase 1",
    where: "Alhambra Drive to Silver Star Road, plus a Barnett Park spur",
    status: "Open",
    detail:
      "2.96 miles, opened October 2017. Ten-foot asphalt trail in a Duke Energy easement and twelve-foot concrete in road right-of-way, with signalised crossings at Pine Hills and Silver Star Roads. Phases 2 and 3 would extend the route to roughly eight miles.",
    source: "Orange County",
    href: "https://www.orangecountyfl.net/TrafficTransportation/TransportationProjects/PineHillsTrail.aspx",
  },
  {
    project: "Orange County Innovation Center",
    where: "7149 W. Colonial Drive, same campus",
    status: "Under way",
    detail:
      "Public preview and ribbon-cutting held 8 July 2026; county describes full opening as Fall 2026. Makerspace and 3D printing with the library system, STEM and career programming with CareerSource.",
    source: "Orange County",
    href: "https://newsroom.ocfl.net/media-advisories/press-releases/2026/07/orange-county-hosts-preview-of-new-innovation-center/",
  },
  {
    project: "Septic-to-sewer conversion",
    where: "N. Pine Hills Road, Colonial Drive to Silver Star Road",
    status: "Under way",
    detail:
      "An earlier phase drew $4.3M from the Florida DEP across 100+ parcels. A follow-on phase between Colonial Drive and Golf Club Parkway began construction September 2024. County sources give different parcel counts for that phase — verify the specific parcel rather than assuming any address was converted.",
    source: "Orange County NID reports",
    href: "https://www.orangecountyfl.net/Portals/0/Library/Neighbors-Housing/docs/2022-2024%20Pine%20Hills%20NID%20Annual%20Report-CERT.pdf",
  },
  {
    project: "Pine Hills Road pedestrian safety",
    where: "Colonial Drive to Bonnie Brae Circle",
    status: "Under way",
    detail:
      "Raised medians, crosswalks, signage and a seven-foot bike lane between Colonial and Silver Star. Phase I ran January 2023 to a January 2025 target; Phase II from May 2023. Further sidewalk projects are listed in the county pipeline.",
    source: "Orange County",
    href: "https://newsroom.ocfl.net/media-advisories/press-releases/2023/02/pedestrian-safety-improvements-coming-to-pine-hills-road/",
  },
  {
    project: "Pine Hills Neighborhood Improvement District",
    where: "Roughly 290 acres along the commercial corridor",
    status: "Funded",
    detail:
      "Created by county Ordinance 2011-21 under s. 163.506 F.S.; funding guaranteed to 31 December 2032 by Ordinance 2021-49. Allocated $125,000 a year from the county Crime Prevention Fund — not an ad valorem tax on your parcel. A state performance review noted the 2015 improvement plan has not been updated since.",
    source: "OPPAGA / Orange County",
    href: "https://oppaga.fl.gov/Documents/ContractedReviews/Pine%20Hills%20NID%20Performance%20Review%20Report.pdf",
  },
  {
    project: "Pine Hills Future Vision renderings",
    where: "Pine Hills Road corridor",
    status: "Concept",
    detail:
      "Nine renderings were unveiled at two public sessions on 6 May 2026, covering transportation, economic development, pedestrian safety, beautification and housing. Orange County presents these as conceptual and is still collecting community input. Nothing here is approved, funded or scheduled.",
    source: "Orange County / Engage Orange",
    href: "https://engageorange.ocfl.net/pine-hills-future-vision",
  },
];

export function PineHillsTracker() {
  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-ink/10 bg-cream">
      <div className="border-b border-ink/10 px-6 py-4">
        <h3 className="font-display text-xl font-medium text-ink">
          Pine Hills redevelopment: what is built, what is funded, what is a drawing
        </h3>
        <p className="mt-1 text-sm text-muted">
          Sorted by how real it is. Orange County describes the 2026 renderings as conceptual, with
          community input still open — so they are listed as concepts, not projects.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink/10 bg-ink/[0.03]">
              <th scope="col" className="px-6 py-3 font-semibold text-ink">Project</th>
              <th scope="col" className="px-4 py-3 font-semibold text-ink">Status</th>
              <th scope="col" className="px-4 py-3 font-semibold text-ink">What is actually known</th>
              <th scope="col" className="px-6 py-3 font-semibold text-ink">Source</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.project} className="border-b border-ink/[0.07] align-top last:border-0">
                <td className="px-6 py-4">
                  <span className="font-semibold text-ink">{r.project}</span>
                  <span className="mt-1 block text-xs text-muted">{r.where}</span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${STATUS_STYLE[r.status]}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-[13px] leading-relaxed text-charcoal-soft">{r.detail}</td>
                <td className="px-6 py-4">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-xs underline underline-offset-2 hover:text-ink"
                  >
                    {r.source}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="border-t border-ink/10 px-6 py-4 text-xs text-muted">
        Every row links to the government source it came from. Status reflects what those sources
        state as of August 2026 and will change — check the linked source before relying on it.
      </figcaption>
    </figure>
  );
}
