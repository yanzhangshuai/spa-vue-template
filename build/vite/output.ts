import type { PreRenderedAsset, PreRenderedChunk } from 'rollup';

export function entryFileNames(_chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

export function chunkFileNames(_chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

export function assetFileNames(_chunkInfo?: PreRenderedAsset): string {
  return '[ext]/[name].[hash].[ext]';
}

/**
 * 生成chunk
 * @param id
 * @param api
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
