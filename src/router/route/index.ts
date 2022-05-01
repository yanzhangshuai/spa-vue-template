import { flatMap } from 'lodash-es';
import type { RouteRecordRaw } from 'vue-router';
import { HomeRouteName } from './modules/home/const';
import { ErrorRouteName } from './modules/error/const';
import { isArray } from '@/util/is';
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
  const modules = moduleFilter<Array<RouteRecordRaw> | RouteRecordRaw>(import.meta.globEager('./modules/*/index.ts'));

  return flatMap(
    Object.keys(modules).map((key) => {
      const module: Array<RouteRecordRaw> | RouteRecordRaw = modules[key] as Array<RouteRecordRaw> | RouteRecordRaw;
      return isArray(module) ? module : [module];
    })
  );
}
