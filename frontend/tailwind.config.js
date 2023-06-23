/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "Kanit": 'Kanit',
    }
  },
  plugins: [require("daisyui")],
}

