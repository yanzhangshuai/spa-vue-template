import type { Route, RouteMeta } from 'vue-router';

export function getMeta(route: Route): RouteMeta {
  return route.matched.reduce((prev, curr) => {
    return { ...(prev || {}), ...(curr?.meta || {}) };
  }, {});
}
