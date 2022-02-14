import { GetManualChunkApi, PreRenderedAsset } from 'rollup';

export function assetFileNames(chunkInfo: PreRenderedAsset): string {
  return '[ext]/[name].[hash].[ext]';
}

const REGEX_CHUNK = [/\/node_modules\/(@vue)/, /src\/page\/(\w+)\//];

/**
 * 生成chunk
 * @param id
 * @param api
 */
export function manualChunks(id: string, api: GetManualChunkApi): string | null | undefined {
  //  根据包名称生成制定的chunk
  const matchedRegex = REGEX_CHUNK.find((regex) => regex.test(id));

  if (!matchedRegex) return 'index';

  return id.match(matchedRegex)?.[1] || 'index';
}
