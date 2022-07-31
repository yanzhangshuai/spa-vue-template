import { flatMap } from 'lodash-es';
import type { RouteRecordRaw } from 'vue-router';
import { HomeRouteName } from './modules/home/const';
import { ErrorRouteName } from './modules/error/const';
import { isArray } from '@/util/is';
import { moduleFilter } from '@/util/helper';

const routes: Array<RouteRecordRaw> = [
  ...findModuleRoutes(),
  { path: '/', redirect: HomeRouteName.DEFAULT_ROUTER },
  { path: '/:catchAll(.*)', redirect: { name: ErrorRouteName.NOT_FOUND_ROUTER } }
];

export default routes;

/**
 * 遍历moduleRoutes
 * @returns
 */
function findModuleRoutes(): Array<RouteRecordRaw> {
  const modules = moduleFilter<Array<RouteRecordRaw> | RouteRecordRaw>(import.meta.glob('./modules/*/index.ts', { eager: true })) as Record<string, Array<RouteRecordRaw> | RouteRecordRaw>;

  return flatMap(Object.values(modules).map(module => isArray(module) ? module : [module]));
}
