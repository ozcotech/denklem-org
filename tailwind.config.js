const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      {
        dark: {
          "base-100": "#E5E7EB",       // light gray background
          "base-content": "#93C5FD",   // light blue text
          // optional additional shades if desired:
          // "base-200": "#D1D5DB",
          // "base-300": "#9CA3AF",
        }
      }
    ],
    darkTheme: "dark",
    logs: true,
  },
}