/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'kinsta-dark-blue': '#101319',
        'kinsta-shadow': '#373D4A',
        'kinsta-blur-1':'#3D6BF4',
        'kinsta-blur-2':'#21add6',
        'kinsta-blur-3': '#ee7a0f'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
