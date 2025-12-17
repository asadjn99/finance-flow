import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers everything in src
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Fallback if not in src
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Fallback
  ],
  theme: {
    extend: {
      colors: {
        primary: "#88B702",
        background: "#050605",
        surface: "rgba(255, 255, 255, 0.1)",
        "surface-hover": "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1512px",
        },
      },
    },
  },
  plugins: [],
};
export default config;