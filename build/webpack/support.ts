import { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { Env } from '../types';
import { vueSupport } from './supports/vue';
import { htmlSupport } from './supports/html';
import { antdSupport } from './supports/antd';
import { styleSupport } from './supports/style';
import { scriptSupport } from './supports/script';
import { reportSupport } from './supports/report';
import { variableSupport } from './supports/variable';
import { compressSupport } from './supports/compress';
export function support(isBuild: boolean, env: Env): Configuration {
  const supports = [
    vueSupport(),
    scriptSupport(),
    antdSupport(env.WEBPACK_ANTD_ICONS_NEED_IMPORT),
    variableSupport(isBuild, env.WEBPACK_IMAGE_URL),
    styleSupport(isBuild),
    htmlSupport(isBuild, env.WEBPACK_APP_TITLE),
    isBuild && env.WEBPACK_REPORT && reportSupport(),
    isBuild && compressSupport(env.WEBPACK_BUILD_COMPRESS, true)
  ].filter(Boolean);
  const conf = webpackMerge(supports);

  return conf;
}
