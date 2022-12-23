/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#2B3467",
          secondary: "#00FFAB",
          neutral: "#1C315E",
          accent: "#FF597B"
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
