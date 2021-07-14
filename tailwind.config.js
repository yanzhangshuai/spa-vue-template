module.exports = {
  mode: process.env.NODE_ENV === 'development' && 'jit',
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx,stories.js}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {}
  },
  plugins: []
};
