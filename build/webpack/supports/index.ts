import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../../types';
import { vueSupport } from './vue';
import { htmlSupport } from './html';
import { styleSupport } from './style';
import { scriptSupport } from './script';
import { reportSupport } from './report';
import { isReportMode } from '../../utils';
import { variableSupport } from './variable';
import { compressSupport } from './compress';
export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    variableSupport(),
    vueSupport(),
    scriptSupport(),
    styleSupport(isBuild),
    htmlSupport(isBuild),
    isBuild && isReportMode() && reportSupport(),
    isBuild && compressSupport(env.BUILD_COMPRESS, true)
  ].filter(Boolean);
  const conf = webpackMerge(supports);

  return conf;
}
