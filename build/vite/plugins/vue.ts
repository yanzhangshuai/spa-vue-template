import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { definePlugin } from '../../type/vite'

export default definePlugin(() => {
  return [
    vue({ reactivityTransform: true }),
    vueJsx({ optimize: true, transformOn: true }),
    Pages({ dirs: 'src/page', routeBlockLang: 'yaml' }),
    Components({
      dirs: ['src/component'],
      dts: 'src/component/shims-vue.d.ts',
      types: [],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/ // .vue
      ],
      resolvers: []
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/shims-import.d.ts',
      resolvers: []
    })
  ]
})
