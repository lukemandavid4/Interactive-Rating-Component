/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        darkBlue: "hsl(213, 19%, 18%)",
        darkerBlue: "hsl(216, 12%, 8%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
