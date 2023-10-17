/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "slate-100": "#f1f5f9",
      "icon":{
        light: '#000',
        DEFAULT: '#000',
        dark: '#FFF',
      }
    },
  },
  plugins: [],
};
