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
    image: "/images/placeholder-community-orlando.svg",
    imageAlt: "Orlando skyline placeholder image",
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
    image: "/images/placeholder-community-winter-park.svg",
    imageAlt: "Winter Park brick street placeholder image",
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
    image: "/images/placeholder-community-lake-nona.svg",
    imageAlt: "Lake Nona modern architecture placeholder image",
    related: ["conway", "orlando", "windermere"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
  {
    slug: "conway",
    name: "Conway",
    intro:
      "An established southeast Orlando area centered on the Conway Chain of Lakes, known for larger lots and long-held family properties.",
    lifestyle:
      "Lake access, ski clubs, and neighborhood parks shape the area's low-key residential rhythm, minutes from Orlando International Airport and downtown.",
    locationContext:
      "Southeast of downtown Orlando between SR 408 and the airport, wrapped around the Conway Chain of Lakes.",
    housingOverview:
      "Primarily mid-century and later single-family homes on generous lots, with lakefront properties, occasional new infill builds, and few HOAs.",
    propertyTypes: ["Ranch homes", "Lakefront homes", "Infill new construction", "Larger-lot single-family"],
    buyerConsiderations: [
      "Lakefront and lake-access properties involve dock and shoreline diligence",
      "Many homes are original-condition; renovation budgeting matters",
      "Fewer HOAs means more owner flexibility and more variance between homes",
    ],
    sellerConsiderations: [
      "Renovated homes and lakefront access command distinct buyer pools",
      "Lot size and lake rights should be documented and marketed clearly",
    ],
    amenities: ["Conway Chain of Lakes", "Barber Park", "Neighborhood boat ramps", "Hoffner Avenue commercial corridor"],
    transportation: ["SR 408", "SR 15 / Conway Road", "Orlando International Airport proximity", "Downtown Orlando via Crystal Lake Drive"],
    image: "/images/placeholder-community-conway.svg",
    imageAlt: "Conway lakes placeholder image",
    related: ["orlando", "lake-nona", "winter-park"],
    reviewNote: "Verify amenity and transportation facts before launch.",
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
    image: "/images/placeholder-community-college-park.svg",
    imageAlt: "College Park bungalow placeholder image",
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
    image: "/images/placeholder-community-dr-phillips.svg",
    imageAlt: "Dr. Phillips lakefront placeholder image",
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
    image: "/images/placeholder-community-windermere.svg",
    imageAlt: "Windermere lake placeholder image",
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
    image: "/images/placeholder-community-metrowest.svg",
    imageAlt: "MetroWest golf course placeholder image",
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
    image: "/images/placeholder-community-pine-hills.svg",
    imageAlt: "Pine Hills neighborhood placeholder image",
    related: ["metrowest", "college-park", "orlando"],
    reviewNote: "Verify amenity and transportation facts before launch.",
  },
];

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
