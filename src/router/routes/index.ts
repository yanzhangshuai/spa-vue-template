import { flatMap, isArray } from 'lodash-es';
import { RouteRecordRaw } from 'vue-router';
import { XOR } from '@/@types/global';
import { moduleFilter } from '@/util/helper';

/**
 * 遍历moduleRoutes
 * @returns
 */
const findModuleRoutes = (): Array<RouteRecordRaw> => {
  const modules = moduleFilter<XOR<Array<RouteRecordRaw>, RouteRecordRaw>>(
    import.meta.globEager('./modules/*/index.ts')
  );

  return flatMap(
    Object.keys(modules).map((key) => {
      const module: XOR<Array<RouteRecordRaw>, RouteRecordRaw> = modules[key] as XOR<
        Array<RouteRecordRaw>,
        RouteRecordRaw
      >;
      return isArray(module) ? module : [module];
    })
  );
};

const moduleRoutes = findModuleRoutes();

export const routes: Array<RouteRecordRaw> = [
  ...moduleRoutes,
  {
    path: '/',
    redirect: '/home'
  }
];

export default routes;
