import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno, transformerDirectives
} from 'unocss';
import presetTheme from 'unocss-preset-theme';

import { themeParse } from './build/theme';

import type { Theme } from '@unocss/preset-uno';

// TODO: themeParse暂时无法处理文件热更新
const themes = themeParse();

const theme: Record<string, Theme> = {};

Object.keys(themes).filter(key => key !== 'default').forEach((key) => {
  theme[key] = {
    colors: themes[key]
  };
});

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html'],
  transformers: [
    transformerDirectives({ enforce: 'pre' })
  ],

  presets: [
    presetUno(),
    presetAttributify({ prefix: 'c-', prefixedOnly: false }),
    presetIcons(),
    presetTheme({ theme, prefix: '--style-theme' })
  ],

  theme: {
    colors: themes.default
  },

  shortcuts: [
    {
      'wh-full': 'w-full h-full',
      'wh-screen': 'w-screen h-screen',
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex-center flex-col',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'i-flex-center': 'inline-flex justify-center items-center',
      'i-flex-x-center': 'inline-flex justify-center',
      'i-flex-y-center': 'inline-flex items-center',
      'flex-col': 'flex flex-col',
      'flex-col-stretch': 'flex-col items-stretch',
      'i-flex-col': 'inline-flex flex-col',
      'i-flex-col-stretch': 'i-flex-col items-stretch',
      'flex-1-hidden': 'flex-1 overflow-hidden',
      'absolute-lt': 'absolute left-0 top-0',
      'absolute-lb': 'absolute left-0 bottom-0',
      'absolute-rt': 'absolute right-0 top-0',
      'absolute-rb': 'absolute right-0 bottom-0',
      'absolute-tl': 'absolute-lt',
      'absolute-tr': 'absolute-rt',
      'absolute-bl': 'absolute-lb',
      'absolute-br': 'absolute-rb',
      'absolute-center': 'absolute-lt flex-center wh-full',
      'fixed-lt': 'fixed left-0 top-0',
      'fixed-lb': 'fixed left-0 bottom-0',
      'fixed-rt': 'fixed right-0 top-0',
      'fixed-rb': 'fixed right-0 bottom-0',
      'fixed-tl': 'fixed-lt',
      'fixed-tr': 'fixed-rt',
      'fixed-bl': 'fixed-lb',
      'fixed-br': 'fixed-rb',
      'fixed-center': 'fixed-lt flex-center wh-full',
      'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
      'ellipsis-text': 'nowrap-hidden overflow-ellipsis',
      'transition-base': 'transition-all duration-300 ease-in-out',
      'btn': '        px-4 py-1.5 rounded cursor-pointer transition-base bg-transparent   b-1 b-solid b-border         text-text   hover:b-primaryBorder hover:text-primary',
      'btn-primary': 'px-4 py-1.5 rounded cursor-pointer transition-base bg-primary       b-1 b-solid b-primaryBorder  text-white  hover:bg-primaryHover hover:b-primaryHover'
    }
    // [/^btn-(.*)$/, ([, c]) => `px-4 py-1.5 rounded cursor-pointer transition-base bg-${c}-400  b-1 b-solid b-${c}-400 text-${c}-100 hover:bg-${c}-300 hover:b-${c}-300`]
  ]
});
