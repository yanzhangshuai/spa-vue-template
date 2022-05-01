module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'vue/setup-compiler-macros': true,
    'jest/globals': true
  },

  extends: ['prettier', '@antfu/eslint-config-vue'],
  plugins: ['prettier', 'jest'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.vue', '.tsx'],
    vueFeatures: {
      interpolationAsNonHTML: true
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'no-alert': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : [1, { allow: ['warn', 'error'] }],
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'eqeqeq': [2, 'always', { null: 'ignore' }],
    'semi': [2, 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/semi': [2, 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/no-explicit-any': 2,
    'vue/require-default-prop': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multi-word-component-names': 0,
    'vue-multiple-template-root': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/max-attributes-per-line': [0, { singleline: 1, multiline: { max: 1, allowFirstLine: false } }],

    'jest/consistent-test-it': [2, { fn: 'it' }],
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-have-length': 1,
    'jest/valid-describe-callback': 2,
    'jest/valid-expect': 2,
    'jest/valid-expect-in-promise': 2
  }
};
