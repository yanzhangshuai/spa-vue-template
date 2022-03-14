import { AssetInfo } from 'webpack';

// export function assetFileNames(chunkInfo: PreRenderedAsset): string {
//   return '[ext]/[name].[hash].[ext]';
// }

// const PAGE_REGEX = /src\/page\/(\w+)\//;
//
// const VUE_REGEX = /\/node_modules\/(@vue)/;
//
// const REGEX_CHUNK = [VUE_REGEX, PAGE_REGEX];

/**
 * 生成chunk
 * @param path
 * @param asset
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function chunkFilename(path: unknown, asset: AssetInfo): string {
  return 'js/[name].[contenthash].js';
}
