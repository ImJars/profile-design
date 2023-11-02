/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18191A",
        secondary: "#242526",
        tertiary: "#4E4F50",
        verified: "#0967FF",
        textPrimary: "#B8BBBF",
      },
      },
    },
  plugins: [],
}