import { AssetInfo } from 'webpack';
import { Mode } from '../type/webpack';

/**
 *
 * @param mode
 * @param _
 * @param asset
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function filename(mode: Mode, _: unknown, asset?: AssetInfo): string {
  return mode === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js';
}

/**
 *
 * @param mode
 * @param path
 * @param asset
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function chunkFilename(mode: Mode, path: unknown, asset?: AssetInfo): string {
  return mode === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js';
}

/**
 * css filename
 * @returns
 * @param mode
 */
export function cssFilename(mode: Mode) {
  return mode === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css';
}

/**
 * css chunkFilename
 * @param mode
 */
export function cssChunkFilename(mode: Mode): string {
  return mode === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css';
}
