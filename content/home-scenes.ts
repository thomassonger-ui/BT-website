/**
 * Cinematic homepage — 9 rooms × 4 sequential frames (Option A capture).
 * Scroll steps through the frames INSIDE each room (image-sequence animation,
 * like scrubbing video), then melts into the next room.
 * Frames per room were shot along one path at matched height/exposure.
 */
export type Room = {
  id: string;
  kicker: string;
  line: string;
  /** Which side of the frame the caption occupies (alternates, film-style). */
  align: "left" | "right";
  /** 4 sequential frames, in walk order. */
  frames: [string, string, string, string];
};

function frames(id: string): [string, string, string, string] {
  return [
    `/images/rooms/${id}-1.jpg`,
    `/images/rooms/${id}-2.jpg`,
    `/images/rooms/${id}-3.jpg`,
    `/images/rooms/${id}-4.jpg`,
  ];
}

export const rooms: Room[] = [
  { id: "01-exterior", kicker: "The Arrival", line: "First impressions begin at the curb.", align: "left", frames: frames("01-exterior") },
  { id: "02-entry", kicker: "The Entry", line: "Step inside.", align: "right", frames: frames("02-entry") },
  { id: "03-foyer", kicker: "The Foyer", line: "Welcome home.", align: "left", frames: frames("03-foyer") },
  { id: "04-living", kicker: "The Living Room", line: "Room to breathe.", align: "right", frames: frames("04-living") },
  { id: "05-great", kicker: "The Great Room", line: "Gather here.", align: "left", frames: frames("05-great") },
  { id: "06-dining", kicker: "The Dining Room", line: "Seat everyone you love.", align: "right", frames: frames("06-dining") },
  { id: "07-kitchen", kicker: "The Kitchen", line: "The heart of the home.", align: "left", frames: frames("07-kitchen") },
  { id: "08-lanai", kicker: "The Lanai", line: "Florida living has no walls.", align: "right", frames: frames("08-lanai") },
  { id: "09-pool", kicker: "Bear Team Real Estate", line: "Ready to find yours?", align: "left", frames: frames("09-pool") },
];

export const heroCopy = {
  headlineTop: "Find Your Place",
  headlineBottom: "in Central Florida.",
  copy: "Whether you are buying, selling, relocating, or exploring your options, Bear Team provides the experience and local guidance to help you move forward.",
};
