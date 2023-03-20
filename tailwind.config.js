/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "primary-500": "#91A117",
      "secondary-500": "#EDD11D",
      "black-100": '#B1A9A9',
      "black-400": '#363031',
      "black-500": "#231F20",
      "white-500": "#FBFBFF",
    },
    extend: {
      fontFamily: {
        logo: ["Rubik Iso"],
        title: ["VT323"],
        body: ["Source Code Pro"],
      },
    },
    plugins: [],
  }
}