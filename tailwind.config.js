/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'mob': '320px',
      'mMob': '375px',
      'lMob': '425px',
      'tablet': '768px',
      'laptop':'1024px',
    }
  },
  plugins: [],
}

