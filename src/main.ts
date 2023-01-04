import { createApp } from 'vue';

import { Win } from '@/win';
import Store from '@/store';
import Plugin from '@/plugin';
import Router from '@/router';
import Service from '@/service';
import Component from '@/component';
import Directive from '@/directive';
import App from '@/app.vue';

async function loadAppConfig() {
  try {
    const res = await fetch('/config/app.json');
    const data = await res.json();
    Win.appConfig = data;
  }
  catch (e) {
    alert(e);
    throw e;
  }
}

async function setupApp() {
  await loadAppConfig();

  const app = createApp(App);

  app
    .use(Plugin)
    .use(Component)
    .use(Directive)
    .use(Router, () => app.mount('#app'))
    .use(Service)
    .use(Store);
}

setupApp().then();
