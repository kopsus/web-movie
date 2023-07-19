/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#E50914",
        hoverRed: "#D21B24",
        secondRed: "#640005",
        primaryBgBlack: "#000",
        primaryBlue: "#181537",
        primaryWhite: "#fff",
        primaryBrown: "#525252",
        primaryHoverBrown: "#2E2B2B",
        secondBrown: "#D9D9D9",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        backdrop: "url('/src/assets/backdrop.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}
