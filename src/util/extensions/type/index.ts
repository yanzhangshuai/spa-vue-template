import { isArray, isObject } from 'lodash-es';
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function isNumeric(val: any): val is number | string {
  return !isArray(val) && !isObject(val) && val - parseFloat(val) + 1 >= 0;
}
