/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xxs': '390px', // Defining for very small screens (e.g., 420px wide)
        'xxxs': '240px',
      },
    },
  },
  plugins: [],
};

