/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        col1: 'hsl(217, 28%, 15%)',
        col2: "hsl(218, 28%, 13%)",
        col3: "hsl(216, 53%, 9%)", // footer background
        col4: "hsl(219, 30%, 18%)", //testimonials background
      }
    },
  },
  plugins: [],
}

