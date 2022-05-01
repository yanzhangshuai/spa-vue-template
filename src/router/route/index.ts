import { flatMap, isArray } from 'lodash-es';
import type { RouteRecordRaw } from 'vue-router';
import { HomeRouteName } from './modules/home/const';
import { ErrorRouteName } from './modules/error/const';
import { moduleFilter } from '@/util/helper';

const routes: Array<RouteRecordRaw> = [
  ...findModuleRoutes(),
  {
    path: '/',
    redirect: HomeRouteName.DEFAULT_ROUTER
  },
  {
    path: '/:catchAll(.*)',
    redirect: {
      name: ErrorRouteName.NOT_FOUND_ROUTER
    }
  }
];

export default routes;

/**
 * 遍历moduleRoutes
 * @returns
 */
function findModuleRoutes(): Array<RouteRecordRaw> {
  const modules = moduleFilter<Array<RouteRecordRaw> | RouteRecordRaw>(
    require.context('./modules/', true, /\.(ts|js)$/),
    // 只需要第一层目录下面的index文件作为router
    /^\.\/(\w+)\/index\.(ts|js)$/
  );

  return flatMap(
    Object.keys(modules).map((key) => {
      const module: Array<RouteRecordRaw> | RouteRecordRaw = modules[key] as Array<RouteRecordRaw> | RouteRecordRaw;
      return isArray(module) ? module : [module];
    })
  );
}
