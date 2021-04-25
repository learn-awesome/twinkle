const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    '../learn/public/**/*.html',
    '../learn/app/views/**/*.html.erb',
    '../learn/app/views/**/*.html+tailwind.erb',
    '../learn/app/views/**/*.html.slim',
    '../learn/app/views/**/*.html+tailwind.slim',
    '../learn/app/helpers/**/*.rb',
    '../learn/app/components/**/*.html.erb'
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
    colors: {
      brand: colors.indigo,
      primary: colors.indigo,
      secondary: colors.fuchsia,
      primaryBg: colors.white,
      secondaryBg: colors.white,
      success: colors.green,
      failure: colors.red,
      warning: colors.orange,
      info: colors.lightBlue,
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.red,
      transparent: 'transparent',
      current: 'currentColor',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
