import path from 'path';
import helper from 'vue-component-volar';
// @ts-expect-error 无法判断类型
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
