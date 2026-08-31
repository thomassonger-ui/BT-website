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
    name: "City of Orlando",
    intro:
      "The City of Orlando is a municipality of about 320,000 people inside an Orange County of roughly 1.47 million \u2014 which means most addresses that read \u201cOrlando, FL\u201d are not in the city at all.",
    lifestyle:
      "Inside the city limits the pattern is unusually urban for Central Florida: Lake Eola Park and the Dr. Phillips Center anchor a downtown core, brick-street neighbourhoods like Thornton Park and College Park sit within a few minutes of it, and Baldwin Park and Lake Nona add newer walkable districts on the eastern side.",
    locationContext:
      "The city wraps the centre of the metropolitan area and reaches south-east in a separate arm to take in Orlando International Airport and Lake Nona. Interstate 4, SR 408 and SR 528 all cross it, and SunRail runs north\u2013south through downtown.",
    housingOverview:
      "The city\u2019s housing stock leans far more urban than the county around it. About 41% of city housing units are single-family, against 62% county-wide, while roughly 40% sit in buildings of ten or more units versus 23% across Orange County. Early-1900s bungalows in the historic districts, mid-century ranch homes, downtown high-rises and newer infill all trade in the same market.",
    propertyTypes: [
      "Historic bungalows and frame vernacular homes",
      "Downtown high-rise condominiums",
      "Mid-century ranch homes",
      "Townhomes and new infill",
      "Purpose-built rental apartments",
    ],
    buyerConsiderations: [
      "Confirm the address is inside city limits before assuming anything about permits, utilities or millage \u2014 an Orlando mailing address does not establish it",
      "Six local historic districts carry design review; exterior work there needs a Certificate of Appropriateness before a building permit",
      "Condominium association and lender review matter more downtown than almost anywhere else in the metro",
      "Median value inside the city and across the county are close \u2014 about $394,100 against $390,100 \u2014 so the city is not automatically the expensive option",
    ],
    sellerConsiderations: [
      "Buyer pools differ sharply between a downtown condominium, a historic-district bungalow and a Lake Nona house \u2014 one pricing approach does not carry across them",
      "In a historic district, unpermitted exterior changes made by a previous owner surface during diligence and are slow to cure",
      "Roughly three in five occupied units in the city are rentals, so investor buyers are a real part of the pool for some property types",
    ],
    amenities: [
      "Lake Eola Park",
      "Dr. Phillips Center for the Performing Arts",
      "Kia Center",
      "Camping World Stadium",
      "Orlando Urban Trail",
    ],
    transportation: [
      "Interstate 4",
      "SR 408 East\u2013West Expressway",
      "SR 528 Beachline Expressway",
      "SunRail commuter stations",
      "LYNX bus network",
      "Orlando International Airport",
    ],
    extraSections: [
      {
        heading: "Is the address actually in the City of Orlando?",
        body: [
          "This is the first question to settle, and most buyers never ask it. Orange County says plainly that 62% of its residents live in unincorporated areas, with the other 38% spread across thirteen municipalities. The postal service, meanwhile, hands out \u201cOrlando, FL\u201d addresses across most of the county. The mailing address and the city limits are two different things, and only one of them determines who governs the property.",
          "The city\u2019s shape makes this harder than it sounds. In the Census Bureau\u2019s own boundary file the City of Orlando is not a single polygon: it is sixteen separate pieces covering about 129.6 square miles of land, and it contains forty-three pockets of unincorporated Orange County that sit entirely inside it. Orange County defines one of these as an enclave \u2014 \u201cany unincorporated area that may only be accessed through a municipality.\u201d You can be surrounded by Orlando on every side and not be in Orlando.",
          "There are two reliable ways to check and one that is free and instant. The county\u2019s own guidance is the street sign: \u201cIf your street sign has an Orange on it, you live in unincorporated Orange County.\u201d Each municipality uses its own emblem \u2014 Orlando uses the Lake Eola fountain, Winter Park a peacock. The definitive check is the Orange County Property Appraiser\u2019s parcel record, which names the municipality for every property in the county. Do that before you write an offer, not after.",
          "It matters because annexation, in the county\u2019s words, makes the municipality \u201cthe primary provider of local government services\u201d in place of the county. That is the permit office you file with, the agency that answers a call, the millage lines on the tax bill, and the code that governs what you may build. Utility service is a separate question again: the electric and water service boundaries do not follow the city line, so confirm the provider by address rather than inferring it from the jurisdiction.",
          "Our own office is a working example. It carries an Orlando mailing address and sits in unincorporated Conway, outside the city limits entirely.",
        ],
      },
      {
        heading: "What changes when it is: buying, renting and selling",
        body: [
          "For buyers, the sharpest edge is historic designation. The city has six local historic districts \u2014 Downtown (1980), Lake Cherokee (1981), Lake Copeland (1984), Lake Eola Heights (1989), Lake Lawsona (1994) and Colonialtown South (2000). Thornton Park sits largely inside Lake Lawsona. In these districts exterior changes need a Certificate of Appropriateness before the building permit. Minor review \u2014 painting, re-roofing, repair with matching materials \u2014 runs through a Minor Review Committee in roughly two to ten days. Major review \u2014 alterations, additions, new construction, relocation or demolition \u2014 goes to a full Historic Preservation Board hearing and takes about seven weeks from the closing date. A buyer planning to replace windows or add a second storey should price that timeline into the contract, not discover it afterwards.",
          "For renters, the city is the part of the county where renting is the norm rather than the exception: about 60.5% of occupied units inside the city are rentals, against 43.2% county-wide, and median gross rent is close between the two \u2014 roughly $1,747 in the city and $1,775 across the county. Florida\u2019s landlord-tenant statute, Chapter 83, applies statewide, but local programmes and protections are attached to a specific government. A renter who is not sure which one they live under should settle the jurisdiction question first, because it determines which office they can actually call.",
          "For sellers, the practical consequences are permits and paperwork. Work done under an Orange County permit on a property later annexed into the city, or work done with no permit at all, tends to surface during a buyer\u2019s diligence, and the record lives with whichever government had jurisdiction on the day it was issued. Knowing which office holds the file \u2014 and pulling the permit history before listing rather than during a contract \u2014 is the difference between a disclosure and a renegotiation.",
        ],
      },
    ],
    image: "/images/communities/orlando.jpg",
    imageAlt: "The downtown Orlando skyline and the Linton E. Allen Memorial Fountain seen across Lake Eola",
    gallery: [
      {
        src: "/images/communities/orlando-bungalow.webp",
        alt: "Craftsman bungalow in the Lake Eola Heights historic district, Orlando",
      },
      {
        src: "/images/communities/orlando-historic-house.webp",
        alt: "Restored two-storey frame house with a wraparound porch in Lake Eola Heights, Orlando",
      },
      {
        src: "/images/communities/orlando-central-blvd.webp",
        alt: "Central Boulevard in downtown Orlando, looking along the street past mid-rise buildings",
      },
    ],
    photoCredit: {
      text: "Lake Eola skyline \u00a9 JER3L1337 (CC BY 4.0) \u00b7 bungalow \u00a9 Visitor7 (CC BY-SA 3.0) \u00b7 Lake Eola Heights house \u00a9 Ebyabe (CC BY 2.5) \u00b7 Central Boulevard by Beno\u00eet Prieur (CC0) \u2014 via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Orlando,_Florida",
    },
    related: ["thornton-park", "college-park", "conway"],
    reviewNote:
      "Facts sourced: ACS 2020-2024 5-year estimates via Census Reporter (population, housing units, tenure, unit types, median value and gross rent, for Orlando city GEOID 1253000 and Orange County GEOID 12095); US Census TIGERweb Incorporated Places (land and water area, and the boundary geometry from which the 16-piece / 43-enclave counts were computed and cross-checked against the published AREALAND+AREAWATER to within 0.6%); Orange County Planning and Development annexation page (62%/38% split, thirteen municipalities, enclave definition, street-sign guidance, municipality emblems, 'primary provider of local government services'); City of Orlando Historic Preservation Districts page (the six districts with designation years, and the Certificate of Appropriateness minor/major review scope and timelines). NOTE: the electric and water service boundaries were NOT verified against a primary source - the page therefore tells readers to confirm the provider by address rather than naming one. Whether Orange County tenant programmes reach addresses inside city limits was also not verified and is deliberately not asserted.",
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    intro:
      "A city of about 30,000 north of downtown Orlando, built around a chain of lakes and a brick-street commercial core \u2014 where more than half the housing predates 1970 and the median home is worth nearly twice the county figure.",
    lifestyle:
      "Park Avenue runs as a walkable commercial spine beside Central Park, with the Morse Museum, Rollins College on Lake Virginia, and the Scenic Boat Tour working the canals between Osceola, Virginia and Maitland.",
    locationContext:
      "Directly north-east of the City of Orlando, bounded roughly by Fairbanks Avenue to the south and Lake Maitland to the north, with SunRail and US 17-92 running through it and Interstate 4 just west.",
    housingOverview:
      "The defining fact is age. About 56% of Winter Park\u2019s housing was built before 1970, against 26% across Orange County, and the 1950s alone account for roughly 18% of the stock. Set that against a median home value near $731,400 \u2014 close to twice the county\u2019s $390,100 \u2014 and the arithmetic that drives most current planning fights becomes obvious: modest older houses sitting on land worth far more than the structure.",
    propertyTypes: [
      "Mid-century ranch and split-level homes",
      "Pre-war frame and masonry houses",
      "Lakefront estates",
      "Low-rise condominiums near Park Avenue",
      "New infill on redeveloped lots",
    ],
    buyerConsiderations: [
      "More than 150 properties are individually listed on the Winter Park Register of Historic Places, and designation brings Historic Preservation Board review of exterior work",
      "Certificate of Review approvals now expire one year after approval if work has not physically begun \u2014 one administrative extension is available, further ones need the Board",
      "Minor exterior alterations consistent with the existing architectural style, including many window, door and roof replacements, were exempted from certificate review in 2025 and need only a building permit",
      "The city runs its own electric utility, and the undergrounding programme means service at a given address may be overhead or already buried \u2014 confirm rather than assume",
    ],
    sellerConsiderations: [
      "On an older house the land often carries most of the value, so the realistic buyer pool may include people who intend to build \u2014 which makes designation status a material fact, not a footnote",
      "Unpermitted exterior work on a designated property is expensive to cure: unauthorised work causing irreversible damage can draw a fine of up to three times the normal amount per violation, plus daily fines and a restoration order",
      "Renting is a smaller share of this market than the county at large \u2014 about 34% of occupied units against 43% county-wide",
    ],
    amenities: [
      "Central Park and Park Avenue",
      "Charles Hosmer Morse Museum of American Art",
      "Winter Park Scenic Boat Tour",
      "Rollins College",
      "Winter Park Library & Events Center at MLK Jr. Park",
      "Mead Botanical Garden",
    ],
    transportation: [
      "US 17-92 / Orlando Avenue",
      "Fairbanks Avenue",
      "SunRail Winter Park station",
      "Interstate 4",
      "LYNX bus network",
    ],
    extraSections: [
      {
        heading: "What is actually changing right now",
        body: [
          "Winter Park has been busy. Three things adopted since 2025 matter directly to a purchase or a sale, and a fourth is still moving.",
          "The historic preservation ordinance was amended in May 2025 by Ordinance 3335-25, and the changes cut both ways. Applicants gained a non-binding preliminary review before formal submission, and minor exterior alterations consistent with the existing style \u2014 window and door replacements, roof work \u2014 were exempted from certificate review altogether. Against that, applications must now carry comprehensive detail on every exterior material and architectural element; staff must confirm the construction plans actually match what the Board approved, and send the matter back if they do not; any portion of a historic home proposed for demolition must be explicitly identified in the application and visually marked on the plans; and approvals lapse one year after approval if work has not physically started. Unauthorised work causing irreversible damage can now draw a fine of up to three times the amount per violation, alongside daily fines and a restoration requirement.",
          "Lakefront subdivision was addressed by a citywide comprehensive plan text amendment adopted as Ordinance 3368-26, which added Policy 1-5.1.8 to the Future Land Use element. It is narrow by design. To be split, a property must be zoned R-1AAA with a Single Family Residential future land use, sit on at least 3.5 upland acres, and have existed in that form as of 1 October 2025. Each resulting lot must carry 150 feet of frontage on both the lake and the street and cover at least 1.5 acres, with combined floor area capped at 40,000 square feet and each lot limited to 35% floor area ratio. In practice that describes a very small number of estates \u2014 but for those owners it is the difference between one parcel and two.",
          "State milestone inspection requirements were folded into the city\u2019s building regulations in September 2025 by Ordinance 3356-25, which implements the statutory milestone inspection, repair and enforcement rules locally. Anyone buying into an older condominium building should treat the inspection and reserve position as a primary diligence item rather than a formality.",
          "Still moving: the Historic Preservation Board has been working through further revisions to the preservation ordinance, including education on what renovations are permitted and possible incentives \u2014 tax relief among them \u2014 for owners who keep historic structures standing. Reporting in July 2026 put a list of proposals before a City Commission workshop in September 2026. Because that one is live, confirm where it stands before relying on it.",
        ],
      },
      {
        heading: "The utility nobody expects, and what it means at an address",
        body: [
          "Winter Park is one of the few cities in Florida that owns its electric system. Residents voted on 9 September 2003 to buy the distribution network from Progress Energy Florida, and the city began operating it on 1 June 2005. That is unusual enough on its own; what makes it matter to a buyer is what the city has done since.",
          "Winter Park is undergrounding its entire electrical system, with a target of 2030, funded from utility revenue rather than a separate tax or assessment. The city publishes a map of the programme and updates the timeline twice a year. The practical consequence is that two houses on neighbouring streets can have quite different exposure to wind and falling limbs, different streetscapes, and different expectations about outage duration \u2014 purely as a function of where they sit in the schedule.",
          "None of that can be inferred from the address. It has to be looked up on the city\u2019s underground map, and it is worth doing before an offer rather than after a storm. The same caution applies to the boundary itself: like every city in this county, Winter Park\u2019s limits are not tidy. The Census boundary file shows the city in two pieces \u2014 8.77 square miles of land and 1.62 of water \u2014 with seven pockets of unincorporated Orange County sitting inside them. A Winter Park mailing address is not proof of a Winter Park jurisdiction, and the Property Appraiser\u2019s parcel record settles it in seconds.",
        ],
      },
    ],
    image: "/images/communities/winter-park.jpg",
    imageAlt: "Storefronts beneath a mature live oak on Park Avenue in Winter Park, Florida",
    gallery: [
      {
        src: "/images/communities/winter-park-brewer-house.webp",
        alt: "The Brewer House, a white neoclassical residence with columned portico in Winter Park, Florida",
      },
      {
        src: "/images/communities/winter-park-warlow-house.webp",
        alt: "The Warlow House, a Mediterranean Revival home with a green tile roof in Winter Park, Florida",
      },
      {
        src: "/images/communities/winter-park-park-avenue.webp",
        alt: "Sidewalk dining and shopfronts along Park Avenue in Winter Park, Florida",
      },
    ],
    photoCredit: {
      text: "Park Avenue \u00a9 Miosotis jade (CC BY-SA 4.0) \u00b7 Brewer House \u00a9 Ebyabe (CC BY 2.5) \u00b7 Warlow House \u00a9 Ebyabe (CC BY-SA 3.0) \u2014 via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Winter_Park,_Florida",
    },
    related: ["orlando", "baldwin-park", "maitland"],
    reviewNote:
      "Facts sourced: ACS 2020-2024 5-year estimates via Census Reporter (population, housing units, tenure, build eras, median value and gross rent, for Winter Park city GEOID 1278300 and Orange County GEOID 12095); US Census TIGERweb Incorporated Places (land and water area, and the 2-piece / 7-enclave boundary counts) and TIGERweb Areal Hydrography (lakes on the map); City of Winter Park Ordinance 3335-25 (historic preservation amendments, May 2025); City of Winter Park citywide notice for the 1020 Palmer Avenue comprehensive plan text amendment (the lakefront lot-split criteria, P&Z 2 Dec 2025 and Commission 10 Dec 2025) adopted as Ordinance 3368-26 per the city ordinance master index; Ordinance 3356-25 (milestone inspections, Sept 2025); City of Winter Park electric utility pages (2003 referendum, 1 June 2005 start, undergrounding by 2030 funded from utility revenue); City of Winter Park historic preservation page (Winter Park Register, 150+ designated properties, named districts). NOTE: the pending preservation-ordinance revisions and the September 2026 Commission workshop come from Spectrum News 13 reporting dated 23 July 2026, are explicitly attributed on the page as live and unsettled, and should be re-checked. The exact adoption date of Ordinance 3368-26 was not confirmed beyond its appearance in the 2026 master index. Whether the electric service territory matches the city limits was NOT verified and is not asserted.",
  },
  {
    slug: "lake-nona",
    name: "Lake Nona",
    intro:
      "A master-planned development inside the City of Orlando\u2019s south-eastern arm, governed by a planned development district covering roughly 9,044 acres \u2014 and layered with community development districts whose assessments are the single most overlooked cost of buying here.",
    lifestyle:
      "Medical City anchors the northern side with hospitals and research institutions, the USTA National Campus brings a hundred tennis courts open to the public, and Lake Nona Town Center and Boxi Park supply the dining and gathering side.",
    locationContext:
      "South-east Orlando, north of the Osceola County line, south of Dowden Road, east of Boggy Creek Road and west of Narcoossee Road \u2014 inside the same detached arm of the city that contains Orlando International Airport, with SR 417 running through.",
    housingOverview:
      "Effectively all of it is new. Lake Nona has been built out neighbourhood by neighbourhood under a City of Orlando planned development ordinance that authorises up to 20,817 residential units alongside millions of square feet of office, commercial and airport-support space. Districts differ sharply in age, density and design rules, so \u201cLake Nona\u201d describes a plan area rather than a single housing market.",
    propertyTypes: [
      "New single-family homes",
      "Townhomes",
      "Apartments and build-to-rent",
      "Condominiums near Town Center",
      "Custom homes on the golf course",
    ],
    buyerConsiderations: [
      "Ask whether the parcel sits in a Community Development District and what the annual assessment is \u2014 this is a separate unit of local government from the HOA, and it appears on the tax bill as a non-ad valorem line item",
      "Florida law requires a bold disclosure above the buyer\u2019s signature on an initial CDD sale, but resale buyers do not automatically get one \u2014 pull the parcel\u2019s actual tax bill instead of relying on being told",
      "Expect two or three layers of governance: City of Orlando permitting, a neighbourhood or master HOA with design review, and where applicable a CDD",
      "Large areas remain under construction; confirm what is approved next to a specific lot rather than what exists today",
    ],
    sellerConsiderations: [
      "Buyers increasingly ask for the CDD assessment figure up front \u2014 having the current tax bill and the district\u2019s adopted budget ready removes the biggest source of late renegotiation",
      "Because so much stock is similar in age and design, condition, upgrades and lot position do most of the pricing work",
      "New inventory from the developer competes directly with resale; pricing needs to account for what incentives are being offered nearby",
    ],
    amenities: [
      "USTA National Campus",
      "Lake Nona Town Center and Boxi Park",
      "Lake Nona Performance Club",
      "Medical City institutions",
      "Lake Nona Golf & Country Club",
    ],
    transportation: [
      "SR 417 Central Florida GreeneWay",
      "Narcoossee Road",
      "Boggy Creek Road",
      "Orlando International Airport nearby",
      "Autonomous shuttle service within the community",
    ],
    extraSections: [
      {
        heading: "The CDD question, which is a real cost",
        body: [
          "The most consequential thing a Lake Nona buyer can get wrong is assuming the HOA fee is the whole picture. A Community Development District is a separate special-purpose unit of local government created under Chapter 190 of the Florida Statutes. It builds and maintains infrastructure \u2014 roads, drainage, utilities, parks \u2014 and it levies its own assessments, which arrive on the property tax bill as non-ad valorem line items, entirely separate from HOA dues and from ordinary property tax.",
          "Lake Nona is not one district. It is a patchwork. The Narcoossee Community Development District covers a set of neighbourhoods including Lake Nona Preserve, and publishes its adopted budgets and audited financials. The Storey Park district operates nearby. In March 2026 the Orlando City Commission approved a new Dowden Central Community Development District covering nearly 380 acres in south-east Lake Nona, petitioned by the developer, empowered to fund roads, drainage, utilities and parks through assessments on developers and future homeowners.",
          "Because it is a patchwork, no page can tell you whether a specific address carries a CDD assessment, and any page that claims to is guessing. We looked for a definitive district-by-district roster and could not assemble one from primary sources. What we can tell you is exactly how to find out, which is more useful: pull the parcel\u2019s current tax bill from the Orange County Tax Collector and look for a non-ad valorem CDD line, check the Property Appraiser record, and ask the seller for any Chapter 190 disclosure. Florida law requires that disclosure in bold immediately above the buyer\u2019s signature on an initial sale within a district \u2014 but on a resale you may have to go and get it yourself.",
          "Treat the answer as part of the monthly payment, not as paperwork. On a district carrying construction debt, the assessment can be a meaningful line.",
        ],
      },
      {
        heading: "What is actually built, and what is still coming",
        body: [
          "Medical City is real and largely operating. The UCF College of Medicine enrolled its first class in 2009. Nemours Children\u2019s Hospital opened in 2012 and expanded in late 2019. The Orlando VA Medical Center began seeing patients in February 2015 and was dedicated that May, a facility of roughly 1.2 million square feet. The UF Research and Academic Center opened in November 2012. UCF Lake Nona Hospital opened to the public on 1 March 2021 as a joint venture with HCA, designed to expand well beyond its current bed count. One institution changed hands: the research building originally built for Sanford Burnham transferred to the University of Central Florida in 2018 and now operates as the UCF Lake Nona Cancer Center.",
          "The USTA National Campus opened on 2 January 2017 \u2014 64 acres and about 100 courts \u2014 and, contrary to a common assumption, it is open to the public, with hourly court bookings and no membership requirement.",
          "Still in progress: Lake Nona West, a 54-acre retail district on Lake Nona Boulevard, was announced for a 2026 debut. The Dowden Central area approved in March 2026 has its zoning but no vertical construction, and its approval carries a requirement that at least ten percent of new housing there be designated affordable. A regional Osceola Parkway extension serving this area remains in study, not construction. Tavistock continues filing new residential phases inside the plan area.",
          "One number worth flagging: the development is widely marketed as seventeen square miles, while the City of Orlando planned development ordinance governs 9,044 acres, which is closer to fourteen. The likely explanation is adjacent land outside the planned development boundary, but we could not confirm that from a primary source, so we cite the ordinance figure.",
        ],
      },
    ],
    image: "/images/communities/lake-nona.jpg",
    imageAlt: "Aerial view of lakefront homes and the golf course at Lake Nona, Orlando, Florida",
    gallery: [
      { src: "/images/communities/lake-nona-golf.webp", alt: "Homes along the fairways at Lake Nona Golf & Country Club, Orlando" },
      { src: "/images/communities/lake-nona-town-center.webp", alt: "Lake Nona Town Center looking south-east, Orlando, Florida" },
    ],
    photoCredit: {
      text: "Aerial and golf course \u00a9 Angiesbc (CC BY-SA 4.0) \u00b7 Town Center \u00a9 PoultrySaga (CC BY-SA 4.0) \u2014 via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Lake_Nona,_Orlando,_Florida",
    },
    related: ["orlando", "conway", "college-park"],
    reviewNote:
      "Facts sourced: City of Orlando Lake Nona Planned Development ordinance (Ord. 2022-53 restating Ord. 2021-46) via the city's agenda portal - 9,044.20 acres, boundaries, and the authorised programme including 20,817 residential units; City of Orlando Southeast Orlando Sector Plan; s.190.048 F.S. (the bold pre-signature CDD disclosure on initial sales); Narcoossee CDD official site (neighbourhoods covered incl. Lake Nona Preserve, adopted budgets and audits) and Storey Park CDD site; reporting of the 17 March 2026 Orlando City Commission approval of the Dowden Central CDD (~380 acres, developer-petitioned, and the >=10% affordable requirement in the associated growth framework); UCF (Lake Nona Cancer Center - the Sanford Burnham building transferred to UCF effective 27 Aug 2018); HCA Florida (UCF Lake Nona Hospital opened to the public 1 March 2021); Nemours press material (2012 opening, 2019-20 expansion); American Legion coverage of the Orlando VA Medical Center dedication 26 May 2015 and Feb 2015 clinical start; University of Florida news archive (UF Research and Academic Center opened 30 Nov 2012); USTA National Campus official visit page (opened 2 Jan 2017, 64 acres, ~100 courts, open to the public, hourly bookings, no membership); Tavistock and Lake Nona release pages (Town Center, Boxi Park, Lake Nona West 54 acres). NOT VERIFIED and therefore hedged or omitted: whether Laureate Park specifically carries a CDD - the master association's own FAQ does not mention one and no district entity was found, so no claim is made either way and the page tells buyers to check the parcel tax bill; a complete roster of every CDD inside the plan area (the state special-district list could not be fetched); the 17-square-mile marketing figure versus the 9,044-acre ordinance boundary, which the page reports as a discrepancy rather than resolving; Boxi Park's exact opening date; Lake Nona Performance Club's exact opening date and square footage.",
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
    imageAlt: "Belle Isle City Hall at 1600 Nela Avenue, Belle Isle, Florida",
    gallery: [
      {
        src: "/images/communities/belle-isle-city-limit.webp",
        alt: "Belle Isle city limit sign on Nela Avenue, marking the boundary with unincorporated Orange County",
      },
      {
        src: "/images/communities/belle-isle-lesser-park.webp",
        alt: "Lesser Park, a City of Belle Isle neighbourhood park shaded by live oaks",
      },
      {
        src: "/images/communities/belle-isle-holloway-park.webp",
        alt: "Holloway Park, a City of Belle Isle neighbourhood park with bench seating",
      },
    ],
    photoCredit: {
      text: "Michael Rivera, CC BY-SA 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Belle_Isle,_Florida",
    },
    related: ["conway", "edgewood", "orlando"],
    reviewNote:
      "Facts sourced: 2020 Census and ACS 2020-2024 5-year estimates (population, land and water area, housing units, build eras); City of Belle Isle official site (government structure, history, parks, boat ramps, jurisdiction road list); City of Belle Isle FY2022 audited financial statements (utility providers - the 'limited sanitary sewer' wording is theirs); Belle Isle Code Ch. 48 Art. II (city dock permit) and Sec. 18-20 (ramp decal); Orange County (navigation district, EPD dock permitting, Shoreline Alteration permit, Warren Park). NOTE: the city's financial statements name Duke Energy for electric while its utilities page routes residents to OUC - the page reports the conflict rather than picking one. Whether a Belle Isle dock also needs a county EPD permit is unresolved in the published code; the page says so. Drive times are modeled free-flow estimates. Park street addresses intentionally omitted - the city publishes none.",
  },
  {
    slug: "college-park",
    name: "College Park",
    intro:
      "A 1920s neighbourhood of the City of Orlando laid out on brick streets named for colleges \u2014 Princeton, Harvard, Yale, Dartmouth \u2014 wrapped around four lakes, with Interstate 4 on its eastern edge and downtown a few minutes south-east.",
    lifestyle:
      "Edgewater Drive has served as the neighbourhood\u2019s main street since the 1920s and still does, with the Dubsdread golf course to the north, Lakes Adair, Concord, Silver and Ivanhoe threaded through the street grid, and the 202-acre Packing District redevelopment on the western side.",
    locationContext:
      "Inside the City of Orlando, north-west of downtown. I-4 runs along the eastern edge with SR 408 just south, and downtown sits roughly three miles south-east \u2014 which is the practical reason the neighbourhood has held its value through several cycles.",
    housingOverview:
      "The bones are 1925. Cooper-Atha-Barr broke ground on a 40-acre parcel near Lake Ivanhoe in February 1925 and recorded the first plat on 2 February, with eight more plats following through 1926. The result is a compact grid of 1920s and 1930s bungalows, Mediterranean Revival and Colonial Revival houses, later mid-century infill, and \u2014 increasingly \u2014 new construction on lots where the original house came down.",
    propertyTypes: [
      "1920s and 1930s bungalows",
      "Mediterranean and Colonial Revival houses",
      "Mid-century infill homes",
      "Lakefront homes on Adair, Concord, Silver and Ivanhoe",
      "New construction on redeveloped lots",
    ],
    buyerConsiderations: [
      "National Register listing and City of Orlando local designation are different things with different consequences \u2014 confirm which, if either, applies to a specific address",
      "Houses of this age commonly warrant attention to roof, electrical service, supply lines and window condition; confirm by inspection rather than assumption",
      "Lots vary widely in width and depth across the 1925-26 plats, and setbacks on a narrow lot can constrain an addition more than the square footage suggests",
      "Proximity to I-4 is a genuine convenience and, on the streets nearest the interstate, a genuine noise consideration \u2014 visit at more than one time of day",
    ],
    sellerConsiderations: [
      "On an older house the land can carry much of the value, so part of the buyer pool may be pricing the lot rather than the structure",
      "Permit history matters here: work done decades ago on a 1920s house may not appear in the record, and buyers increasingly ask",
      "Presentation of original detail \u2014 floors, windows, trim \u2014 tends to separate offers in this market more than it does in newer neighbourhoods",
    ],
    amenities: [
      "Historic Dubsdread Golf Course",
      "Edgewater Drive shops and dining",
      "The Packing District regional park and trails",
      "Orlando Tennis Centre",
      "4Roots Farm Campus",
      "Lakes Adair, Concord, Silver and Ivanhoe",
    ],
    transportation: [
      "Interstate 4",
      "SR 408 East\u2013West Expressway",
      "Edgewater Drive",
      "Princeton Street",
      "Orange Blossom Trail",
      "LYNX bus network",
    ],
    extraSections: [
      {
        heading: "Buying, selling or renting here: the questions worth asking first",
        body: [
          "Which government? College Park is a neighbourhood of the City of Orlando, not a municipality of its own. That means city permitting, city code and city services \u2014 but Orange County\u2019s boundary with the city is genuinely ragged in this part of the metro, so the Property Appraiser\u2019s parcel record is still the thing that settles it for a specific address rather than the neighbourhood name.",
          "Is the house in a historic district, and does that bind you? This is where most buyers get it wrong. The Lake Adair\u2013Lake Concord Historic District was added to the National Register of Historic Places on 30 December 2011, roughly bounded by Golfview Street, Edgewater Court, Alameda Street and Peachtree Road. National Register listing is a federal designation \u2014 it is an honour and it can matter for certain tax credits on income-producing property, but it is not the thing that puts a design review board between you and a new window. The City of Orlando\u2019s own design review attaches to locally designated landmarks and to the city\u2019s six local historic districts, and Lake Adair\u2013Lake Concord is not on that local district list. College Park does contain a local landmark: the Jack Kerouac House is one of the 47 individually designated City of Orlando historic landmarks. The practical instruction is simple \u2014 ask the city which designation, if any, attaches to the parcel, and do it before you plan exterior work.",
          "What about schools? Orange County Public Schools assigns attendance by address, and zones are periodically rezoned, so the only reliable answer for a specific house comes from the district itself. OCPS publishes attendance zone maps and a Find My School lookup, and College Park Middle School is located in the neighbourhood. We will point you to the district\u2019s tool rather than characterise any school \u2014 that is both the accurate answer and the lawful one.",
          "For renters, the same jurisdiction question decides which local rules and which local offices apply, and Florida\u2019s landlord-tenant statute, Chapter 83, sits underneath all of it statewide. Settle the jurisdiction first; it determines who you can actually call.",
          "For sellers, the two recurring friction points are permit history on a hundred-year-old house and the buyer who is valuing the lot rather than the building. Pulling the permit record before listing, rather than during a contract, is the single cheapest thing you can do.",
        ],
      },
      {
        heading: "The golf course, the vineyard and the 202 acres",
        body: [
          "The land north of the neighbourhood has been through several lives. In 1886 investors planted the Niagara Vineyard across 200 acres. It failed, and the Wright-Rundell Company platted the ground as Villa Farms in 1910. Carl Dann bought the property in 1924 and turned it into the Dubsdread Golf Course and the Golfview residential subdivision beside it. The course marked its hundredth anniversary in 2024 and remains open to the public, run under a city partnership by an outside operator, and it has kept investing \u2014 a new 40-bay driving range with teaching bays and technology-equipped stalls opened in late summer 2025.",
          "On the western side, the Packing District is the largest thing to happen to this part of Orlando in a generation: a 202-acre redevelopment by Dr. Phillips Charities centred on Princeton Street and Orange Blossom Trail, on ground that was historically citrus packing. More than 100 acres were gifted to the City of Orlando for a regional park. The Orlando Tennis Centre relocated there with seventeen courts, eleven of them clay. The 4Roots Farm Campus occupies eighteen acres, with its first phase completed in January 2023. Residential arrived alongside it \u2014 a 307-unit apartment building opened in February 2022 and a 135-unit townhome project followed \u2014 and an $18.1 million streetscape rebuild, including a roundabout and bike paths, finished in April 2023.",
          "For a buyer this cuts both ways and it is worth being honest about it. Hundreds of acres of new park, trail and recreation on the doorstep is a durable amenity of a kind that rarely gets added to an established neighbourhood. It also means construction traffic, changing street patterns and a still-unfinished build-out on the western approach. Which of those matters more depends entirely on which street you are looking at, and it is a reason to walk the specific block rather than trust the neighbourhood\u2019s reputation in either direction.",
        ],
      },
    ],
    image: "/images/communities/college-park.jpg",
    imageAlt: "A large white Colonial Revival home on a brick street in the Lake Adair\u2013Lake Concord Historic District, College Park, Orlando",
    gallery: [
      {
        src: "/images/communities/college-park-house-1.webp",
        alt: "Two-storey Colonial Revival house on a brick street in College Park, Orlando",
      },
      {
        src: "/images/communities/college-park-house-2.webp",
        alt: "White two-storey house behind mature oaks in the Lake Adair\u2013Lake Concord Historic District, College Park",
      },
      {
        src: "/images/communities/college-park-edgewater.webp",
        alt: "Storefront with sidewalk seating along Edgewater Drive, College Park, Orlando",
      },
    ],
    photoCredit: {
      text: "Historic district houses \u00a9 Ebyabe (CC BY-SA 4.0) \u00b7 Edgewater Drive \u00a9 Eric Friedebach (CC BY 3.0) \u2014 via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:College_Park,_Orlando,_Florida",
    },
    related: ["orlando", "thornton-park", "winter-park"],
    reviewNote:
      "Facts sourced: Orange County Regional History Center, 'A College Park Century' (CABCO groundbreaking February 1925 on a 40-acre parcel near Lake Ivanhoe, first plat recorded 2 February 1925 with eight further plats through 1926, the college street names introduced by Walter Rose from 1921, Edgewater Drive as de facto main street, and the Dubsdread chain of title: 1886 Niagara Vineyard on 200 acres, Wright-Rundell platting Villa Farms in 1910, Carl Dann purchasing in 1924 and creating the course and Golfview); Wikipedia/NRHP for the Lake Adair-Lake Concord Historic District National Register listing date of 30 December 2011 and its rough boundaries; City of Orlando Local Historic Landmarks map (Jack Kerouac House among 47 designated local landmarks) and the city's Historic Preservation Districts page (the six LOCAL districts, which do not include Lake Adair-Lake Concord - this local-versus-national distinction is the point of that paragraph); City of Orlando 2025 press release (Dubsdread 100th anniversary in 2024, public-private operation, new 40-bay driving range opening late summer 2025); Packing District official timeline (202 acres, Dr. Phillips Charities, 100+ acres gifted to the city, Orlando Tennis Centre with 17 courts including 11 clay, 4Roots 18-acre campus phase one January 2023, 307-unit apartments February 2022, 135 townhomes, $18.1M streetscape April 2023); Census TIGER hydrography and primary roads for the map. SCHOOLS: the page names only that College Park Middle School is in the neighbourhood and routes all attendance questions to the OCPS Find My School tool and zone maps. It makes NO quality, rating or desirability claim about any school, by design - Fair Housing. Bethanne should confirm she is comfortable with even this factual level before launch. NO neighbourhood-level Census statistics are published on this page: College Park has no Census place or CDP geography, and the 18 tracts intersecting it extend well beyond the neighbourhood, so any 'College Park median' figure would have been fabricated. Drive distance to downtown is stated as roughly three miles and is approximate.",
  },
  {
    slug: "dr-phillips",
    name: "Dr. Phillips",
    intro:
      "An unincorporated Orange County community named for the citrus grower who once owned most of it \u2014 not part of the City of Orlando, despite the mailing address, and governed accordingly.",
    lifestyle:
      "Bay Hill\u2019s golf course hosts a PGA Tour signature event each spring, Sand Lake Road carries the dining strip everyone calls Restaurant Row, and Big Sand Lake and Little Sand Lake sit at the centre of the residential area.",
    locationContext:
      "Southwest Orange County between Interstate 4 and the Butler Chain area, north of the attractions corridor and west of the City of Orlando, with Sand Lake Road and Apopka-Vineland Road as the main frames.",
    housingOverview:
      "The pattern was set deliberately. The Phillips family master-planned the area in the 1940s and 1950s for roughly five thousand residents, and Bay Hill was developed from 1960 on about 648 acres with density held to no more than two homes per acre around a championship golf course. Later subdivisions filled in around that framework, so the housing runs from mid-century through recent construction.",
    propertyTypes: [
      "Golf-course and lakefront homes",
      "Established single-family subdivisions",
      "Gated-community homes",
      "Townhomes and condominiums",
      "Newer infill construction",
    ],
    buyerConsiderations: [
      "This is unincorporated Orange County, not the City of Orlando \u2014 county zoning and permitting apply, and the Orange County Sheriff\u2019s Office rather than a city police department",
      "For a definitive answer on a parcel\u2019s zoning and comprehensive plan consistency, Orange County issues a Zoning Verification Letter; it is a paid, documented answer rather than a map reading",
      "Municipal Service Taxing Units can appear on the tax bill for street lighting, pond and common-area maintenance or subdivision walls \u2014 Big Sand Lake is flagged as an MSTU/MSBU lake, so check the parcel\u2019s actual bill",
      "Big Sand Lake and Little Sand Lake are not part of the Butler Chain and sit in a different watershed; neither falls under one of Orange County\u2019s two water and navigation control districts",
    ],
    sellerConsiderations: [
      "Describing the property as \u201cOrlando\u201d in the postal sense is fine; implying city jurisdiction, services or taxation is not",
      "Golf-course, lakefront and interior-subdivision homes draw different buyers and should not be priced off one another",
      "Corridor redevelopment along Sand Lake Road and the I-4 interchange work are live conditions a buyer will ask about \u2014 know the current status rather than the headline",
    ],
    amenities: [
      "Arnold Palmer\u2019s Bay Hill Club & Lodge",
      "Dr. P. Phillips Community Park",
      "Big Sand Lake and Little Sand Lake",
      "Sand Lake Road dining corridor",
      "Phillips Village and Phillips Crossing centres",
    ],
    transportation: [
      "Interstate 4",
      "Sand Lake Road (SR 482)",
      "Apopka-Vineland Road",
      "Turkey Lake Road",
      "SR 528 Beachline nearby",
    ],
    extraSections: [
      {
        heading: "A neighbourhood that is not in Orlando",
        body: [
          "Dr. Phillips is unincorporated. The Census records it as Doctor Phillips CDP \u2014 a Census Designated Place, the Bureau\u2019s category for a community without its own municipal government. Orange County is the government here: county zoning and permitting, county code enforcement, and the Orange County Sheriff\u2019s Office, whose patrol sector explicitly lists Dr. Phillips among the areas it serves.",
          "That matters in ordinary ways. A business tax receipt runs through the county zoning division rather than a city. A permit is a county permit. And when a buyer or a title company needs a definitive answer about what a parcel is zoned and whether that zoning is consistent with the county comprehensive plan, Orange County issues a Zoning Verification Letter \u2014 currently $128 for conventional zoning or $222 for a planned development, with up to a thirty-day turnaround. For anything where the answer has money attached, that letter is the document to have rather than a screenshot of a map.",
          "The other thing to check at parcel level is what special assessments ride on the tax bill. In unincorporated Orange County, Municipal Service Taxing Units fund localised services \u2014 street lighting, retention pond and lake management, common-area maintenance, subdivision walls \u2014 and they are billed directly on the annual property tax bill rather than collected by an association. Big Sand Lake is flagged as an MSTU/MSBU lake with its own advisory board. Whether a particular home carries any of that is a question the tax bill answers in a minute.",
          "One correction worth making, because it appears constantly in listings: the Dr. Phillips Center for the Performing Arts is in downtown Orlando. It carries the family name through philanthropy. It is not in this neighbourhood, and a property here is not near it.",
        ],
      },
      {
        heading: "Citrus, Bay Hill, and the lakes people get wrong",
        body: [
          "Philip Phillips arrived in Florida in the 1890s, lost his first grove to the Great Freeze, came back, and by the late 1920s was the largest individual citrus grower in the world. The Dr. P. Phillips Company was formed in 1920, and in 1928 built what it described as the largest and most modern citrus packing house in the world at Sand Lake, adding flash pasteurisation for canned juice the following year. In 1954 the family sold the agricultural business to Minute Maid and reorganised around the remaining real estate, founding the Dr. P. Phillips Foundation the same year.",
          "What followed is why the area looks the way it does. Working with a planner in the 1940s and 1950s, Dr. Phillips and his son Howard laid out a community intended for about five thousand residents, with utilities, shopping and civic infrastructure planned in. Bay Hill came first, from 1960, on roughly 648 acres with density capped at two homes per acre around a championship course. Howard Phillips\u2019s company built a five-mile sewer main and ran potable water lines to make it work. Arnold Palmer saw the course in 1965, told his wife he had just played the best golf course in Florida and wanted to own it, and acquired it in the early 1970s. The Arnold Palmer Invitational has been played there since 1979 and is now a PGA Tour signature event.",
          "Two lakes cause recurring confusion. Big Sand Lake, at about 1,021 acres, and Little Sand Lake, about 151 acres, sit in the Shingle Creek watershed. They are not part of the Butler Chain of Lakes, which lies to the west around Windermere, and neither is covered by either of Orange County\u2019s two water and navigation control districts \u2014 the Lake Conway district and the Windermere district. Orange County\u2019s own community page describes Dr. Phillips as benefiting from proximity to the Butler Chain, which is fair as geography and misleading as a boating claim. If lake access matters to a purchase, establish which water body the property actually touches and what rules govern it before assuming anything.",
        ],
      },
    ],
    image: "/images/communities/dr-phillips.jpg",
    imageAlt: "Homes overlooking the course at Arnold Palmer\u2019s Bay Hill Club & Lodge, Dr. Phillips, Florida",
    gallery: [
      { src: "/images/communities/dr-phillips-homes-1.webp", alt: "Homes with palms backing onto the water and fairway at Bay Hill, Dr. Phillips, Florida" },
      { src: "/images/communities/dr-phillips-homes-2.webp", alt: "Large homes overlooking a green and bunkers at Bay Hill, Dr. Phillips, Florida" },
      { src: "/images/communities/dr-phillips-bay-hill.webp", alt: "The sixteenth hole at Bay Hill with homes across the water, Dr. Phillips, Florida" },
    ],
    photoCredit: {
      text: "Bay Hill photographs and details \u00a9 Matthewjh44 (CC BY-SA 4.0), via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Dr._Phillips,_Florida",
    },
    related: ["windermere", "orlando", "metrowest"],
    reviewNote:
      "Facts sourced: US Census (Doctor Phillips CDP - 2020 population 12,328, land area 3.40 sq mi); Orange County District 1 community page (named for Dr. Philip Phillips; 'Restaurant Row' described by the county itself as a NICKNAME, not a designation - the page says so); Orange County Sheriff's Office patrol sector page (Dr. Phillips served by OCSO, confirming county not city jurisdiction); Orange County Zoning Division and Zoning Verification Letter page ($128 conventional / $222 planned development, up to 30-day turnaround); Orange County Comptroller MSTU material; Orange County Water Atlas (Big Sand Lake 1,021 acres and flagged MSTU/MSBU; Little Sand Lake 151 acres; both in the Shingle Creek watershed, both unincorporated); Orange County Special Districts pages confirming only TWO water and navigation control districts exist - Lake Conway and Windermere - and the Butler Chain roster, neither of which includes Big or Little Sand Lake; Orlando Memory (Orange County Library System local-history archive) and Dr. Phillips Charities history page for the citrus and master-plan history, the 1920 company, the 1928 packing house, the 1954 Minute Maid sale and foundation, Bay Hill from 1960 on ~648 acres at two homes per acre, and Howard Phillips's sewer and water work; bayhill.com (Palmer's 1965 visit and quote, subsequent acquisition); PGA Tour official tournament page (Arnold Palmer Invitational, signature event status, 2026 dates) and the tournament site ('since 1979'). FLAGGED CONFLICT stated on the page: the county's own community page says Dr. Phillips benefits from proximity to the Butler Chain, while the Water Atlas chain roster excludes Big and Little Sand Lake - the page reports both rather than resolving it. NOT STATED: any characterisation of the area as affluent, exclusive or desirable; the exact year the name attached to the community (no source gives one); the Bay Hill 1960-development versus Palmer-1965 discrepancy is left unresolved as sources differ; details of a reported $90M Restaurant Row proposal (trade press only, article inaccessible); the live status of Orange County's 2024 development-application pause (not confirmed current).",
  },
  {
    slug: "windermere",
    name: "Windermere",
    intro:
      "A town of roughly 2.2 square miles on the Butler Chain of Lakes \u2014 and the address of about 30,000 parcels that are not in it. The gap between a Windermere mailing address and the Town of Windermere is the most expensive misunderstanding in this market.",
    lifestyle:
      "The town keeps much of its road network unpaved by choice, maintains its own police department and public works, and sits among the Butler Chain \u2014 a set of connected lakes carrying Florida\u2019s highest water-quality protection.",
    locationContext:
      "Southwest Orange County, west of Dr. Phillips and south of Ocoee, with the Butler Chain of Lakes to the east and north. The incorporated town is small; the surrounding unincorporated area sharing its ZIP code is many times larger.",
    housingOverview:
      "Inside the town limits the stock is largely established single-family housing on generous lots, much of it on or near the water. Outside the limits, under the same mailing address, the surrounding unincorporated area includes large gated and master-planned communities of an entirely different character and vintage \u2014 which is precisely why the two get conflated in listings and in buyers\u2019 expectations.",
    propertyTypes: [
      "Established single-family homes",
      "Lakefront homes on the Butler Chain",
      "Large-lot properties",
      "Gated-community homes in the surrounding unincorporated area",
    ],
    buyerConsiderations: [
      "Confirm whether the address is actually inside the Town of Windermere before assuming anything about services, taxes or voting \u2014 check the Municipality field on the Orange County Property Appraiser parcel record",
      "The town provides no water or sewer; properties are on private well and septic or connected to Orange County Utilities. Electric is Duke Energy, gas is Lake Apopka Natural Gas",
      "Many town streets are deliberately unpaved and the Council has treated keeping them that way as policy \u2014 form your own view on a specific street before contracting, not after",
      "On the Butler Chain, Outstanding Florida Water status raises the permitting bar for dock, shoreline and dredging work; no structure other than a boathouse, dock or well may sit within 50 feet of the normal high-water line, and no septic tank or drainfield within 150 feet absent a variance",
    ],
    sellerConsiderations: [
      "If the property is not inside the town limits, saying or implying that it is creates a real misrepresentation problem \u2014 the town itself publishes a list of nearby communities that are not part of Windermere",
      "Buildable envelope inside the town is constrained by a 2.5-storey / 35-foot height limit and a 38% floor area ratio in residential zones; these shape what a builder-buyer can do",
      "Waterfront buyers will ask about dock permitting under Outstanding Florida Water rules \u2014 having the existing permit history to hand shortens that conversation",
    ],
    amenities: [
      "Butler Chain of Lakes",
      "Town boat ramp and lake access for residents",
      "Town tennis courts and parks",
      "Windermere Town Hall",
      "Lake Down Park",
    ],
    transportation: [
      "Conroy-Windermere Road",
      "Main Street and Sixth Avenue",
      "CR 535",
      "State Road 429 nearby",
      "Florida\u2019s Turnpike nearby",
    ],
    extraSections: [
      {
        heading: "Windermere, or Windernear",
        body: [
          "The Town of Windermere states the position on its own website in plain language: only people inside the incorporated town limits are residents, and the reason others hold a Windermere address is simply how the post office sorts mail. The town puts the arithmetic at roughly 1,600 parcels inside the town against about 30,000 parcels carrying the Windermere ZIP code.",
          "The consequences are concrete rather than sentimental. An address outside the limits does not pay town taxes, cannot vote in town elections, is not served by the Windermere Police Department or town public works, and is not entitled to resident privileges such as boat ramp and tennis court access. The town goes as far as naming specific nearby communities on its own information page that are not part of Windermere \u2014 among them Summerport, Keene\u2019s Point, Casabella and Belmere, and the area around Reams Road.",
          "Even Isleworth, which is universally spoken of as Windermere, is treated as administratively separate in the town\u2019s own code: access to the town\u2019s Lake Bessie ramp for Isleworth property owners is limited to specific non-recreational purposes and runs through a formal request to the Town Manager.",
          "The check takes under a minute. Search the address on the Orange County Property Appraiser site and read the Municipality field. If it says unincorporated, the property is in Orange County, governed by county code, served by the Sheriff\u2019s Office, and permitted by the county \u2014 whatever the envelope says. The town itself gives this same instruction repeatedly across its FAQ.",
        ],
      },
      {
        heading: "Dirt roads and Outstanding Florida Waters",
        body: [
          "Two things distinguish property here from anywhere else in the county, and both are decisions the community has made deliberately.",
          "The first is the roads. Windermere maintains a substantial unpaved network and has treated keeping it that way as a policy question rather than a deficiency, weighing maintenance cost against character. The town runs selective paving projects \u2014 Old Main, Fifth Avenue, downtown ADA work \u2014 rather than a programme of converting everything. We could not find a codified dirt-road ordinance or a published total mileage, so this is best described as a settled Council posture rather than a law, and a buyer\u2019s honest question is simply whether they want to live on one, which is answered by driving it after rain rather than by reading anything.",
          "The second is the water. The Butler Chain of Lakes has been designated an Outstanding Florida Water since 1 March 1984 under the Florida Administrative Code, with Lake Blanche added in 1987. The designated waters include Butler, Down, Wauseon Bay, Louise, Palmer, Chase, Tibet, Sheen, Pocket and Fish, along with their connecting waterways. Outstanding Florida Water status is not decorative: state policy affords these waters the highest protection and permits no degradation of ambient water quality, so a proposed dock, seawall or dredging project faces a higher standard than the same work elsewhere. The town\u2019s own charter preamble commits public land use to protecting that designation.",
          "Layered on top, the town\u2019s land development code keeps principal and accessory structures other than boathouses, docks and wells at least 50 feet back from the normal high-water elevation, and septic tanks and drainfields 150 feet back absent a variance. For waterfront buyers those two numbers frequently matter more than lot size.",
        ],
      },
    ],
    image: "/images/communities/windermere.jpg",
    imageAlt: "A large white estate home on Lake Butler Sound in the Windermere area, Florida",
    gallery: [
      { src: "/images/communities/windermere-lake-down.webp", alt: "Lake Down Park on the Butler Chain of Lakes, Windermere, Florida" },
      { src: "/images/communities/windermere-town-hall.webp", alt: "The Town of Windermere town hall building" },
    ],
    photoCredit: {
      text: "Lake Butler Sound estate \u00a9 350z33 (CC BY-SA 3.0) \u00b7 town hall by SPUI (public domain) \u00b7 Lake Down Park, Town of Windermere (public domain) \u2014 via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:Windermere,_Florida",
    },
    related: ["dr-phillips", "orlando", "metrowest"],
    reviewNote:
      "Facts sourced: Town of Windermere FAQ and information pages (the ~2.2 sq mi figure, ~1,600 in-town parcels vs ~30,000 in-ZIP parcels, the explicit statement that a Windermere address does not make someone a resident, the named non-Windermere communities including Summerport / Keene's Point / Casabella / Belmere / Reams Rd, the instruction to check the Property Appraiser Municipality field, no town water or sewer, Duke Energy and Lake Apopka Natural Gas, contracted building and zoning services); Town Charter via Municode (council-manager form, five at-large council members, mayor votes only to break ties, 70% council vote required to rezone away from single-family, charter adopted by general election 14 March 2017, preamble committing public land to protecting the Outstanding Florida Waters designation); Town Land Development Code (2.5 storeys / 35 ft height cap and 38% FAR in residential zones; 50-ft structure setback and 150-ft septic setback from normal high water); Town Code Ch. 36 (boat ramp and waterway rules, Isleworth access via the Town Manager); Town 'Dirt Roads' page (selective paving projects); Fla. Admin. Code R. 62-302.700(9)(i) via legal-publisher mirrors (Butler Chain OFW effective 1 March 1984, Lake Blanche added 18 Feb 1987, named lakes) and Florida DEP OFW factsheet (no-degradation policy). NOT VERIFIED and therefore NOT STATED: the town's exact Census population and land area (sources conflict between 1.56, 2.2 and ~3 sq mi - the town's own 2.2 figure is used and attributed to the town); total miles of unpaved road (no published figure); the existence of a codified dirt-road ordinance (none found - described as Council policy, not law); any Windermere-specific short-term rental ordinance (none located; state preemption under s.509.032 F.S. is the likely reason but was not confirmed against statute text). The 33,000-population figure from a 2016 news interview is not used; the town's own parcel counts are used instead.",
  },
  {
    slug: "metrowest",
    name: "MetroWest",
    intro:
      "A 1,805-acre master-planned community inside the City of Orlando, begun in the 1980s on the Kirkman Road corridor \u2014 built from the outset to mix housing, offices and retail rather than to be purely residential.",
    lifestyle:
      "The MetroWest Golf Club, a public Robert Trent Jones Sr. course, sits at the centre, with Bill Frederick Park at Turkey Lake \u2014 183 acres of City of Orlando parkland \u2014 on the western side and Shadow Bay Park within the neighbourhood.",
    locationContext:
      "Southwest Orlando, bounded roughly by South Kirkman Road, Conroy Road, Florida\u2019s Turnpike and South Apopka-Vineland Road. Kirkman Road is State Road 435: it runs north along the neighbourhood\u2019s eastern edge toward the Universal Orlando area and the International Drive corridor, and interchanges with SR 408, which runs east into downtown.",
    housingOverview:
      "MetroWest was built as a mixed community and stayed one \u2014 condominiums and apartment buildings on the lakes, gated single-family streets, townhomes and offices in the same square mile. Its own master association describes apartments, condominiums and houses side by side, and reported the community had reached close to 10,000 residential units alongside roughly 1.4 million square feet of office space by around 2016. That mix is unusual for Orlando and it shapes who buys here.",
    propertyTypes: [
      "Condominiums",
      "Purpose-built rental apartments",
      "Single-family homes in gated subdivisions",
      "Townhomes",
      "Office and commercial space",
    ],
    buyerConsiderations: [
      "Condominium buyers should treat the association\u2019s reserves, milestone inspection status and insurance position as primary diligence, not paperwork",
      "The MetroWest Master Association governs the wider community in addition to any individual subdivision or condominium association \u2014 expect two layers of rules and fees, and read both",
      "Kirkman Road (SR 435) is under an active FDOT resurfacing and multimodal project including a new shared-use path near the MetroWest Boulevard bridge",
      "The mix of ownership and rental housing varies sharply building to building; confirm the specific community rather than generalising from the neighbourhood",
    ],
    sellerConsiderations: [
      "Buyer pools differ completely between a gated single-family street and a condominium building \u2014 pricing and marketing do not transfer between them",
      "For condominiums, having the association\u2019s financials, reserve study and inspection documents ready before listing shortens contracts materially",
      "Investor demand is a real part of this market for some property types, which changes how offers should be evaluated",
    ],
    amenities: [
      "MetroWest Golf Club",
      "Bill Frederick Park at Turkey Lake",
      "Shadow Bay Park",
      "Turkey Lake and Lake Hiawassee",
      "Valencia College West Campus nearby",
    ],
    transportation: [
      "S. Kirkman Road (SR 435)",
      "SR 408 East\u2013West Expressway",
      "Florida\u2019s Turnpike",
      "Conroy Road",
      "LYNX bus network",
    ],
    extraSections: [
      {
        heading: "Two associations, one address",
        body: [
          "The thing that catches buyers out in MetroWest is not the house, it is the governance. The community is administered by the MetroWest Master Association, which sits above the individual subdivision and condominium associations within it. A buyer can therefore be subject to master association rules and assessments, their own community\u2019s rules and assessments, and \u2014 in a condominium \u2014 the condominium documents on top of that.",
          "None of that is unusual for a master-planned community, and none of it is a problem if you read it. It becomes a problem when a buyer budgets for one set of dues and discovers a second, or assumes an approval process that does not exist. Ask for the master association documents and the individual association documents as two separate requests, because they are two separate organisations.",
          "For anyone buying a condominium here, the more consequential diligence is financial. Florida\u2019s milestone inspection and structural reserve requirements have changed what an older condominium association must do and must fund, and the practical consequence shows up as reserve balances, special assessments and insurance. Ask for the reserve study, the most recent financials, the inspection status and the minutes of the last year of board meetings. A building that has done the work is a different purchase from one that has deferred it, and the price should reflect which one you are buying.",
        ],
      },
      {
        heading: "Where it sits, and what that is worth",
        body: [
          "MetroWest occupies a genuinely convenient piece of southwest Orlando. Kirkman Road, which forms its eastern edge, is State Road 435 and connects north toward the attractions corridor and south toward Sand Lake Road; SR 408 interchanges with it and runs east across downtown Orlando. Florida\u2019s Turnpike forms the western boundary.",
          "That access is the reason the community was planned where it was, and it is worth being precise about it rather than repeating marketing claims. Commonly quoted drive times to downtown, Universal or the airport are not published by any government source we could verify, so we do not repeat them here \u2014 they vary by time of day in a way that a single number hides. The verifiable facts are the road connections themselves, and that FDOT currently has an active project on Kirkman Road covering resurfacing, drainage, ADA upgrades and a new ten-foot shared-use path that ties in near the MetroWest Boulevard bridge.",
          "The other durable asset is open space. Bill Frederick Park at Turkey Lake is a 183-acre City of Orlando park on the neighbourhood\u2019s western side, and Shadow Bay Park sits inside it. For a community this dense, that is a meaningful amount of public land within walking or short driving distance.",
        ],
      },
    ],
    image: "/images/communities/metrowest.jpg",
    imageAlt: "Lakefront condominium buildings at La Palazza in MetroWest, Orlando, Florida",
    gallery: [
      { src: "/images/communities/metrowest-veranda.webp", alt: "The Residences at the Veranda, a lakefront condominium building in MetroWest, Orlando" },
      { src: "/images/communities/metrowest-tradewinds.webp", alt: "Entrance and landscaping at the Tradewinds residential community in MetroWest, Orlando" },
      { src: "/images/communities/metrowest-homes.webp", alt: "Gabled residential buildings with balconies and palms in MetroWest, Orlando" },
    ],
    photoCredit: {
      text: "La Palazza, the Veranda and Tradewinds \u00a9 Rogerhamelin (CC BY-SA 3.0), via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/Category:MetroWest,_Orlando,_Florida",
    },
    related: ["orlando", "dr-phillips", "windermere"],
    reviewNote:
      "Facts sourced: MetroWest Master Association official site (1,805 acres, 1980s origin, ~10,000 residential units and ~1.4M sq ft office as of its 30th-anniversary material, housing mix); City of Orlando GIS neighbourhood map for MetroWest (boundaries: S. Kirkman Rd, Conroy Rd, Florida's Turnpike, S. Apopka-Vineland Rd; parks within); City of Orlando parks directory (Bill Frederick Park at Turkey Lake, 183 acres, 3401 S. Hiawassee Rd); MetroWest Golf Club official site (public, 18-hole par 72, Robert Trent Jones Sr.); FDOT/CFLRoads project 437341-1 (SR 435 Kirkman Rd resurfacing, shared-use path near MetroWest Blvd bridge); CFX (SR 408 crosses downtown Orlando). DELIBERATELY NOT STATED: drive-time or mileage claims to downtown, Universal, Disney or MCO - no government source publishes them and only operator marketing asserts them; the page says so explicitly. ALSO NOT STATED: any single governing 'MetroWest PD' ordinance (none located - the community appears to have been approved in phases), and the unit-count-by-type breakdown that circulates online (traceable only to newspaper archives, not a primary source). A reported Jan 2026 apartment sale (~$60M) was trade-press only and is excluded.",
  },
  {
    slug: "pine-hills",
    name: "Pine Hills",
    intro:
      "An unincorporated Orange County community west of Orlando where a decade of public investment \u2014 a transit centre, a trail, a community campus, sewer conversion and corridor rebuilds \u2014 has been landing on the ground, with a conceptual county vision for the corridor still open for comment.",
    lifestyle:
      "Barnett Park and the Pine Hills Trail anchor the recreational side, the Orange County Multicultural Center and the new Innovation Center form a public campus on West Colonial Drive, and the commercial corridor along Silver Star Road and Pine Hills Road is where most of the county\u2019s attention is directed.",
    locationContext:
      "Unincorporated Orange County immediately west of the City of Orlando, framed by West Colonial Drive, Silver Star Road, Pine Hills Road and Clarcona-Ocoee Road, with the Pine Hills Trail running north from Alhambra Drive.",
    housingOverview:
      "Pine Hills is largely a post-war and mid-century subdivision landscape, and much of the practical work of buying here is condition work rather than location work. Housing of this era commonly warrants attention to roof age, electrical panel type, supply-line material, and whether the property is on septic or has been connected to county sewer \u2014 each of which can affect insurability as much as comfort.",
    propertyTypes: [
      "Mid-century single-family homes",
      "Later single-family subdivisions",
      "Duplexes and small multi-family",
      "Rental homes and investor-held property",
    ],
    buyerConsiderations: [
      "Septic or sewer is parcel-specific here. County conversion work has covered specific stretches of Pine Hills Road, not the whole community \u2014 verify the individual parcel and ask whether any connection cost or assessment attaches to it",
      "On a house of this age, a four-point inspection, a wind-mitigation report and a sewer scope are worth commissioning before the inspection period closes, because roof age, panel type and supply lines drive insurance availability",
      "Check for open permits, code cases and liens on the parcel, and confirm that any converted garage, added bedroom or addition was permitted \u2014 unpermitted work is common in older stock everywhere and is cheaper to find before closing",
      "Ask whether the address falls inside the Pine Hills Neighborhood Improvement District boundary; it is a small corridor district, not the whole community",
    ],
    sellerConsiderations: [
      "Automated portal estimates and subdivision-level sale evidence diverge more here than in most of the county because the portals aggregate different areas and property types \u2014 price from comparable sales in the same subdivision, not from an online figure",
      "Resolving open permits, code cases or liens before listing is materially cheaper than resolving them inside a contract",
      "A pre-listing four-point inspection lets you price the roof, panel and plumbing questions rather than have a buyer price them for you",
      "Marketing must describe redevelopment accurately: several projects are open and verifiable, and the county\u2019s 2026 corridor renderings are explicitly conceptual. Advertising a concept as a coming project is a real risk",
    ],
    amenities: [
      "Pine Hills Trail",
      "Barnett Park",
      "Orange County Multicultural Center",
      "Orange County Innovation Center",
      "LYNX Pine Hills Transfer Center",
    ],
    transportation: [
      "West Colonial Drive (SR 50)",
      "Silver Star Road",
      "Pine Hills Road",
      "Clarcona-Ocoee Road",
      "LYNX Pine Hills Transfer Center",
      "Pine Hills Trail",
    ],
    extraSections: [
      {
        heading: "Reading the redevelopment honestly",
        body: [
          "The single most useful thing a buyer or seller can have here is the ability to tell the difference between a finished project, a funded one, and a picture. The table above sorts them that way, and every row links to the government source it came from.",
          "Some of it is unambiguously built. The LYNX Pine Hills Transfer Center at Belco Drive opened to riders in August 2025, an eight-bay facility the county puts at $18 million in total project cost with a $1.03 million county contribution, and Belco Drive was rebuilt with a new full-access signal alongside it. The Orange County Multicultural Center on West Colonial Drive \u2014 17,000 square feet on a former grocery site \u2014 opened in November 2023, and the county describes it as phase one of a three-phase campus. The Innovation Center on the same campus held a public preview in July 2026 with a stated full opening in the autumn. Phase one of the Pine Hills Trail, just under three miles, has been open since 2017.",
          "Some of it is real but in progress: pedestrian safety work on Pine Hills Road between Colonial Drive and Bonnie Brae Circle, and septic-to-sewer conversion along stretches of North Pine Hills Road, an earlier phase of which drew $4.3 million in state environmental funding.",
          "And some of it is a drawing. In May 2026 Orange County unveiled nine renderings for a Pine Hills Future Vision at two public sessions, covering transportation, economic development, pedestrian safety, beautification and housing. The county presents these as conceptual and is still gathering community input. They are not approved, funded or scheduled, and nobody should buy or sell on the assumption that they are. That distinction is the difference between an honest page and a misleading one.",
          "One figure to treat with care: Orange County has publicly cited more than $67 million invested in Pine Hills across transportation, beautification, housing and economic development. It is the county\u2019s own aggregate and it is not itemised project by project in the releases that state it.",
        ],
      },
      {
        heading: "Which government, and what shows up on the tax bill",
        body: [
          "Pine Hills is unincorporated. The Census lists it as a Census Designated Place rather than an incorporated municipality, which means there is no city hall, no city council and no city code. Orange County is the government: county zoning and permitting through Planning, Environmental and Development Services, county code enforcement, and the Orange County Sheriff\u2019s Office rather than a municipal police department.",
          "The Pine Hills Neighborhood Improvement District is the piece most often misunderstood. It was created by county Ordinance 2011-21 under section 163.506 of the Florida Statutes, and its funding was guaranteed through the end of 2032 by a later ordinance. It covers a corridor of roughly 290 acres and a few hundred properties \u2014 not the whole of Pine Hills \u2014 and it is a dependent special district of the county rather than an independent one. Importantly for a buyer\u2019s carrying costs, it is funded by an annual allocation of $125,000 from the county\u2019s Crime Prevention Fund, not by an ad valorem levy on parcels inside it. A 2025 state performance review noted the district\u2019s statutory improvement plan, adopted in 2015, had not been updated since.",
          "What can appear on a tax bill in unincorporated Orange County is a Municipal Service Taxing Unit. MSTUs fund localised things \u2014 street lighting, pond and common-area maintenance, subdivision walls, sometimes utility lines \u2014 and are billed directly on the annual property tax bill. Whether one applies is a parcel question, answered by pulling the actual tax bill rather than by asking about the neighbourhood.",
          "The same principle governs everything on this page. Sewer or septic, MSTU or none, inside the improvement district or outside it, permitted addition or not \u2014 all of it is decided at the parcel, and all of it is checkable before you are under contract.",
        ],
      },
    ],
    image: "/images/communities/pine-hills.jpg",
    imageAlt: "Residential street in Pine Hills, Orange County, Florida",
    related: ["orlando", "metrowest", "college-park"],
    reviewNote:
      "FAIR HOUSING - READ FIRST. This page reports public investment, infrastructure, jurisdiction and property-condition facts only. It contains NO reference to race, ethnicity, demographics, crime, safety, reputation or school quality, and it must stay that way. Tom's instruction was explicit: focus on redevelopment, never mention race or steering. Do not add 'up-and-coming', 'transitioning', 'improving area' or any similar coded language - those phrases are exactly what Fair Housing enforcement looks for. Facts sourced: OPPAGA contracted performance review of the Pine Hills NID (Ordinance 2011-21 under s.163.506 F.S.; funding guaranteed to 31 Dec 2032 via Ord. 2021-49; dependent special district; $125,000/yr from the county Crime Prevention Fund rather than ad valorem; 2015 improvement plan not since updated); Orange County Special Districts and NID pages (corridor acreage ~290 and property counts - note the county page says 289.85 acres while OPPAGA says ~231, unresolved, so the page says 'roughly 290'); Orange County newsroom (LYNX Pine Hills Transfer Center, $18M total / $1.03M county, service began 10 Aug 2025, grand opening 28 Aug 2025 - note several TV outlets report $15M, so the county's own figure is used; Multicultural Center 17,000 sq ft opened 14 Nov 2023 per county newsroom, though some outlets date the event to 19 Sept 2023; Innovation Center preview 8 July 2026, full opening stated as Fall 2026); Orange County transportation pages (Pine Hills Trail phase 1 = 2.96 miles, opened Oct 2017, ~8 miles planned across three phases); Orange County NID annual reports (Pine Hills Road pedestrian safety phases; septic-to-sewer, $4.3M FDEP, 100+ parcels - a later phase's parcel count differs between county sources, 93 vs 158, so no count is published here); Engage Orange / county newsroom May 2026 (nine Future Vision renderings, two sessions 6 May 2026, EXPLICITLY conceptual with input still being collected - the page states this plainly); county MSTU material via the Comptroller. The '$67 million invested' figure is a county-stated aggregate that is NOT itemised in the releases citing it, and the page says so. NO PHOTOS: Wikimedia Commons has no qualifying photograph of Pine Hills, Florida - the existing cover image is retained and no gallery is published rather than use an MLS or listing-site photo. NO neighbourhood price figures are published: portal estimates for Pine Hills diverge widely because they aggregate different areas and property types.",
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
