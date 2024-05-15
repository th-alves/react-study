/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate_gray: "hsl(234, 29%, 20%)",
        charcoal_grey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
