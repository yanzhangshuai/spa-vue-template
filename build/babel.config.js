const plugins = [];

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', loose: true, corejs: { version: '3.21.1', proposals: true } }],
    ['@babel/preset-typescript', { allExtensions: true }]
  ],
  plugins
};
