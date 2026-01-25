/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#dc2626",
        "primary-hover": "#b91c1c",
        "primary-light": "#ef4444",
        "lime-yellow": "#ffffff",
        "cyan": "#dc2626",
        "pink": "#dc2626",
        "bright-blue": "#000000",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque"', "sans-serif"],
      },
      screens: {
        midmd: "880px",
      },
    },
  },
  plugins: [],
};
