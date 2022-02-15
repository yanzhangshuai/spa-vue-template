import { Configuration } from 'webpack';
import Components from 'unplugin-vue-components/webpack';

//TODO: unplugin-vue-components/webpack 目前只支持vue后缀， 其它后缀的也都会添加后缀，生成后主动删除其它后缀,
export function autoVolarSupport(): Configuration {
  return {
    plugins: [
      Components({
        dirs: ['src/component/modules'],
        deep: true,
        extensions: ['vue'],
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
    ]
  };
}
