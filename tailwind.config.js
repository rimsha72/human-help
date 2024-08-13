/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          150: "#59BBE4",
          250: "#151515",
          350: "#666666",
        },
      },
    },
  },
  plugins: [],
};
