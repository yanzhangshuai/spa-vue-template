import Router from 'vue-router';
import { createAuthGuard } from './auth';
import { createHttpGuard } from './http';
import { createPermissionGuard } from './permission';

export function setupRouterGuard(router: Readonly<Router>): void {
  // createAuthGuard(router);
  createPermissionGuard(router);
  createHttpGuard(router);
}
