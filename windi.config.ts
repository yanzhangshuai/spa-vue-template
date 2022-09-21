import { defineConfig } from 'windicss/helpers';
import { themeParse } from './build/theme';

// TODO: themeParse处理无法使用热更新
const themes = themeParse();

export default defineConfig({
  darkMode: 'class',
  attributify: {
    prefix: 'w'
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: ['src/**/*.{vue,tsx,html,less,css}'],
    exclude: ['node_modules/**/*', '.git/**/*']
  },
  plugins: [],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        ...themes.default
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1600px'
      }
    },
    default: {}
  },
  shortcuts: {}
});
