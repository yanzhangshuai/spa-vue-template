import helper from 'vue-component-volar';

import path from 'path';

// @ts-ignore
import { CNamePrefix } from '../const';

const componentPath = path.join(__dirname, '../');

helper({
  globs: path.join(componentPath, 'modules/**/*.{vue,tsx}').replace(/\\/g, '/'),
  output: path.join(componentPath, 'shims-volar.d.ts').replace(/\\/g, '/'),
  prefixPath: './modules',
  prefixName: CNamePrefix,
  tabWidth: 2,
  ignoreExt: ['tsx'],
  namingStyle: 'hyphen',
  semi: false,
  singleQuote: true
});
