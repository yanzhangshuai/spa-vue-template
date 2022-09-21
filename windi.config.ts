import { defineConfig } from 'windicss/helpers';
import { themeParse } from './build/theme';

//  解析主题 TODO:暂未使用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const themes = themeParse();

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  extract: {
    // accepts globs and file paths relative to project root
    include: ['src/**/*.{vue,tsx,html,less,css}'],
    exclude: ['node_modules/**/*', '.git/**/*']
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        primary: '#007fff',
        block: '#0a1f44'
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
