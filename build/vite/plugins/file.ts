import { viteStaticCopy } from 'vite-plugin-static-copy'

import { definePlugin } from '../../../build/type/vite'

export default definePlugin(() => {
  return viteStaticCopy({
    targets: [
      {
        src: ['src/config/app.json', 'src/asset'],
        dest: ''
      }
    ]
  })
})
