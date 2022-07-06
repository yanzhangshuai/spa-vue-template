const plugins = {
  autoprefixer: {},
  tailwindcss: {}
};

if (process.env.NODE_ENV === 'production')
  plugins.cssnano = {};

module.exports = { plugins };
