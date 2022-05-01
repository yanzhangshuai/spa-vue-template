const plugins = [
  ['@vue/babel-plugin-jsx', {}],
  ['@babel/plugin-proposal-function-bind'],
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-class-properties', { loose: true }]
];

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', loose: true, corejs: { version: '3.21.1', proposals: true } }],
    ['@babel/preset-typescript', { allExtensions: true }]
  ],
  plugins
};
