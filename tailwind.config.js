/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-bebas_neue)"],
      },
      colors: {
        primary: {
          50: "#f2f5fc",
          100: "#e1e8f8",
          200: "#cad6f3",
          300: "#9fb8ea",
          400: "#7a9ae0",
          500: "#5a79d7",
          600: "#465dca",
          700: "#3c4cb9",
          800: "#364097",
          900: "#303978",
          950: "#21254a",
        },
        secondary: {
          50: "#f2fbf9",
          100: "#d1f6ef",
          200: "#9eeade",
          300: "#6edacd",
          400: "#40c1b6",
          500: "#27a59b",
          600: "#1d847f",
          700: "#1b6a67",
          800: "#1a5553",
          900: "#1a4746",
          950: "#092a2a",
        },
      },
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
