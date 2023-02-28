/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'kinsta-dark-blue': '#101319',
        'kinsta-shadow': '#373D4A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
