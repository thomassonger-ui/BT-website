import type { Config } from "tailwindcss";

/**
 * Bear Team design tokens.
 *
 * Documented in CONTENT_GUIDE.md ("Design tokens"). All colors meet WCAG 2.2 AA
 * contrast in their documented pairings:
 *   - ink / charcoal text on cream & white          (>= 12:1)
 *   - white text on teal-700 buttons                 (>= 5.4:1)
 *   - cream text on ink / charcoal backgrounds       (>= 11:1)
 *   - gold used decoratively or as large text on ink (>= 4.6:1)
 *
 * Replace with verified Bear Team brand colors when brand assets are supplied.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14171A", // near-black
        charcoal: {
          DEFAULT: "#23282D", // deep charcoal
          soft: "#3A4046",
        },
        cream: "#F6F1E7", // warm cream
        "soft-white": "#FDFCF8",
        teal: {
          50: "#EDF5F4",
          100: "#D5E8E6",
          600: "#25807A",
          700: "#1E6E68", // sophisticated teal (primary action)
          800: "#17544F",
          900: "#113E3B",
        },
        muted: "#5C6670", // muted gray (AA on cream & soft-white)
        gold: {
          DEFAULT: "#B08D3E", // restrained gold accent
          light: "#D3B876",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": "clamp(2.5rem, 5.5vw + 1rem, 4.75rem)",
        "display-lg": "clamp(2rem, 3.5vw + 1rem, 3.5rem)",
        "display-md": "clamp(1.5rem, 2vw + 1rem, 2.375rem)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
