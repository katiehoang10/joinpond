import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10304A",       // deep pond water — text
        surface: "#F3F8F6",   // cool, misty page background
        lily: "#D6EBCF",      // lily-pad green — section washes
        ripple: "#9CC3DA",    // light water blue — ripple lines
        indigo: {
          DEFAULT: "#4F46E5", // Pond's CTA color
          dark: "#3F37C9",
        },
        depth: "#0C2639",     // footer / darkest water
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
