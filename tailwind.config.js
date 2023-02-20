/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chatGrey: {
          300: "rgb(62, 63, 75)",
          400: "rgb(52, 53, 65)",
          700: "rgb(32, 33, 35)",
        },
        chatGreen: {
          400: "rgb(18, 163, 125)",
        },
      },
    },
    plugins: [],
  },
};
