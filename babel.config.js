const plugins = [
  ['@vue/babel-plugin-jsx', {}],
  ['@babel/plugin-proposal-function-bind'],
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-class-properties', { loose: true }]
].filter(Boolean);

if (process.env.NODE_ENV === 'production'){
  plugins.push(['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }])
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        loose: true,
        corejs: {
          version: '3.15.2',
          proposals: true
        }
      }
    ],
    ['@babel/preset-typescript', { allExtensions: true }]
  ],
  plugins: plugins
};
