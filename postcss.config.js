const plugins = {
  autoprefixer: {},
  'postcss-import': {}
};

if (process.env.NODE_ENV === 'production') {
  plugins['cssnano'] = {};
}
module.exports = { plugins };
