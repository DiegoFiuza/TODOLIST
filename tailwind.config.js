/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'main':'35.20rem',
        'subMain':'18.88rem',
      },
    },
    screens: {
      'mob': '320px',
      'mMob': '375px',
      'lMob': '425px',
      'tablet': '768px',
      'laptop':'1024px',
      'desktop':'1440px',
      '4k':'2560px',
    },
  },
  plugins: [],
}

