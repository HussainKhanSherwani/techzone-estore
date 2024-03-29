/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet': "640px",
        // => @media (min-width: 640px) { ... }

        'laptop': "996px",
        // => @media (min-width: 996px) { ... }

        'desktop': "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};

