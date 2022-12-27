import { createApp } from 'vue';

import Store from '@/store';
import Plugin from '@/plugin';
import Router from '@/router';
import Service from '@/service';
import Component from '@/component';
import Directive from '@/directive';
import App from '@/app.vue';

const app = createApp(App);

app
  .use(Plugin)
  .use(Component)
  .use(Directive)
  .use(Router, () => app.mount('#app'))
  .use(Service)
  .use(Store);
