module.exports = {
  'processors': [],
  'plugins': [],
  'extends': ['stylelint-config-standard-vue'],
   "overrides": [
     { "files": ["*.less", "**/*.less"], "customSyntax": "postcss-less" },
     { "files": ["*.vue", "**/*.vue"], "rules": { "unit-allowed-list": ["em", "rem", "s", "px"] } },
   ],
  'rules': {
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-empty-line-before': 'never',
    'at-rule-name-case': 'lower',
    'block-no-empty': true,
    'no-missing-end-of-source-newline': null,
    'indentation': 2,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'no-empty-source': null,
    'max-nesting-depth': 5
  }
};
