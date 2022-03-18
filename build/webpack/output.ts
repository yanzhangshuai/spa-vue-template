// export function assetFileNames(chunkInfo: PreRenderedAsset): string {
//   return '[ext]/[name].[hash].[ext]';
// }

import { AssetInfo } from 'webpack';

// const PAGE_REGEX = /src\/page\/(\w+)\//;
//
// const VUE_REGEX = /\/node_modules\/(@vue)/;
//
// const REGEX_CHUNK = [VUE_REGEX, PAGE_REGEX];

/**
 *
 * @param isBuild
 * @param path
 * @param asset
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function filename(isBuild: boolean, path: unknown, asset?: AssetInfo): string {
  return isBuild ? 'js/[name]_[contenthash].js' : 'js/[name].js';
}

/**
 *
 * @param isBuild
 * @param path
 * @param asset
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function chunkFilename(isBuild: boolean, path: unknown, asset?: AssetInfo): string {
  return isBuild ? 'js/[name]_[contenthash].js' : 'js/[name].js';
}
