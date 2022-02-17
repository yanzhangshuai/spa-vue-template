const plugins = {
  autoprefixer: {},
  'postcss-import': {},
  ['tailwindcss']: { config: './tailwind.config.js' }
};

if (process.env.NODE_ENV === 'production') {
  plugins['cssnano'] = {};
}
module.exports = { plugins };
