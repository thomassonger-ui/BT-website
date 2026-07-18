/**
 * Cinematic homepage walkthrough scenes — photo sequence + minimal copy.
 * Scene 1 (hero) and the final scene are rendered specially by
 * components/sections/CinematicHome.tsx; the middle scenes are the walkthrough.
 */
export type HomeScene = {
  image: string;
  kicker: string;
  line: string;
};

export const walkthroughScenes: HomeScene[] = [
  { image: "/images/bt-2.jpg", kicker: "The Arrival", line: "First impressions begin at the curb." },
  { image: "/images/bt-3.jpg", kicker: "The Entry", line: "Step inside." },
  { image: "/images/bt-4.jpg", kicker: "The Living Room", line: "Room to breathe." },
  { image: "/images/bt-5.jpg", kicker: "The Great Room", line: "Gather here." },
  { image: "/images/bt-6.jpg", kicker: "The Dining Room", line: "Seat everyone you love." },
  { image: "/images/bt-7.jpg", kicker: "The Kitchen", line: "The heart of the home." },
  { image: "/images/bt-8.jpg", kicker: "Indoor–Outdoor", line: "Florida living has no walls." },
  { image: "/images/bt-9.jpg", kicker: "The Lanai", line: "Every day, a resort." },
];

export const heroScene = {
  image: "/images/bt-1.jpg",
  headlineTop: "Find Your Place",
  headlineBottom: "in Central Florida.",
  copy: "Whether you are buying, selling, relocating, or exploring your options, Bear Team provides the experience and local guidance to help you move forward.",
};

export const finaleScene = {
  image: "/images/bt-10.jpg",
  kicker: "Bear Team Real Estate",
  line: "Ready to find yours?",
};
