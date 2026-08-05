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
 * HARD RULES (verified 2026-08-05, do not break):
 *   - `gold` (#B08D3E) is 3.04:1 on soft-white and 2.77:1 on cream. It may ONLY
 *     be used as a background fill, a border, or as text on ink/charcoal.
 *     NEVER as text on a light surface — use `gold-dark` there.
 *   - `gold-light` (#D3B876) is 1.88:1 on soft-white. Dark backgrounds only.
 *   - `gold-dark` (#856A2E) is 4.99:1 on soft-white and 4.55:1 on cream —
 *     the light-surface gold for text.
 *   - `field` (#767D84) is 4.06:1 on soft-white — the minimum-visible border
 *     for form controls and other interactive boundaries (WCAG 1.4.11 needs
 *     3:1). Decorative card hairlines may stay at ink/10.
 *   - Focus rings on LIGHT surfaces use teal-700 (5.87:1). Gold focus rings
 *     are for dark surfaces only.
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
        /** Interactive-control border. 4.06:1 on soft-white — clears 1.4.11. */
        field: "#767D84",
        gold: {
          DEFAULT: "#B08D3E", // restrained gold accent — fills/borders/dark-bg text only
          light: "#D3B876", // dark backgrounds only
          dark: "#856A2E", // 4.99:1 on soft-white — gold TEXT on light surfaces
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
