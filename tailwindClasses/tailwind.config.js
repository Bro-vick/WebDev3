/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'my-shop': "url('../images/shop.jpeg')",
        'my-shop2': "url('../images/shop.jpeg')",
      }
    },
  },
  plugins: [],
}