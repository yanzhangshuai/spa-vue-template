import type { PreRenderedAsset, PreRenderedChunk } from 'rollup';

export function entryFileNames(_chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

export function chunkFileNames(_chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

export function assetFileNames(chunkInfo?: PreRenderedAsset): string {
  const extFileDirMap: Record<string, string> = {
    'png,gif,jpg,jpeg,svg': 'asset/image'
  };

  const ext = chunkInfo?.name.match(/\.(\w+)$/)?.[1] || 'js';

  const dir = Object.keys(extFileDirMap)
    .filter(key => key.split(',').includes(ext))
    .map(key => extFileDirMap[key])
    ?.[0] || '[ext]';

  return `${dir}/[name].[hash].[ext]`;
}

/**
 * 生成chunk
 * @param id
 */
export function manualChunks(id: string): string | null | undefined {
  if (id.includes('node_modules'))
    return nodeModulesChunks(id);

  if (id.includes('/src/page'))
    return pageChunks(id);

  return 'index';
}

function nodeModulesChunks(id: string) {
  if (/[\\/]node_modules[\\/](@)?vue/.test(id))
    return '__libs';

  return '__vendors';
}

function pageChunks(id: string) {
  return id.match(/src\/page\/(\w+)\//)?.[1] || 'page';
}
