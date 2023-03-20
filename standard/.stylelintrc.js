module.exports = {
  'processors': [],
  'plugins': [],
  'extends': ['stylelint-config-html/vue'],
   "overrides": [
     { "files": ["*.less", "../**/*.less"], "customSyntax": "postcss-less" },
     { "files": ["*.vue", "../**/*.vue"], "rules": { "unit-allowed-list": ["em", "rem", "s", "px"] }, "customSyntax": "postcss-html" },
   ],
  'rules': {
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-empty-line-before': 'never',
    'block-no-empty': true,
    'indentation': 2,
    'color-hex-length': 'short',
    'no-empty-source': null,
    'max-nesting-depth': 5
  }
};
