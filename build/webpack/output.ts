import { AssetInfo } from 'webpack';

/**
 *
 * @param isBuild
 * @param path
 * @param asset
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function filename(isBuild: boolean, _: unknown, asset?: AssetInfo): string {
  return isBuild ? 'js/[name].[contenthash].js' : 'js/[name].js';
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
  return isBuild ? 'js/[name].[contenthash].js' : 'js/[name].js';
}

/**
 * css filename
 * @param isBuild
 * @returns
 */
export function cssFilename(isBuild: boolean) {
  return isBuild ? 'css/[name].[contenthash].css' : 'css/[name].css';
}

export function cssChunkFilename(isBuild: boolean): string {
  return isBuild ? 'css/[name].[contenthash].css' : 'css/[name].css';
}
