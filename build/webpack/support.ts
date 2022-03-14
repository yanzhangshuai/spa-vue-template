import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../type';
import { compressSupport } from './supports/compress';
import { htmlSupport } from './supports/html';
import { uiSupport } from './supports/ui';
import { reportSupport } from './supports/report';
import { scriptSupport } from './supports/script';
import { styleSupport } from './supports/style';
import { variableSupport } from './supports/variable';
import { vueSupport } from './supports/vue';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [vueSupport, scriptSupport, variableSupport, styleSupport, uiSupport, htmlSupport, reportSupport, compressSupport];

  return webpackMerge(supports.map((support) => support(isBuild, env)));
}
