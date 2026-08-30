import type { Community } from "@/types/content";

/**
 * COMMUNITY CONTENT — Fair-Housing-safe language only.
 * Describe property characteristics, amenities, transportation, architecture,
 * geography, and verified public features. Never describe who a community is
 * "for," and never reference schools ratings, crime, safety, demographics, or
 * protected classes. See CONTENT_GUIDE.md before editing.
 *
 * REVIEW NOTE: all factual statements below (amenities, geography, features)
 * must be verified by Bear Team before launch.
 */
export const communities: Community[] = [
  {
    slug: "orlando",
    name: "Orlando",
    intro:
      "Central Florida's urban core — a diverse housing market spanning historic districts, downtown condominiums, and established suburban neighborhoods.",
    lifestyle:
      "Downtown Orlando offers dining, performing arts at the Dr. Phillips Center, Lake Eola Park, and a growing urban residential scene, with quieter established neighborhoods radiating outward.",
    locationContext:
      "The center of the Orlando metropolitan area, with direct access to Interstate 4, State Road 408, and Orlando International Airport to the southeast.",
    housingOverview:
      "Housing spans early-1900s bungalows in historic districts, mid-century ranch homes, downtown high-rise condominiums, townhomes, and newer infill construction.",
    propertyTypes: ["Historic bungalows", "High-rise condominiums", "Ranch homes", "Townhomes", "New infill construction"],
    buyerConsiderations: [
      "Historic-district renovation and preservation guidelines in some neighborhoods",
      "Condominium association review for downtown buildings",
      "Wide price and condition range between neighborhoods",
    ],
    sellerConsiderations: [
      "Buyer pools differ sharply by neighborhood and property style",
      "Presentation and pricing strategy matter in a market with many alternatives",
    ],
    amenities: ["Lake Eola Park", "Dr. Phillips Center for the Performing Arts", "Camping World Stadium", "Kia Center", "Orlando Urban Trail"],
    transportation: ["Interstate 4", "SR 408 East-West Expressway", "SunRail commuter stations", "LYNX bus network", "Orlando International Airport"],
    image: "/images/communities/orlando.jpg",
    imageAlt: "Homes in Orlando, Florida",
    related: ["college-park", "conway", "metrowest"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    intro:
      "A historic city north of downtown Orlando known for its brick-lined streets, chain of lakes, and the Park Avenue shopping and dining district.",
    lifestyle:
      "Park Avenue's boutiques, museums including the Morse Museum of American Art, Rollins College, weekly farmers market, and a celebrated annual art festival anchor the city's walkable core.",
    locationContext:
      "Roughly five miles northeast of downtown Orlando, bordered by Maitland to the north and Orlando neighborhoods to the south and west.",
    housingOverview:
      "Architecture ranges from historic Mediterranean and Colonial Revival estates near the lakes to mid-century homes, townhomes, and condominiums closer to commercial corridors.",
    propertyTypes: ["Historic estates", "Lakefront homes", "Mid-century homes", "Townhomes", "Condominiums"],
    buyerConsiderations: [
      "Lakefront ownership includes dock, seawall, and insurance considerations",
      "Historic homes may involve renovation guidelines",
      "Price points vary widely between lakefront, core, and west-side locations",
    ],
    sellerConsiderations: [
      "Architectural character and provenance can be meaningful marketing assets",
      "Buyers in this market expect thorough presentation and documentation",
    ],
    amenities: ["Park Avenue district", "Winter Park Chain of Lakes", "Morse Museum of American Art", "Rollins College", "Mead Botanical Garden", "Winter Park Farmers' Market"],
    transportation: ["SunRail Winter Park station", "US 17-92", "SR 426 / Aloma Avenue", "Interstate 4 access via Fairbanks Avenue"],
    image: "/images/communities/winter-park.jpg",
    imageAlt: "Homes in Winter Park, Florida",
    related: ["college-park", "orlando", "conway"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "lake-nona",
    name: "Lake Nona",
    intro:
      "A master-planned district in southeast Orlando built around Medical City, sports-performance campuses, and some of the region's newest residential construction.",
    lifestyle:
      "Town-center dining and events, extensive trail networks, the USTA National Campus, and technology-forward community infrastructure define the area's modern character.",
    locationContext:
      "Southeast Orlando adjacent to Orlando International Airport, with SR 417 providing the primary regional connection.",
    housingOverview:
      "Predominantly newer construction — village-style single-family neighborhoods, townhomes, apartments, and custom homes in golf and lakefront enclaves.",
    propertyTypes: ["New-construction single-family", "Custom estate homes", "Townhomes", "Condominiums"],
    buyerConsiderations: [
      "Multiple builders and communities with differing HOA and CDD structures",
      "New-construction contracts differ from resale contracts",
      "Community amenities and fees vary by village",
    ],
    sellerConsiderations: [
      "Resales compete directly with active new construction nearby",
      "Upgrades and lot characteristics drive differentiation",
    ],
    amenities: ["Lake Nona Town Center", "USTA National Campus", "Medical City institutions", "Lake Nona Performance Club", "Extensive trail network"],
    transportation: ["SR 417 Central Florida GreeneWay", "Orlando International Airport adjacency", "Lake Nona regional roads"],
    image: "/images/communities/lake-nona.jpg",
    imageAlt: "Homes in Lake Nona, Orlando, Florida",
    related: ["conway", "orlando", "windermere"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "conway",
    name: "Conway",
    intro:
      "Conway is the unincorporated southeast Orlando community built around the Conway Chain of Lakes — about six miles from downtown, seven from Orlando International Airport, and the area Bear Team Real Estate has worked from for four decades. Our office sits on South Crystal Lake Drive, inside it.",
    lifestyle:
      "Life in Conway is organized around the water. Four public ramps reach the chain — Randolph Avenue and Ferncreek in unincorporated Orange County, Perkins and Venetian operated by neighboring Belle Isle — and Lake Conway itself covers roughly 1,771 acres with a mean depth of about 23 feet. Barber Park on Gatlin Avenue, an 81-acre Orange County park, carries the area's non-water recreation: a dog park, skate park, pickleball and sand volleyball courts, a splash playground, and rental pavilions. The nearest Orange County Library System branch is the Southeast Branch on South Semoran Boulevard, just outside the community's boundary.",
    locationContext:
      "Conway is a census-designated place in unincorporated Orange County, covering about 3.4 square miles of land per the 2020 Census. South Conway Road — signed as State Road 15 — runs north and south through it and gives the community its name. State Road 408, the East-West Expressway, crosses the northern edge with interchanges at Conway Road, Crystal Lake Drive and Bumby Avenue, putting downtown Orlando roughly twelve minutes away in free-flowing traffic and Orlando International Airport about seventeen. Because Conway is unincorporated, there is no city hall and no municipal police department: parks, boat ramps, environmental permitting and code enforcement all run through Orange County.",
    housingOverview:
      "Conway holds about 5,143 housing units, and the median one was built in 1975. Roughly three-quarters of the housing stock — about 74 percent — went up between 1950 and 1989, which is the single most useful fact about buying or selling here. Post-2010 construction is nearly nonexistent: fewer than thirty units in the whole community. This is an established area of detached houses, not a development pipeline. Just over 91 percent of units are single-family detached homes, one of the highest shares of any Orlando-area community, with small pockets of townhomes, low-rise condominiums and a modest number of mobile homes.",
    propertyTypes: [
      "Detached single-family homes (about 91% of units)",
      "Lakefront and canal-front homes on the Conway chain",
      "1950s-1980s homes on established lots",
      "Limited townhomes and low-rise condominiums",
      "Occasional teardown and infill redevelopment",
    ],
    buyerConsiderations: [
      "Which basin a property sits on matters. Orange County's code names them Little Lake Conway to the north, then the middle lobe of Lake Conway below the Hoffner Avenue bridge, then the south lobe below the Nela Avenue bridge, plus Lake Gatlin to the west. Waterfront value, boat access and navigability differ across those divisions — ask before assuming a dock reaches open water.",
      "Waterfront parcels fall under the Lake Conway Water and Navigation Control District, a dependent special district of Orange County created by special act of the Florida Legislature in the late 1950s. Its millage appears on the property tax bill and is not a city tax. Buyers relocating here regularly mistake it for one.",
      "Dock, seawall and shoreline work is permitted through the Orange County Environmental Protection Division under Chapter 15 of the county code, and applications inside the navigation district carry a minimum thirty-day review before a building permit can follow. Plan any dock project around that timeline rather than a closing date.",
      "With a median build year of 1975, roof age, electrical panels and plumbing materials drive insurability more than they do in newer Orlando suburbs. Get an insurance quote early in the inspection period, not at the end of it.",
      "Florida reassesses property at market value in the year following a sale, so the taxes a seller currently pays are not the taxes a buyer will pay. On long-held Conway properties — and many here are long-held — that gap can be substantial.",
    ],
    sellerConsiderations: [
      "Conway's scarcity of new construction is a selling point worth making explicit. A buyer who wants this location has almost no new-build alternative inside it.",
      "If the home is on the water, assemble the dock documentation before listing: permits, any navigation district correspondence, and seawall history. Buyers and their lenders ask, and gaps surface late.",
      "Homes built between 1950 and 1989 sell faster when the insurability questions are answered up front. A current four-point inspection and wind mitigation report, in hand at listing, removes the objection that most often stalls a Conway contract.",
      "Lot size and mature tree canopy are genuine differentiators against newer inventory further out, and they photograph better in some seasons than others. Timing the listing to the property is worth a conversation.",
      "Sellers moving within Florida should ask about transferring accumulated Save Our Homes benefit to the next homestead. It is not automatic, it is capped, and the filing deadline is March 1.",
    ],
    amenities: [
      "Conway Chain of Lakes (Lake Conway, about 1,771 acres)",
      "Barber Park, Gatlin Avenue — 81 acres, Orange County",
      "Randolph Avenue Boat Ramp (Orange County)",
      "Ferncreek Boat Ramp at Waterwitch Drive (Orange County)",
      "Lake Gatlin (about 68 acres)",
      "Orange County Library System, Southeast Branch",
    ],
    transportation: [
      "South Conway Road (State Road 15)",
      "State Road 408 (East-West Expressway) — Conway Road, Crystal Lake Drive and Bumby Avenue interchanges",
      "State Road 528 (Beachline Expressway) toward the airport",
      "Orlando International Airport — about 17 minutes",
      "Downtown Orlando — about 12 minutes",
    ],
    extraSections: [
      {
        heading: "Docks, boats and the water itself",
        body: [
          "This is the part of a Conway purchase that costs people money, and it is almost never explained before a contract. The chain is four connected bodies of water and Orange County's code names them precisely: Little Lake Conway at the north end, the middle lobe of Lake Conway below the Hoffner Avenue bridge, the south lobe below the Nela Avenue bridge, and Lake Gatlin to the west. Canals and under-road channels connect them — the Hoffner bridge carries a fender system, which tells you real vessel traffic passes beneath it — but which basin a house fronts still decides what its dock reaches without a bridge transit.",
          "A private dock in unincorporated Conway is permitted by the Orange County Environmental Protection Division under Chapter 15, Article IX of the county code, and that approval has to come before the building permit. Applications inside the Lake Conway Water and Navigation Control District carry a minimum thirty-day review. Jurisdiction changes at the city line: the City of Belle Isle has its own dock ordinance, and whether a Belle Isle dock also needs county approval is genuinely unsettled in the published code — confirm with both EPD at (407) 836-1400 and Belle Isle City Hall before planning any dock work on that side.",
          "A seawall is a much heavier lift than a dock and sellers routinely underestimate it. Building, replacing or hardening a shoreline requires a Shoreline Alteration / Dredge and Fill permit, which needs engineer-sealed plans, a site inspection, and approval at a Board of County Commissioners public hearing — then a thirty-day appeal period before the permit issues, and it is only valid for a year. That is a months-long path, not a pre-closing repair.",
          "Two things worth budgeting for. Orange County has proposed steep increases to environmental permit fees that have not changed since 2007, with a phase-in proposed to begin in October 2026 — anyone planning dock or shoreline work should confirm the adopted figures rather than the old ones. And the county is rewriting its boating ordinance, with a final Board hearing scheduled for December 2026 that would add idle-speed and slow-speed zones across the Conway chain. Those zones are not law yet, and any source telling you otherwise is ahead of the county.",
          "One myth worth killing: there is no local boat sticker for Lake Conway. Florida state vessel registration is all that is required to operate here — neither the navigation district, nor Orange County, nor Belle Isle imposes a local vessel registration. What people are thinking of is Belle Isle's ramp decal, and that is a parking permit for the tow vehicle at the Perkins ramp, not a registration for the boat.",
        ],
      },
      {
        heading: "Launching, and keeping a boat at the house",
        body: [
          "Four public ramps reach the chain. Randolph Avenue is open twenty-four hours for launching; Ferncreek runs sunrise to sunset; both are Orange County. Perkins and Venetian belong to Belle Isle — Perkins requires a resident parking decal for the tow vehicle and Venetian has no public parking at all. County ramp rules cap docking at a ramp to fifteen minutes and prohibit commercial activity, including picking up or dropping off passengers.",
          "Keeping the boat at home is governed by Orange County's zoning code, and the limits are specific. On a lot of a quarter-acre or less you may keep two boats or boat trailers total, with one in the front yard; up to a half-acre allows three; over a half-acre allows four. Boats and trailers of twenty-four feet or under can sit in a garage, carport, driveway, or on an approved surface immediately contiguous to the driveway — not elsewhere in the front or side yard. Anything stored in the rear half behind the house has to be screened from the right-of-way and set back from the lot lines. Canoes, jon boats and sailboats sixteen feet or under, and personal watercraft, are not counted as boats for these purposes, and length is measured bow to stern excluding the motor.",
          "If a boat, RV or trailer is part of why you want the property, check the lot size and the code together before you write the offer. It is a common and expensive surprise.",
        ],
      },
    ],
    image: "/images/communities/conway.jpg",
    imageAlt: "Sunset over Lake Conway from a covered private dock in southeast Orlando, Florida",
    gallery: [
      {
        src: "/images/communities/conway-lakefront.jpg",
        alt: "Aerial view of lakefront homes with a covered boat dock on the Conway Chain of Lakes",
      },
      {
        src: "/images/communities/conway-oaks.webp",
        alt: "Single-story Conway home under mature live oaks draped with Spanish moss",
      },
    ],
    related: ["belle-isle", "edgewood", "orlando"],
    reviewNote:
      "Facts sourced: 2020 Census and ACS 2020-2024 5-year estimates (population, housing units, build eras, unit types); Orange County Water Atlas (lake acreage and depth); Orange County government (navigation district, EPD dock permitting, Barber Park, boat ramps); Orange County BCC historical markers. Drive times are modeled free-flow estimates, not observed traffic. Re-verify the navigation district millage and any county fees before relying on them. Barber Park street number intentionally omitted - two county sources conflict.",
  },
  {
    slug: "edgewood",
    name: "Edgewood",
    intro:
      "Edgewood is the smallest of the three cities on the Conway chain — an incorporated city of about 2,758 people packed into roughly a square and a quarter of land on the chain's western side, with its own police department and city hall. Bear Team's office is a few minutes east of it.",
    lifestyle:
      "Edgewood's water is the western end of the Conway chain rather than Lake Conway's main body. Lake Jessamine, at roughly 294 acres, and Lake Gatlin, at about 68 acres, both sit within the city, and canals connect them onward to Little Lake Conway and the rest of the chain. Nearly a fifth of the city's total area is water — 0.30 of its 1.54 square miles. The city runs its own building and permitting, code compliance, planning and development, business tax and residential waste services from City Hall, which for a place this size is unusual and is much of the reason people choose the address.",
    locationContext:
      "Edgewood sits south of downtown Orlando along the South Orange Avenue corridor, west of Belle Isle and the main body of Lake Conway. The 2020 Census puts it at about 1.24 square miles of land plus 0.30 square miles of water. It is a genuinely separate municipality, not a neighborhood of Orlando: a five-member elected City Council serving staggered three-year terms, with the Council selecting its own President, and the Edgewood Police Department providing full-service law enforcement rather than the county sheriff.",
    housingOverview:
      "Edgewood holds about 1,239 housing units with a median build year of 1978, and its age profile is unlike either neighbour on the chain. Nearly 45 percent of everything here — 556 units — went up in the 1970s alone, the most concentrated single decade of any community Bear Team covers. It also kept building: about 16 percent dates from 2000 to 2009 and another 7 percent from 2010 on, so unlike Conway there is genuinely newer inventory inside the city limits. The other difference is form. Only about 61 percent of units are detached single-family homes, well below Conway's 91 percent and Belle Isle's 85 percent, which means Edgewood carries a substantially larger share of townhomes, condominiums and small multi-family buildings than either.",
    propertyTypes: [
      "Detached single-family homes (about 61% of units)",
      "Townhomes, condominiums and small multi-family",
      "1970s homes — nearly half the city's stock",
      "2000s and newer infill construction",
      "Lakefront on Lake Jessamine and Lake Gatlin",
    ],
    buyerConsiderations: [
      "Edgewood is its own city. Permits, code enforcement, planning and police all run through Edgewood City Hall rather than Orange County — a meaningful difference from unincorporated Conway next door, where every one of those goes to the county.",
      "The city's lakes are the western end of the Conway chain, not Lake Conway's main body. If open-water access to Lake Conway matters, confirm how a specific property's water connects: Lake Jessamine and Lake Gatlin reach the rest of the chain through canals, and what a given boat can pass through is a property-by-property question.",
      "Dock, seawall and shoreline work on these lakes still runs through the Orange County Environmental Protection Division, and waterfront parcels on the chain fall under the Lake Conway Water and Navigation Control District — whose millage appears on the tax bill and is not a city tax.",
      "With nearly half the housing stock built in the 1970s, roof age, electrical panels and plumbing materials drive insurability here more than square footage does. Get an insurance quote early in the inspection period.",
      "Because Edgewood kept building through the 2000s, a buyer comparing two homes inside the same small city may be comparing a 1974 house to a 2006 one. The insurance and maintenance picture between those is not close.",
      "Florida reassesses property at market value in the year after a sale, so a long-held Edgewood home's current tax bill is not what a buyer will pay.",
    ],
    sellerConsiderations: [
      "Edgewood's municipal status is under-marketed and it is a real differentiator — its own police department and city services, in a city of under three thousand people, is not something a Conway or unincorporated address can claim.",
      "If the home dates from the 1970s — and odds are close to even that it does — a current four-point inspection and wind mitigation report in hand at listing answers the question that most often stalls a contract on this stock.",
      "Sellers of older homes here compete against genuinely newer inventory a few streets away, which is not true in Conway. Pricing and presentation should account for that directly.",
      "On the water, assemble dock permits, any navigation district correspondence and seawall history before listing, and be clear in the marketing about which lake the property fronts and how it connects to the wider chain.",
      "Sellers buying again in Florida should ask about Save Our Homes portability early — it is capped, time-limited, and requires a separate filing alongside the new homestead application.",
    ],
    amenities: [
      "Lake Jessamine (about 294 acres)",
      "Lake Gatlin (about 68 acres)",
      "Canal access onward to the Conway chain",
      "Edgewood City Hall and Police Department",
      "South Orange Avenue corridor",
    ],
    transportation: [
      "South Orange Avenue",
      "Hoffner Avenue and Holden Avenue",
      "State Road 528 (Beachline Expressway)",
      "Interstate 4 via downtown Orlando",
      "Orlando International Airport — about 20 minutes",
    ],
    extraSections: [
      {
        heading: "Edgewood\u2019s water: the western end of the chain",
        body: [
          "Edgewood\u2019s lakes are not Lake Conway\u2019s main body, and that distinction matters when a listing says \u201cchain of lakes.\u201d Lake Jessamine, at roughly 294 acres, and Lake Gatlin, at about 68 acres, sit within the city, and both reach the wider Conway chain through canals rather than open water. Nearly a fifth of the city\u2019s total area is water: 0.30 of its 1.54 square miles.",
          "The city\u2019s own comprehensive plan identifies access to Lake Jessamine at the Woodsmere boat ramp, and access to the wider Conway chain via the county\u2019s Randolph ramp. Those are public access points \u2014 they are not the same thing as a right attached to a particular parcel.",
          "In practice that makes access a property-by-property question rather than a neighbourhood promise. A canal connection is genuine access, but clearance, depth, and the route to open water have to be confirmed for the individual parcel \u2014 and confirmed against the boat you actually intend to keep, not a boat in general. Ask before the inspection period closes.",
          "Dock permitting here is a two-stage process and people get caught by the first stage. Edgewood performs its own zoning review before an application goes on to Orange County, and if neighbours object it can end up in front of the City Council. Only after that does the county side proceed \u2014 Orange County Environmental Protection Division handles the environmental permit, and waterfront parcels fall under the Lake Conway Water and Navigation Control District, whose millage appears on the tax bill and is not a city tax. Budget for both reviews, not one.",
          "A seawall is a heavier lift again: engineer-sealed plans, a county site inspection, and approval at a Board of County Commissioners public hearing, followed by a thirty-day appeal period, with the permit valid one year. That is months, not a repair that fits inside a contract.",
        ],
      },
      {
        heading: "What being your own city actually buys you",
        body: [
          "Edgewood runs more of its own affairs than its size suggests. Building and permitting, code compliance, planning and development, business tax and residential waste are city departments, and the Edgewood Police Department provides full-service law enforcement rather than the county sheriff. A five-member elected City Council serves staggered three-year terms and selects its own President. For a city of under three thousand people on roughly a square and a quarter of land, that is unusual, and much of what the address is.",
          "The practical consequence for a buyer is that questions go somewhere different than they would a few streets away. Permits, code enforcement, zoning and planning are answered at Edgewood City Hall on Bagshaw Way, not at Orange County \u2014 the opposite of unincorporated Conway next door, where all of those run through the county. If you are buying a home with additions, a converted garage, a pool enclosure or a dock, the permit history lives with the city, and that is where to check before closing rather than after.",
          "It cuts both ways. City review can be quicker and more personal than a county process. It also means a second set of rules on some projects, and on waterfront work the county still holds jurisdiction regardless. Confirm which government owns a given approval before scheduling anything.",
        ],
      },
    ],
    image: "/images/communities/edgewood.webp",
    imageAlt: "Aerial view of an Edgewood, Florida lakefront home with the downtown Orlando skyline beyond",
    gallery: [
      {
        src: "/images/communities/edgewood-stone.webp",
        alt: "Stone and stucco single-story home on a wide lawn in Edgewood, Florida",
      },
      {
        src: "/images/communities/edgewood-sunset.webp",
        alt: "Edgewood, Florida ranch home at sunset with a mature palm in the front yard",
      },
      {
        src: "/images/communities/edgewood-city-hall.jpg",
        alt: "Edgewood City Hall entrance sign at 405 Bagshaw Way, Edgewood, Florida",
      },
    ],
    related: ["conway", "belle-isle", "orlando"],
    reviewNote:
      "Facts sourced: US Census TIGER (land and water area, GEOID 1219900) and ACS 2020-2024 5-year estimates (population, housing units, build eras, unit types); City of Edgewood official site (council structure, police department, city departments); Orange County Water Atlas (Lake Jessamine and Lake Gatlin acreage and jurisdiction); Orange County (navigation district, EPD dock permitting). Drive time to MCO is an estimate — verify before relying on it.",
  },
  {
    slug: "belle-isle",
    name: "Belle Isle",
    intro:
      "Belle Isle is its own incorporated city inside metropolitan Orlando — roughly 7,000 residents wrapped around the Conway Chain of Lakes, with more of its area under water than on land. It has been Bear Team territory for four decades.",
    lifestyle:
      "The city was founded to protect these lakes, and it still runs its life around them. Belle Isle operates its own boat ramps at Perkins and Venetian, and maintains fifteen named parks and beaches for a city of two and a half square miles of land — Cross Lake Beach, Swann Beach, Delia Beach, LaBelle Beach, Wallace Field, Peninsular Park and a string of pocket parks among them. Warren Park, the largest park inside the city limits, is owned by Orange County and includes a canoe launch, parking and restrooms. Burbank Avenue Open Space is kept deliberately as an unmaintained natural preserve.",
    locationContext:
      "Belle Isle sits south of downtown Orlando and northwest of Orlando International Airport, both roughly fifteen minutes away in free-flowing traffic. The city covers about 5.19 square miles in total — but only 2.41 of that is land. The remaining 2.78 square miles, more than half the city, is water. City Hall and the police department are on Nela Avenue. Several roads running through or beside the city are not under its jurisdiction, including Conway Road, Orange Avenue, Randolph Avenue, Hoffner Avenue west of Embassy Street, and portions of Matchett Road, Nela Avenue, Gondola Drive and Hansel Avenue — a distinction that matters more often than newcomers expect.",
    housingOverview:
      "Belle Isle holds about 3,040 housing units with a median build year of 1977. Roughly 72 percent were built between 1950 and 1989. Two things distinguish its housing stock from neighboring Conway: it retains the oldest inventory in the area, with about 85 units predating 1940, and unlike Conway it has continued to add homes — roughly 200 units built since 2010, about 6.7 percent of the total. Just over 85 percent of units are detached single-family homes, with a meaningful cluster of small multi-family buildings in the five-to-nine-unit range.",
    propertyTypes: [
      "Detached single-family homes (about 85% of units)",
      "Lakefront homes on Lake Conway and Little Lake Conway",
      "Pre-1940 homes — the oldest stock on the chain",
      "Post-2010 infill and rebuilt lakefront properties",
      "Small multi-family buildings",
    ],
    buyerConsiderations: [
      "Belle Isle is a municipality, not a neighborhood. It has its own city council of seven district representatives plus a mayor, its own police department, its own code compliance and its own planning and zoning. Permitting and code questions go to the city, not to Orange County — except on the roads and lakes the city does not govern.",
      "Utilities do not come from the city and they are not uniform across it. Belle Isle's own audited financial statements say Orange County Utilities and the Orlando Utilities Commission provide water and — the city's word — \"limited\" sanitary sewer service. Limited means exactly what it sounds like: not every property is on sewer, and septic systems exist here. Confirm which one serves a specific address before you write an offer, and if it is septic, budget for a septic inspection rather than only a sewer scope. Electric is likewise worth checking per address: the city's financial statements name Duke Energy, while its utilities page routes residents to OUC to start and stop service. Waste and recycling collection is contracted.",
      "The Lake Conway Water and Navigation Control District millage appears on Belle Isle tax bills and is a county district, not a city tax. The city says so on its own site because the question comes up constantly.",
      "Boat ramp access is not automatic, and living in Belle Isle does not by itself put you on the water. The city's Perkins ramp requires a resident parking decal for the tow vehicle — $50 a year, prorated quarterly, expiring 31 May — and the Venetian ramp has no public parking at all. Two more ramps, Randolph and Ferncreek, are Orange County's. There is no local boat registration for Lake Conway; Florida state vessel registration is all that is required, and the Belle Isle decal is a parking permit, not a boat sticker. If lake access is the reason for the purchase, confirm how that specific property reaches the water.",
      "Docks are the one place where being a city cuts the other way. Belle Isle has its own dock ordinance — Chapter 48 of the city code — requiring a city permit for a new dock, an addition, or the repair of a non-conforming one. Whether a Belle Isle dock ALSO needs an Orange County EPD permit is genuinely unsettled in the published code: the county chapter reads as countywide, while the city ordinance refers to county authorization only \"when under county jurisdiction.\" No published source resolves it. Call both — EPD at (407) 836-1400 and Belle Isle City Hall — before you plan dock work, and do not rely on a contractor's assurance.",
      "A seawall is a far heavier lift than a dock. Shoreline hardening or dredging requires a county Shoreline Alteration permit with engineer-sealed plans, a site inspection, and approval at a Board of County Commissioners public hearing, followed by a thirty-day appeal period — and the permit is good for one year. That is a months-long path, not a repair you slot in before closing.",
      "Older housing stock means insurability deserves early attention — roof age and system updates drive both premium and availability here more than square footage does.",
    ],
    sellerConsiderations: [
      "Belle Isle's municipal status is a genuine differentiator over comparable lakefront elsewhere on the chain, and it is routinely under-marketed. Its own police department and city government are part of what the address is.",
      "Waterfront listings should carry documentation before they go live: dock permits, seawall history, and clarity on which lake or pool the property fronts and how it connects to the rest of the chain.",
      "Where a home predates 1940 — and Belle Isle has the area's largest share of those — a current four-point inspection and wind mitigation report answers the insurance question before it becomes a contract contingency.",
      "Because the city has continued to add homes since 2010, sellers of older properties are competing against genuinely newer inventory within the same city limits. Pricing and presentation strategy should account for that; it is not the same market as Conway next door.",
      "Sellers buying again in Florida should ask about Save Our Homes portability early. It requires a separate filing alongside the new homestead application and is capped.",
    ],
    amenities: [
      "Lake Conway and Little Lake Conway frontage",
      "Warren Park — canoe launch, largest park in the city (Orange County-owned)",
      "Perkins Boat Ramp (city, resident decal parking)",
      "Venetian Boat Ramp (city, no public parking)",
      "Cross Lake Beach, Swann Beach, Delia Beach, LaBelle Beach",
      "Wallace Field, Regal Park, Trimble Park, Peninsular Park",
      "Burbank Avenue Open Space — natural preserve",
    ],
    transportation: [
      "Nela Avenue and Hoffner Avenue",
      "Conway Road and Orange Avenue (county and city of Orlando roads)",
      "State Road 528 (Beachline Expressway) toward the airport",
      "Orlando International Airport — about 15 minutes",
      "Downtown Orlando — about 15 minutes",
    ],
    extraSections: [
      {
        heading: "What \u201clake access\u201d actually means here",
        body: [
          "This is the most misunderstood thing about buying in Belle Isle, and the listing portals are no help. A Belle Isle address does not by itself put you on the Conway chain. More than half the city\u2019s area is water \u2014 2.78 of its 5.19 square miles \u2014 but the houses are not all on it, and the phrase \u201clake access\u201d covers four genuinely different things worth very different money.",
          "Direct lakefront means the parcel touches open water and can, subject to permitting, carry its own dock. Canal-front means it touches water that reaches the lake through a channel \u2014 real access, but what a given boat can pass through is a property-by-property question, not a neighbourhood one. Deeded or community access means the parcel itself is dry and the right to reach water comes from somewhere else: an association easement, a shared dock, a platted lake lot. Lake view means exactly that and nothing more. A listing may use \u201clake access\u201d for any of the last three. Ask which one, in writing, before the inspection period runs out.",
          "Public access is different and every resident does have it. The city runs two ramps: Perkins, where trailer parking needs a resident decal for the tow vehicle at $50 a year, prorated quarterly and expiring 31 May; and Venetian, which has no public parking at all. Orange County runs two more on the chain, Randolph and Ferncreek. Warren Park, the largest park inside the city, has a canoe launch and is county-owned.",
          "One myth worth killing: there is no local boat registration for Lake Conway. Florida state vessel registration is all that is required \u2014 the navigation district has no registration provision, and neither Orange County nor Belle Isle imposes one. The decal people are thinking of is a parking permit for the tow vehicle at a ramp, not a sticker for the boat.",
        ],
      },
      {
        heading: "Docks, seawalls, and which government you answer to",
        body: [
          "Belle Isle being its own city usually works in an owner\u2019s favour. On docks it cuts the other way, because it adds a layer rather than replacing one. The city has its own dock ordinance at Chapter 48 of its code, requiring a city permit for a new dock, an addition, or repair of a non-conforming one. Whether a Belle Isle dock also needs an Orange County EPD permit is unresolved in the published code \u2014 the county chapter reads as countywide, while the city ordinance refers to county authorisation only \u201cwhen under county jurisdiction.\u201d No published source settles it. Call both, EPD at (407) 836-1400 and Belle Isle City Hall, and do not take a contractor\u2019s word for which applies.",
          "Waterfront parcels also sit inside the Lake Conway Water and Navigation Control District, an Orange County special district created by act of the Florida Legislature in the late 1950s. Its millage appears on the Belle Isle tax bill and is not a city tax \u2014 the city says so on its own website because residents ask constantly. Applications inside the district carry a minimum thirty-day review before a building permit can follow, so a dock project runs on that clock, not on a closing date.",
          "A seawall is a different order of undertaking. Hardening or dredging a shoreline requires a county Shoreline Alteration permit: engineer-sealed plans, a site inspection, approval at a Board of County Commissioners public hearing, then a thirty-day appeal period before issue \u2014 valid one year. That is months. A seller who finds a failing seawall mid-contract is not fixing it before closing, and a buyer should price that in rather than assume a credit covers it.",
          "Two changes are coming. Orange County has proposed steep increases to environmental permit fees unchanged since 2007, phasing in from October 2026. And the county is rewriting its boating ordinance, with a final Board hearing set for December 2026 that would add idle-speed and slow-speed zones across the chain. Neither is settled law yet.",
        ],
      },
    ],
    image: "/images/communities/belle-isle.jpg",
    imageAlt: "Lakefront homes in Belle Isle, Florida on the Conway Chain of Lakes",
    related: ["conway", "edgewood", "orlando"],
    reviewNote:
      "Facts sourced: 2020 Census and ACS 2020-2024 5-year estimates (population, land and water area, housing units, build eras); City of Belle Isle official site (government structure, history, parks, boat ramps, jurisdiction road list); City of Belle Isle FY2022 audited financial statements (utility providers - the 'limited sanitary sewer' wording is theirs); Belle Isle Code Ch. 48 Art. II (city dock permit) and Sec. 18-20 (ramp decal); Orange County (navigation district, EPD dock permitting, Shoreline Alteration permit, Warren Park). NOTE: the city's financial statements name Duke Energy for electric while its utilities page routes residents to OUC - the page reports the conflict rather than picking one. Whether a Belle Isle dock also needs a county EPD permit is unresolved in the published code; the page says so. Drive times are modeled free-flow estimates. Park street addresses intentionally omitted - the city publishes none.",
  },
  {
    slug: "college-park",
    name: "College Park",
    intro:
      "A historic Orlando neighborhood northwest of downtown, with brick streets, 1920s–1950s architecture, and the Edgewater Drive main street.",
    lifestyle:
      "Locally owned restaurants and shops along Edgewater Drive, lakes and parks stitched between residential blocks, and quick access to downtown Orlando.",
    locationContext:
      "Immediately northwest of downtown Orlando, bounded roughly by Lake Ivanhoe and the Dubsdread area.",
    housingOverview:
      "Bungalows, cottages, and traditional homes from the 1920s onward, alongside renovated properties and selective new construction on infill lots.",
    propertyTypes: ["Historic bungalows", "Cottages", "Renovated traditional homes", "Infill new construction"],
    buyerConsiderations: [
      "Older housing stock benefits from careful inspection and insurance review",
      "Renovation quality varies widely between updated homes",
      "Lot sizes and garages differ from newer suburban norms",
    ],
    sellerConsiderations: [
      "Character details are strong selling points when presented well",
      "Pricing must account for renovation level relative to neighbors",
    ],
    amenities: ["Edgewater Drive district", "Dubsdread Golf Course", "Lake Ivanhoe", "Albert Park", "Orlando Urban Trail access"],
    transportation: ["US 441 / Orange Blossom Trail access", "Interstate 4 via Princeton Street", "SunRail Florida Hospital station proximity"],
    image: "/images/communities/college-park.jpg",
    imageAlt: "Homes in College Park, Orlando, Florida",
    related: ["winter-park", "orlando", "metrowest"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "dr-phillips",
    name: "Dr. Phillips",
    intro:
      "A southwest Orange County area along the Butler Chain of Lakes, adjacent to Orlando's Restaurant Row and the tourism corridor.",
    lifestyle:
      "Restaurant Row dining on Sand Lake Road, proximity to Universal Orlando and International Drive, and established communities arranged around lakes and golf.",
    locationContext:
      "Southwest of downtown Orlando between Universal Orlando and Windermere, with the Butler Chain of Lakes to the west.",
    housingOverview:
      "Established gated and non-gated communities from the 1980s–2000s, lakefront estates, golf-community homes, townhomes, and condominiums.",
    propertyTypes: ["Gated-community homes", "Lakefront estates", "Golf-community homes", "Townhomes", "Condominiums"],
    buyerConsiderations: [
      "HOA standards and amenities vary between communities",
      "Butler Chain lakefront involves specialized diligence",
      "Short-term-rental rules differ by community and zoning",
    ],
    sellerConsiderations: [
      "Community reputation and amenities factor into buyer expectations",
      "Presentation standards are high in this segment",
    ],
    amenities: ["Restaurant Row on Sand Lake Road", "Butler Chain of Lakes", "Dr. Phillips Community Park", "Orange County National-area golf", "Proximity to Universal Orlando"],
    transportation: ["Interstate 4", "Sand Lake Road / SR 482", "Apopka-Vineland Road", "SR 528 access"],
    image: "/images/communities/dr-phillips.jpg",
    imageAlt: "Homes in Dr. Phillips, Orlando, Florida",
    related: ["windermere", "metrowest", "orlando"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "windermere",
    name: "Windermere",
    intro:
      "A west Orange County town among the Butler Chain of Lakes, pairing a small historic downtown with estate communities and golf-course living.",
    lifestyle:
      "The historic downtown hosts a weekly farmers market and community events; surrounding communities are organized around lakes, golf, and conservation areas.",
    locationContext:
      "West of Orlando and south of Winter Garden, largely surrounded by the Butler Chain of Lakes.",
    housingOverview:
      "Lakefront estates, custom homes, golf-community residences, and newer single-family neighborhoods in the surrounding unincorporated areas.",
    propertyTypes: ["Lakefront estates", "Custom homes", "Golf-community homes", "Newer single-family neighborhoods"],
    buyerConsiderations: [
      "Town-of-Windermere addresses versus surrounding unincorporated communities",
      "Lakefront diligence: docks, shoreline, and insurance",
      "Community fees and standards vary significantly",
    ],
    sellerConsiderations: [
      "Estate and lakefront marketing benefits from specialized presentation",
      "Accurate positioning against nearby new construction matters",
    ],
    amenities: ["Butler Chain of Lakes", "Historic downtown Windermere", "Weekly farmers market", "Golf communities", "Conservation and trail areas"],
    transportation: ["SR 535 / Winter Garden-Vineland Road", "Conroy-Windermere Road", "SR 429 access", "Proximity to SR 408 and I-4"],
    image: "/images/communities/windermere.jpg",
    imageAlt: "Homes in Windermere, Florida",
    related: ["dr-phillips", "metrowest", "lake-nona"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "metrowest",
    name: "MetroWest",
    intro:
      "A master-planned southwest Orlando community built around a golf course, with a mix of condominiums, townhomes, and single-family neighborhoods.",
    lifestyle:
      "Golf, lakeside paths, and quick connections to downtown Orlando, Universal Orlando, and the attractions corridor.",
    locationContext:
      "Southwest Orlando between SR 408 and Kirkman Road, roughly ten minutes from downtown.",
    housingOverview:
      "Condominium communities, townhomes, and single-family neighborhoods developed from the late 1980s onward around the MetroWest Golf Club.",
    propertyTypes: ["Condominiums", "Townhomes", "Single-family homes", "Golf-view residences"],
    buyerConsiderations: [
      "Condominium financing and association review are central here",
      "Investor activity affects some buildings' financing options",
      "Master-association plus sub-association fee structures",
    ],
    sellerConsiderations: [
      "Unit position, view, and association health affect buyer pools",
      "Clear documentation speeds condominium sales",
    ],
    amenities: ["MetroWest Golf Club", "Turkey Lake Park proximity", "Veranda Park town center", "Lakeside walking paths"],
    transportation: ["SR 408", "Kirkman Road / SR 435", "Interstate 4 via Conroy Road", "Proximity to Universal Orlando"],
    image: "/images/communities/metrowest.jpg",
    imageAlt: "Homes in MetroWest, Orlando, Florida",
    related: ["dr-phillips", "orlando", "college-park"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "pine-hills",
    name: "Pine Hills",
    intro:
      "One of Orlando's largest established communities, west of downtown, with mid-century housing stock and ongoing reinvestment.",
    lifestyle:
      "Neighborhood parks, community centers, international dining corridors, and continuing public and private reinvestment along the Pine Hills Road corridor.",
    locationContext:
      "West of downtown Orlando, generally between US 441 and SR 429, with SR 408 along its southern edge.",
    housingOverview:
      "Predominantly mid-century concrete-block single-family homes on established lots, along with duplexes, small multifamily, and renovation opportunities.",
    propertyTypes: ["Mid-century block homes", "Renovation opportunities", "Duplexes and small multifamily", "Established-lot single-family"],
    buyerConsiderations: [
      "Condition varies widely; inspections and renovation budgets matter",
      "Strong interest from both owner-occupants and investors",
      "Verify permitting history on renovated properties",
    ],
    sellerConsiderations: [
      "Renovated homes are positioned differently than as-is properties",
      "Multiple buyer types (owner-occupant, investor) shape offer strategy",
    ],
    amenities: ["Barnett Park", "Pine Hills Trail", "Community centers", "International dining corridors"],
    transportation: ["SR 408 access", "US 441", "Pine Hills Road corridor", "LYNX routes toward downtown"],
    image: "/images/communities/pine-hills.jpg",
    imageAlt: "Homes in Pine Hills, Florida",
    related: ["metrowest", "college-park", "orlando"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "baldwin-park",
    name: "Baldwin Park",
    intro:
      "A planned neighborhood in northeast Orlando built on the former Naval Training Center Orlando site, where architecture, street layout, and garage placement are governed by a City of Orlando ordinance rather than by an HOA design committee alone.",
    lifestyle:
      "A walkable Village Center along New Broad Street holds retail, restaurants, and services, with a connected network of public parks, greens, and lakefront open space woven through the residential blocks. Roughly 200 acres of parks and 250 acres of lakes were opened to public access as part of the redevelopment.",
    locationContext:
      "Northeast Orlando, inside City of Orlando limits, bordered by Winter Park to the north and Audubon Park to the west, with Colonial Drive (SR 50) as the nearest major east-west arterial and expressway access south to SR 408.",
    housingOverview:
      "Built out in the early-to-mid 2000s under a 1998 Planned Development Ordinance that divides the neighborhood into four character districts — Village Center Core, Village Center General, Neighborhood Center, and Neighborhood General. Housing includes single-family homes, townhomes, and multifamily buildings, most of them served by rear alleys rather than front driveways.",
    propertyTypes: [
      "Alley-served single-family homes",
      "Townhomes",
      "Condominiums and multifamily buildings",
      "Lakefront and park-facing homes",
      "Live-work and mixed-use units near the Village Center",
    ],
    buyerConsiderations: [
      "Two separate assessments apply: Urban Orlando Community Development District charges, which appear on the tax bill and may include debt service on infrastructure bonds, plus Property Owners Association dues — request the CDD budget and an estoppel letter before closing",
      "Architectural rules are written into the City's PD Ordinance, not only into HOA covenants: garage doors facing a street are limited to nine feet wide, front driveways are permitted only where there is no alley access, porches must be at least six feet deep and may not be glass-enclosed at the frontage, and frontage walls must be brick or stucco",
      "Roof replacement is constrained by ordinance — sloped roofs must use clay tile, painted metal, concrete tile, wood shingle, fiberglass shingle, or dimensional asphalt, with principal slopes between 3:12 and 8:12",
      "Several separate condominium and sub-associations exist alongside the master association; confirm which documents govern a specific address",
      "Many ponds inside the neighborhood are CDD-owned stormwater retention facilities carrying maintenance and access easements rather than private amenity frontage",
      "The site is a former federal installation with a documented BRAC environmental cleanup history; buyers doing full diligence can request the Navy's administrative record to confirm whether land use controls apply to a specific parcel",
    ],
    sellerConsiderations: [
      "Alley-served design, park frontage, and Village Center proximity are the differentiators buyers compare within the neighborhood",
      "Unpermitted changes to garages, driveways, porches, or frontage materials can surface late in a transaction because the standards are enforceable at the ordinance level — resolve them before listing",
      "Buyers frequently misread CDD assessments as ordinary HOA dues; presenting both figures clearly up front prevents renegotiation after inspection",
    ],
    amenities: [
      "Blue Jacket Park — 75 acres, with baseball, softball, and soccer fields, two playgrounds, pavilions, fitness stations, and paved walking and bike trails",
      "Navy History Wall commemorating the former Naval Training Center",
      "New Broad Street Village Center — retail, restaurants, and services",
      "Lake Baldwin Park in adjacent Winter Park — 23 acres with an off-leash dog area, dock, and a boat ramp restricted to non-gas engines",
      "Cady Way Trail — 7.2 miles of paved trail linking Orlando and Winter Park",
      "Grace Hopper Hall community facility",
    ],
    transportation: [
      "Colonial Drive (SR 50)",
      "SR 408 East-West Expressway for downtown and eastbound access",
      "SR 417 and SR 528 connections toward Orlando International Airport",
      "LYNX bus service on the surrounding arterials",
      "Nearest SunRail stations are Winter Park/Amtrak to the north and the downtown Orlando stations to the southwest",
    ],
    image: "/images/communities/baldwin-park.jpg",
    imageAlt: "Homes in Baldwin Park, Orlando, Florida",
    related: ["winter-park", "college-park", "orlando"],
    reviewNote:
      "Facts sourced from the City of Orlando Baldwin Park PD Ordinance and Appendix F architectural standards, orlando.gov park records, City of Winter Park park records, Orange County Parks (Cady Way Trail), and EPA BRAC records. Deliberately omits distance-to-downtown mileage, Lake Baldwin acreage, total unit count, and named architectural styles — all were single-source or conflicting. Verify current CDD assessment amounts and POA dues before quoting figures to clients.",
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    intro:
      "An incorporated west Orange County city on the south shore of Lake Apopka, where a brick-paved historic downtown and two National Register districts sit alongside a housing stock that is roughly two-thirds newer than 2000.",
    lifestyle:
      "Downtown Plant Street anchors the city — the restored 1935 Garden Theatre, a year-round Saturday farmers market at the Downtown Pavilion drawing more than 100 vendors, the Winter Garden Heritage Museum in the 1923 brick depot, and the West Orange Trail running straight through the middle of it.",
    locationContext:
      "West Orange County on Lake Apopka's south shore, adjoining the Town of Oakland to the west and the City of Ocoee to the east, with Horizon West to the south. SR 429 runs along the east and south edges; SR 50, SR 438 (Plant Street), and Winter Garden Vineland Road serve the city directly.",
    housingOverview:
      "Census year-built data shows about 65% of the city's roughly 17,300 housing units were built in 2000 or later, with a small but genuine pre-1950 core of roughly 244 units concentrated in the historic districts. The city's own historic survey dates the oldest remaining buildings to about 1890, with most historic structures built between 1915 and 1940.",
    propertyTypes: [
      "Bungalow/Craftsman, Prairie School, and Colonial Revival homes in the historic residential district",
      "Detached single-family homes (the large majority of the housing stock)",
      "Townhomes",
      "Apartments and condominiums",
      "Homes inside Community Development Districts",
    ],
    buyerConsiderations: [
      "A Winter Garden mailing address does not mean a City of Winter Garden property — Orange County's address database shows most 34787 addresses are in unincorporated Orange County. Jurisdiction determines millage, permitting authority, code enforcement, utility provider, and golf-cart-district eligibility, and must be confirmed parcel by parcel",
      "Three Community Development Districts have the City as their local governing authority: Stoneybrook West (605 acres), Hickory Hammock (381 acres), and Winter Garden Village at Fowler Groves (175 acres, essentially commercial). CDD debt-service and operations assessments appear as separate non-ad-valorem line items on the tax bill, are charged per unit rather than by value, and are not reduced by homestead exemption",
      "On a CDD property, confirm the remaining debt-service balance and amortization term, and whether the seller has prepaid the bond portion — it materially changes the annual carry",
      "Inside the roughly 116-acre Historic Downtown Architectural Overlay (about 270 properties), alterations, demolitions, and new construction require a Certificate of Approval from the Architectural Review and Historic Preservation Board before work begins. Note the instrument is a Certificate of Approval, not the Certificate of Appropriateness used by the City of Orlando",
      "The ARHPB meets monthly on the third Tuesday at 6:30 p.m. — build a review cycle measured in weeks, not days, into contract and inspection timelines",
      "National Register listing alone imposes no restriction on a private owner; the local overlay is the layer that binds",
      "Flood mapping in and around the city includes Special Flood Hazard Areas A, AE (including floodway) and AH, plus shaded Zone X, driven by Lake Apopka frontage and interior wetlands — pull the parcel-specific FEMA determination rather than inferring from the neighborhood",
    ],
    sellerConsiderations: [
      "Historic-district provenance and downtown walkability are genuine differentiators, but only for the small share of stock that actually sits inside the overlay",
      "A prepaid CDD bond is a real, quantifiable selling point — document it rather than leaving buyers to assume the worst",
      "Buyers frequently confuse the mailing address with city limits; establishing jurisdiction up front prevents renegotiation late in the deal",
    ],
    amenities: [
      "Historic downtown Plant Street with the Downtown Pavilion and interactive fountain",
      "Garden Theatre — opened 1935, restored and reopened 2008, 295 seats",
      "Winter Garden Farmers Market — Saturdays year-round, 100+ vendors",
      "Winter Garden Heritage Museum in the 1923 brick depot, and the Central Florida Railroad Museum",
      "Newton Park (8.5 acres) with the city fishing pier on Lake Apopka",
      "Veteran's Memorial Park (11.5 acres), Sam Williams Little League/Walker Field (15.13 acres), Dr. Bradford Memorial Park (5 acres), Central Park (1.62 acres)",
      "West Orange Park (47.49 acres) and the West Orange Recreation Center nearby",
      "Lake Apopka — 30,909 acres, Florida's fourth-largest lake — with the Lake Apopka North Shore restoration area, the 11-mile Wildlife Drive, and 20+ miles of Loop Trail",
    ],
    transportation: [
      "West Orange Trail — 22.32 miles, with Winter Garden Station at 455 E Plant Street and bike rental on site",
      "SR 429 Daniel Webster Western Beltway, with SR 50 and CR 535 interchanges",
      "SR 408 East-West Expressway for the downtown Orlando connection",
      "Florida's Turnpike to the east; SR 528 Beachline toward Orlando International Airport",
      "LYNX service on the West Colonial corridor, including a Winter Garden circulator",
      "A City-administered Golf Cart District with registration and a published district map (Ordinance 09-53)",
      "No SunRail station in west Orange County — the nearest stations are LYNX Central and Church Street in downtown Orlando",
    ],
    image: "/images/communities/winter-garden.jpg",
    imageAlt: "Homes in Winter Garden, Florida",
    related: ["horizon-west", "windermere", "orlando"],
    reviewNote:
      "Sourced from cityofwintergarden.com, Orange County GIS (address points, parks, CDD layers), Orange County Tax Collector, Census ACS B25034/B25024 (2020–2024 5-year), NRHP records (refs 96000850 and 96000849, both listed 8/1/1996), SJRWMD, and Orange County Water Atlas. LYNX route numbers deliberately omitted — verify against current schedules before publishing any. Verify current CDD assessment amounts directly with each district.",
  },
  {
    slug: "horizon-west",
    name: "Horizon West",
    intro:
      "A 20,704-acre planned village system in unincorporated southwest Orange County — five villages and a town center separated by greenbelts, adopted as a county planning framework in 1995 and built almost entirely since 2000.",
    lifestyle:
      "Village and neighborhood centers, the Hamlin town-center district, and an extensive network of greenbelts, trails, ponds and parks structure daily life here. Horizon West Regional Park covers 215 acres with hiking and equestrian trails.",
    locationContext:
      "Unincorporated southwest Orange County, bordered by the City of Winter Garden to the north, the Town of Windermere and the Butler Chain to the east, Walt Disney World property to the south and southwest, and Lake County to the west. SR 429 runs north–south through it; CR 535, Avalon Road, New Independence Parkway, Seidel Road, Reams Road and Ficquette Road serve the villages.",
    housingOverview:
      "Census year-built data shows 97.2% of roughly 23,800 housing units were built in 2000 or later and 73.7% since 2010 — effectively a single-generation build-out. Pre-1990 stock totals only about 490 units, scattered rural remnants consistent with the plan's Estate Rural and Vested Development categories.",
    propertyTypes: [
      "Estate and Estate Home district lots",
      "Village Home and Garden Home district single-family",
      "Townhomes",
      "Apartment district multifamily and condominiums",
      "Urban residential and mixed-use near village and town centers",
    ],
    buyerConsiderations: [
      "Marketed community names are not the official villages, and the distinction matters when reading county records: Hamlin sits in Town Center; Independence, Summerport and Summerlake sit in the Village of Bridgewater; Waterleigh sits in Village H",
      "Entirely unincorporated — Orange County handles permitting, code enforcement, and services. There is no city millage, no municipal utility, and no municipal architectural or historic review",
      "Most Horizon West property carries a Winter Garden or Windermere mailing address while being outside both municipalities; roughly 93% of 34786 'Windermere' addresses are outside the Town of Windermere",
      "Community Development District assessments are widespread here and appear as separate per-unit non-ad-valorem line items on the tax bill, unaffected by homestead exemption — confirm the district, the remaining debt-service term, and whether the bond portion has been prepaid",
      "Development is governed by the Horizon West Village Planned Development Code, a separate Town Center code, and an Architectural Design Standards Guidebook — exterior changes and additions should be checked against the applicable village code and the relevant HOA",
      "With 97% of stock built since 2000, resales compete directly against active new construction; builder incentives on comparable nearby product set the ceiling on a resale price",
    ],
    sellerConsiderations: [
      "Lot position relative to greenbelt, pond, or trail frontage is one of the few durable differentiators in a market of similar-age product",
      "Upgrades and elevation differences carry disproportionate weight where the alternative is a builder's base model down the road",
      "A prepaid CDD bond should be documented and presented — it is a real reduction in the buyer's annual carry",
    ],
    amenities: [
      "Horizon West Regional Park — 215 acres, with hiking and equestrian trails, picnic areas and a playground",
      "Hamlin town-center district with retail and dining",
      "Independence Park (6.24 acres) and Lakeside Village Park (8.86 acres)",
      "Summerlake Park and Summerport neighborhood parks",
      "Deputy Scott Pine Community Park",
      "An extensive greenbelt, pond-buffer and trail network built into the village plan",
    ],
    transportation: [
      "SR 429 Daniel Webster Western Beltway running through the area",
      "CR 535 / Winter Garden Vineland Road and Avalon Road as principal arterials",
      "New Independence Parkway, Seidel Road, Reams Road and Ficquette Road as village connectors",
      "I-4 to the southeast and Florida's Turnpike to the east",
      "The closest of Bear Team's service areas to the Walt Disney World corridor",
      "No SunRail station — the nearest stations are in downtown Orlando",
    ],
    image: "/images/communities/horizon-west.jpg",
    imageAlt: "Homes in Horizon West, Florida",
    related: ["winter-garden", "windermere", "dr-phillips"],
    reviewNote:
      "Sourced from Orange County Planning, Orange County GIS (Horizon West Village Specific Area Plan layer, SAP district layer, address points, parks), and Census ACS B25034/B25024 (2020–2024 5-year). Village assignments for marketed community names were derived by point-in-polygon of county address points against the county village layer. Village acreages deliberately omitted as GIS-derived approximations. Straight-line distances omitted — they are not driving distances.",
  },
  {
    slug: "hunters-creek",
    name: "Hunter's Creek",
    intro:
      "A built-out master-planned community in unincorporated south Orange County, developed as a single project and platted as numbered tracts rather than named subdivisions — the closest of Bear Team's service areas to Orlando International Airport.",
    lifestyle:
      "Seven association-owned parks anchor the community, with tennis, racquetball, basketball, soccer and multi-purpose fields, two dog parks, fishing access, and walking paths connecting the neighborhoods.",
    locationContext:
      "Unincorporated south Orange County covering roughly 6.5 to 7 square miles, south of the Beachline and west of Orange Blossom Trail. John Young Parkway runs along the west with an SR 417 interchange; Florida's Turnpike lies east, Central Florida Parkway north, and Osceola Parkway and US 192 south.",
    housingOverview:
      "Census year-built data shows 53.1% of roughly 9,400 housing units date to 1990–1999 and 93.1% to 1980–2009, with post-2010 construction under 5%. The community is effectively built out — a buyer here is almost always buying resale.",
    propertyTypes: [
      "Detached single-family homes across 35 platted neighborhoods",
      "Condominiums — Audubon Villas, Capri, Golfview, Villanova and Park Place are separately platted condominium properties",
      "Garden-style apartment and condominium buildings (the 10-to-19-unit category is unusually large here)",
      "One townhome neighborhood",
      "Homes fronting Lake Calabay, Mallard Lake, and the golf course",
    ],
    buyerConsiderations: [
      "Title and plat references read as numbered tracts — HUNTERS CREEK TR 135, TR 430-A and so on — rather than named subdivisions, which surprises buyers and agents unfamiliar with the community",
      "Entirely unincorporated Orange County: no municipal government, no city millage, no city permitting, and no municipal architectural review. Governance is Orange County plus the master association",
      "Hunter's Creek Community Association operates a Community Standards and Architectural Review function with published guidelines and application requirements for fences, enclosures, exterior paint colors and pools — approval is required before work begins",
      "Master association assessments apply community-wide, and condominium properties carry their own separate association budgets, reserves and estoppel requirements on top",
      "For the condominium inventory, Florida's milestone inspection and structural integrity reserve study requirements are live considerations given the 1990s construction era — request the association's current reserve and inspection status",
      "With almost no new construction, comparable sales rather than builder pricing set value; conversely there is no builder inventory competing against a resale",
      "Housing of this era commonly warrants attention to roof age, HVAC, polybutylene or galvanized supply lines, and wind-mitigation credits — confirm by inspection rather than by assumption",
    ],
    sellerConsiderations: [
      "In a market of same-era homes, condition, systems age and documented updates are the primary differentiators",
      "Wind mitigation and roof documentation directly affect a buyer's insurance quote and therefore their offer",
      "Park, lake, and golf-course frontage are the durable location premiums within the community",
    ],
    amenities: [
      "Osprey Park, 5100 Town Center Blvd — tennis, basketball, ball fields, dog park, fishing, social center, veterans monument",
      "Eagle Park, 2950 Hunter's Creek Blvd — racquetball, tennis, community building, fishing dock",
      "Vista Park I and Vista Park II on Hunter's Vista Blvd — dog park, soccer fields, playgrounds",
      "Mallard Pointe Park, Calabay Park, and Braddock Oak Park",
      "Deputy Brandon Coates Community Park — 27.01 acres, Orange County",
      "Lester Mandell Park — 7.75 acres, Orange County",
      "Hunter's Creek Golf Course, a separately platted tract within the community",
    ],
    transportation: [
      "SR 417 Central Florida GreeneWay with a John Young Parkway interchange",
      "John Young Parkway as the principal surface arterial",
      "Florida's Turnpike to the east; US 17-92-441 Orange Blossom Trail parallel to the east",
      "Central Florida Parkway northwest toward the International Drive area and SR 528",
      "The shortest airport access of Bear Team's service areas — SR 417 or Central Florida Parkway to SR 528",
      "No SunRail station; the nearest are Meadow Woods and Sand Lake Road, both requiring a drive",
    ],
    image: "/images/communities/hunters-creek.jpg",
    imageAlt: "Homes in Hunter's Creek, Florida",
    related: ["lake-nona", "orlando", "conway"],
    reviewNote:
      "Sourced from Orange County (Commission District 1) descriptions, Orange County GIS plat, address-point and parks layers, Census ACS B25034/B25024 (2020–2024 5-year), and hunterscreek.net for association park amenities. Golf course hole count, ownership and public/private access deliberately omitted — unverified. Park acreages for association-owned parks are not published and are omitted. Straight-line distances omitted; they are not driving distances.",
  },
  {
    slug: "thornton-park",
    name: "Thornton Park",
    intro:
      "A brick-street neighborhood immediately east of Lake Eola Park, most of which falls inside the Lake Lawsona Historic District — designated locally in 1994 and listed on the National Register in 2019.",
    lifestyle:
      "The Thornton Park District Main Street runs as a walkable commercial spine with more than 60 locally-owned shops, services and dining destinations, a short walk from the Lake Eola loop.",
    locationContext:
      "The eastern edge of downtown Orlando, east of Lake Eola Park and north of SR 408, served by Robinson Street, Summerlin Avenue, Mills Avenue (SR 15), Central Boulevard and Washington Street.",
    housingOverview:
      "Housing in the Lake Lawsona district dates from 1911 through the 1950s, with the period of significance concentrated in the 1920s through 1940s. About two-thirds of the district's roughly 500 buildings are contributing structures, set along brick-paved streets lined with live oaks.",
    propertyTypes: [
      "Craftsman and Bungalow homes",
      "Colonial Revival and Dutch Colonial Revival",
      "Mediterranean Revival and Mission Revival",
      "Tudor Revival and Neoclassical Revival",
      "Minimal Traditional and frame and masonry vernacular",
    ],
    buyerConsiderations: [
      "Thornton Park is not itself a historic district — most of it lies inside the Lake Lawsona Historic District, but whether a specific parcel is subject to Certificate of Appropriateness review has to be checked parcel by parcel with City Planning. This is the single most important diligence item here",
      "Inside the district, minor work — window replacement, siding, fences, doors, paint and roof color, solar, driveways — is reviewed by City staff at no fee, with the City contacting the applicant within five days",
      "Major work — additions, garage apartments, demolition, new construction, major alterations — requires a mandatory pre-application meeting, a $250 fee, Historic Preservation Board review, and final City Council approval. The Board meets monthly on the first Wednesday at 4 p.m. with applications due two weeks prior, so a major review realistically spans multiple months",
      "Orlando's 10-year historic preservation property tax exemption must be applied for BEFORE construction begins — it cannot be applied to work in progress or already completed, and at least $2,500 must go to the front façade. This is the most commonly missed incentive in the district",
      "The federal 20% rehabilitation tax credit applies only to income-producing property. Owner-occupied homes do not qualify, despite how often this is stated otherwise",
      "The three-year suspension of historic preservation review that takes effect August 10, 2026 applies only to the Downtown Historic District — it does not apply to Lake Lawsona",
      "Homes of this era commonly warrant specialist inspection of electrical, plumbing, foundation and wind-mitigation items",
    ],
    sellerConsiderations: [
      "Documented contributing-structure status and original architectural detail are meaningful marketing assets in this district",
      "Unpermitted alterations inside the historic overlay can surface late in a transaction — resolve them before listing",
      "Buyers routinely misunderstand what historic designation restricts; a clear explanation of minor-versus-major review prevents deals falling apart over renovation fears",
    ],
    amenities: [
      "Lake Eola Park, 512 East Washington Street — a 0.9-mile paved loop, the Linton E. Allen Centennial Fountain, the Walt Disney Amphitheater, swan boat rentals and two playgrounds",
      "Lake Eola — 28 acres",
      "Lake Lawsona — 8 acres, monitored by the City, FDEP and LAKEWATCH volunteers",
      "H.H. Dickson Azalea Park, 100 Rosearden Drive — a City park since 1924, containing the 1926 Washington Street Bridge; both carry state historic markers",
      "Thornton Park District Main Street — 60+ locally-owned businesses",
      "Brick-paved streets and the historic 1926 Orlando High School building within the district",
    ],
    transportation: [
      "LYMMO fare-free bus rapid transit — the Grapefruit Line serves the Lake Eola and Thornton Park area",
      "Robinson Street (SR 526), Mills Avenue (SR 15) and Summerlin Avenue",
      "SR 408 East-West Expressway along the southern edge",
      "Nearest SunRail stations are Church Street and LYNX Central in downtown Orlando",
      "Airport access via SR 408 east to SR 417, or via SR 528",
    ],
    image: "/images/communities/thornton-park.jpg",
    imageAlt: "Homes in Thornton Park, Orlando, Florida",
    related: ["orlando", "delaney-park", "college-park"],
    reviewNote:
      "Sourced from orlando.gov historic preservation district and Certificate of Appropriateness pages, the 2010 Comprehensive Plan historic preservation support document, Florida Department of State's 2019 NRHP announcement, NPS tax incentive guidance, Orange County Water Atlas, and LYNX. Street-level neighborhood boundaries deliberately omitted — the neighborhood association's published boundary is internally contradictory and no authoritative legal boundary exists. Specific brick-paved street names omitted as unverified. Lake Eola Park acreage omitted; the City does not publish one and circulating figures conflict.",
  },
  {
    slug: "delaney-park",
    name: "Delaney Park",
    intro:
      "An established lake-dotted area south of downtown Orlando that overlaps two of the city's oldest local historic districts — Lake Cherokee, designated in 1981, and Lake Copeland, designated in 1984.",
    lifestyle:
      "Delaney Park itself is a 7.25-acre city park of oak-shaded open space, ball fields, tennis courts and playgrounds, with Lake Davis, Lake Cherokee, Lake Weldona and Lake Lancaster threaded through the surrounding streets.",
    locationContext:
      "South of downtown Orlando and south of SR 408, served by Orange Avenue (SR 527), Delaney Avenue, Summerlin Avenue, Mills Avenue (SR 15), Gore Street, Michigan Street, Kaley Street and Curry Ford Road.",
    housingOverview:
      "The Lake Cherokee district spans construction from the late 1870s through the 1940s across 189 buildings, 160 of them contributing. The Lake Copeland district holds roughly 110 structures, about two-thirds contributing, and includes homes designed by architect James Gamble Rogers II.",
    propertyTypes: [
      "Victorian and Queen Anne homes",
      "Craftsman bungalows and American Four Square",
      "Mediterranean Revival and Mission Revival",
      "Tudor Revival, Colonial Revival and Neoclassical Revival",
      "Art Deco and Minimal Traditional",
    ],
    buyerConsiderations: [
      "Three different things share the Delaney Park name — the city park, the broader City of Orlando neighborhood, and the separately drawn Lake Cherokee and Lake Copeland historic districts. They do not share boundaries. Confirm with City Planning whether a specific parcel sits inside a historic overlay",
      "Lake Copeland's published boundaries conflict between two City of Orlando sources, so a parcel near the edges genuinely requires confirmation rather than a map read",
      "Inside either district, minor work — windows, siding, fences, doors, paint and roof color, solar, driveways — is staff-reviewed at no fee. Major work requires a pre-application meeting, a $250 fee, Historic Preservation Board review on the first Wednesday monthly, and final City Council approval, realistically spanning months",
      "Orlando's 10-year historic preservation property tax exemption must be applied for before construction starts, with at least $2,500 allocated to the front façade",
      "The federal 20% rehabilitation tax credit does not apply to owner-occupied homes — only to income-producing property",
      "Lake Cherokee is a National Park Service certified local district, which is not the same as being listed on the National Register — neither district is NRHP-listed",
      "The August 10, 2026 suspension of historic preservation review applies only to the Downtown Historic District, not to Lake Cherokee or Lake Copeland",
      "Homes dating to the 1870s through 1940s warrant specialist inspection of electrical, plumbing, foundation and wind-mitigation items",
    ],
    sellerConsiderations: [
      "Architect provenance and documented contributing status are real marketing assets, particularly for the Rogers-designed homes in Lake Copeland",
      "Renovation work done without a Certificate of Appropriateness can stall a closing — clear it before listing",
      "Lake frontage and proximity to Delaney Park drive the location premium within the area",
    ],
    amenities: [
      "Delaney Park, 1055 Delaney Avenue — 7.25 acres with ball fields, hard-surface tennis courts, playgrounds, picnic facilities and restrooms",
      "Lake Davis — 18 acres",
      "Lake Cherokee — 12 acres",
      "Wadeview Park, Lancaster Park, Lake Weldona Park and Lake Emerald Park nearby",
      "Greenwood Cemetery",
      "Brick streets and mature oak canopy through the historic districts",
    ],
    transportation: [
      "Orange Avenue (SR 527) as the principal north–south arterial into downtown",
      "SR 408 East-West Expressway along the northern edge",
      "Mills Avenue (SR 15), Delaney Avenue and Summerlin Avenue",
      "Nearest SunRail stations are Church Street and Orlando Health/Amtrak",
      "Airport access via SR 408 east to SR 417, or via SR 528",
    ],
    image: "/images/communities/delaney-park.jpg",
    imageAlt: "Homes in Delaney Park, Orlando, Florida",
    related: ["orlando", "thornton-park", "conway"],
    reviewNote:
      "Sourced from orlando.gov historic preservation district and Certificate of Appropriateness pages, the 2010 Comprehensive Plan historic preservation support document, NPS tax incentive guidance, and Orange County Water Atlas. Lake Copeland boundaries and period of significance deliberately omitted — two City sources conflict and the discrepancy is unresolved. Neighborhood boundary streets omitted as low-confidence map extraction. Park acreages other than Delaney Park omitted as unverified.",
  },
  {
    slug: "maitland",
    name: "Maitland",
    intro:
      "An incorporated city of 5.36 square miles between Winter Park and Altamonte Springs, built around a chain of lakes and home to a National Historic Landmark — the 1937 Research Studio, now the Maitland Art Center.",
    lifestyle:
      "Lake Lily Park anchors the city's civic life with a half-mile walking trail and boardwalk, alongside the Art & History Museums campuses, the Audubon Center for Birds of Prey, and the Enzian Theater — a single-screen cinema café and home of the Florida Film Festival.",
    locationContext:
      "Orange County, immediately north of Winter Park and south of Altamonte Springs. US 17-92 (Orlando Avenue) is the principal north–south arterial and carries the SunRail corridor; Maitland Boulevard (SR 414) runs west from its eastern terminus at US 17-92, interchanging with Interstate 4 inside the city.",
    housingOverview:
      "An established city of 5.36 square miles of land built around roughly 21 lakes, with a documented architectural record running from the 1880s — the Waterhouse House dates to 1884 — through mid-century and later infill.",
    propertyTypes: [
      "Lakefront homes on Lake Maitland, Lake Sybelia, Lake Catherine and Lake Lily",
      "Established single-family homes across a wide range of construction eras",
      "Late Gothic Revival and early-period landmark structures",
      "Condominiums and townhomes",
      "Homes near the Maitland Center commercial district west of I-4",
    ],
    buyerConsiderations: [
      "Maitland is a separate incorporated municipality — zoning, building permits and land development review run through the City of Maitland, not Orange County, though the Orange County Property Appraiser still handles assessment",
      "Whether Maitland maintains a local historic preservation ordinance or locally designated district could not be confirmed from the City's own published sources — confirm directly with Maitland Community Development before assuming a property is or is not subject to local review",
      "Federal National Register and National Historic Landmark designations, such as those on the Maitland Art Center and the Waterhouse House, impose no restriction on private owners absent federal funding or permitting — they are honorific for a private homeowner",
      "For lakefront parcels, dock, seawall and shoreline work requires permitting; Orange County Environmental Protection Division handles this in unincorporated areas but its published guidance does not state whether it applies inside municipal limits, so confirm with both the City and the County before planning shoreline work",
      "Orange County EPD dock permitting is sequential — an environmental permit first, then a building permit — with a one-year validity, and the County has proposed fee increases phasing in from October 1, 2026",
      "The SunRail station is a genuine amenity for a specific buyer and irrelevant to another; its park-and-ride and pedestrian connections are worth verifying against a particular address",
    ],
    sellerConsiderations: [
      "Lakefront and lake-view positioning is the dominant value driver in the city",
      "Proximity to the SunRail station and to the Maitland Center employment district appeals to distinct buyer pools — position accordingly",
      "Where shoreline structures exist, having dock and seawall permit history documented removes a common late-stage obstacle",
    ],
    amenities: [
      "Lake Lily Park — 10 acres with a half-mile walking trail, boardwalk, playground, rentable gazebo and restrooms",
      "Maitland Art Center — a National Historic Landmark as The Research Studio, founded 1937 by architect and artist J. Andre Smith, in Art Deco-Mayan Revival style",
      "Waterhouse Residence Museum, 820 S. Lake Lily Drive — listed on the National Register in 1983",
      "Audubon Center for Birds of Prey, 1101 Audubon Way — raptor rehabilitation and education, with a gazebo on Lake Sybelia",
      "Enzian Theater, 1300 South Orlando Avenue — home of the Florida Film Festival",
      "Church of the Good Shepherd, 331 Lake Avenue — National Register listed, Late Gothic Revival",
      "Lake Maitland — 449 acres, the largest of the city's lakes",
    ],
    transportation: [
      "Maitland SunRail station, 801 N. Orlando Avenue, with a park-and-ride lot and bus connections on US 17-92",
      "US 17-92 (Orlando Avenue) as the principal north–south arterial",
      "Maitland Boulevard (SR 414) running west from US 17-92, untolled through the city",
      "Interstate 4, with an interchange inside the city",
      "Airport access via I-4 to SR 408 east to SR 417, or via SR 528",
    ],
    image: "/images/communities/maitland.jpg",
    imageAlt: "Homes in Maitland, Florida",
    related: ["winter-park", "college-park", "orlando"],
    reviewNote:
      "Sourced from Census QuickFacts (land area), SunRail station records, U.S. Department of the Interior's 2014 National Historic Landmark announcement, NPS NPGallery NRHP records (Waterhouse House ref 83001434), Orange County Water Atlas, Orange County EPD permitting pages, and operator sites for the Audubon Center and Enzian. The City of Maitland's own site is robots-blocked to automated retrieval, so incorporation dates (reported as 1885 as the Town of Lake Maitland, renamed 1959) are deliberately omitted from the copy pending confirmation with the City. Whether Maitland has local historic-district review is an open question — confirm before advising any client. The '21 lakes' count is single-source and used qualitatively only.",
  },
];

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
