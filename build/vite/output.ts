import { PreRenderedAsset, PreRenderedChunk } from 'rollup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function entryFileNames(chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function chunkFileNames(chunkInfo: PreRenderedChunk) {
  return 'js/[name].[hash].js';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assetFileNames(chunkInfo?: PreRenderedAsset): string {
  return '[ext]/[name].[hash].[ext]';
}

/**
 * 生成chunk
 * @param id
 * @param api
 */
export function manualChunks(id: string): string | null | undefined {
  if (id.includes('node_modules')) {
    return nodeModulesChunks(id);
  }

  if (id.includes('/src/page')) {
    return pageChunks(id);
  }

  return 'index';
}

function nodeModulesChunks(id: string) {
  if (/[\\/]node_modules[\\/](@)?vue/.test(id)) {
    return '__libs';
  }

  return '__vendors';
}

function pageChunks(id: string) {
  return id.match(/src\/page\/(\w+)\//)?.[1] || 'page';
}
