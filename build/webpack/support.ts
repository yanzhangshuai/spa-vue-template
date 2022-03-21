import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../type';
import { vueSupport } from './supports/vue';
import { htmlSupport } from './supports/html';
import { reportSupport } from './supports/report';
import { scriptSupport } from './supports/script';
import { chunksSupport } from './supports/chunks';
import { styleSupport } from './supports/style';
import { compressSupport } from './supports/compress';
import { variableSupport } from './supports/variable';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [vueSupport, scriptSupport, chunksSupport, variableSupport, styleSupport, htmlSupport, reportSupport, compressSupport];

  return webpackMerge(supports.map((support) => support(isBuild, env)));
}
