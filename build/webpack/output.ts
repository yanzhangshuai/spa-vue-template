import { AssetInfo } from 'webpack';
import { Mode } from '../type/webpack';

/**
 *
 * @param mode
 * @param _pathData
 * @param _assetInfo
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function filename(mode: Mode, _pathData: unknown, _assetInfo?: AssetInfo): string {
  const hash = mode === 'production' ? '[contenthash].' : '';

  return `js/[name].${hash}js`;
}

/**
 *
 * @param mode
 * @param _pathData
 * @param _assetInfo
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function chunkFilename(mode: Mode, _pathData: unknown, _assetInfo?: AssetInfo): string {
  const hash = mode === 'production' ? '[contenthash].' : '';

  return `js/[name].${hash}js`;
}

/**
 * css filename
 * @param mode
 * @param _pathData
 * @param _assetInfo
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function cssFilename(mode: Mode, _pathData: unknown, _assetInfo?: AssetInfo) {
  const hash = mode === 'production' ? '[contenthash].' : '';

  return `css/[name].${hash}css`;
}

/**
 * css chunkFilename
 * @param mode
 * @param _pathData
 * @param _assetInfo
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function cssChunkFilename(mode: Mode, _pathData: unknown, _assetInfo?: AssetInfo): string {
  const hash = mode === 'production' ? '[contenthash].' : '';

  return `css/[name].${hash}css`;
}
