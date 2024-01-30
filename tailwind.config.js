/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "hsl(75, 94%, 57%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 20%)",
          darkGrey: "hsl(0, 0%, 12%)",
          offBlack: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
};
