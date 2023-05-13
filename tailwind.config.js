/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: false,
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      height: {
          '94': '22rem',
      },
      spacing: {
          '8xl': '96rem',
          '9xl': '128rem'
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
}

  