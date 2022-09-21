import { flatMap } from 'lodash-es';
import { isArray } from '@mwjz/utils';
import type { RouteRecordRaw } from 'vue-router';
import { HomeRouteName } from './modules/home/const';
import { ErrorRouteName } from './modules/home/error/const';
import { moduleFilter } from '@/util/helper';

const routes: Array<RouteRecordRaw> = [
  ...findModuleRoutes(),
  { path: '/', redirect: HomeRouteName.DEFAULT },
  { path: '/:catchAll(.*)', redirect: { name: ErrorRouteName.NOT_FOUND } }
];

export default routes;

/**
 * 遍历moduleRoutes
 * @returns
 */
function findModuleRoutes(): Array<RouteRecordRaw> {
  const modules = moduleFilter(import.meta.glob('./modules/*/index.ts', { eager: true })) as Record<string, Array<RouteRecordRaw> | RouteRecordRaw>;

  return flatMap(Object.values(modules).map(module => isArray(module) ? module : [module]));
}
