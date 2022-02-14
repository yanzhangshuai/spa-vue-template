import { Plugin } from 'vite';
import Components from 'unplugin-vue-components/vite';

//TODO: unplugin-vue-components/vite 目前只支持vue后缀， 其它后缀的也都会添加后缀，生成后主动删除其它后缀,
export function autoVolarPlugin(): Plugin | Array<Plugin> {
  return [
    Components({
      dirs: ['src/component/modules'],
      deep: true,
      extensions: ['vue', 'tsx'],
      include: [/\.vue$/, /\.tsx$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/component/shims-volar.d.ts'
    })

    // Components({
    //   dirs: ['src/directive/modules'],
    //   deep: true,
    //   extensions: ['ts'],
    //   include: [/\.ts$/, /\.md$/],
    //   dts: 'src/directive/shims-volar.d.ts' // enabled by default if `typescript` is installed
    // })
  ];
}
