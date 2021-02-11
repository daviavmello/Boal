module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      light: '0 20px 25px 0 rgba(0, 0, 0, 0.05), 0 10px 10px 0 rgba(0, 0, 0, 0.02)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
