import type { RouteRecordRaw } from 'vue-router';

import { flatMap, isArray } from 'lodash-es';

import { moduleFilter } from '@/util/helper';

import { HomeRouteName } from './modules/home/const';
import { ErrorRouteName } from './modules/home/error/const';

const routes: Array<RouteRecordRaw> = [
  ...findModuleRoutes(),
  {
    path: '/',
    redirect: HomeRouteName.DEFAULT
  },
  {
    path: '/:catchAll(.*)',
    redirect: {
      name: ErrorRouteName.NOT_FOUND
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

  const routes = Object.keys(modules).map((key) => {
    const module = modules[key] as Array<RouteRecordRaw> | RouteRecordRaw;
    return isArray(module) ? module : [module];
  });

  return flatMap(routes);
}
