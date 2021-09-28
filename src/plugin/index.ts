import { setupStorage } from './storage';
import { setupGlobalProperty } from './global-property';

export function setupPlugin(): void {
  setupStorage();
  setupGlobalProperty();
}
