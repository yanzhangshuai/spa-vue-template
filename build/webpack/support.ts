import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../types';
import { vueSupport } from './supports/vue';
import { htmlSupport } from './supports/html';
import { antdSupport } from './supports/antd';
import { styleSupport } from './supports/style';
import { reportSupport } from './supports/report';
import { scriptSupport } from './supports/script';
import { variableSupport } from './supports/variable';
import { compressSupport } from './supports/compress';

export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    vueSupport(),
    scriptSupport(),
    variableSupport(isBuild, env.WEBPACK_FILE_PATH),
    antdSupport(env.WEBPACK_ANTD_ICONS_NEED_IMPORT),
    styleSupport(isBuild),
    htmlSupport(isBuild, env.WEBPACK_APP_TITLE),
    isBuild && env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);
  return webpackMerge(supports);
}
