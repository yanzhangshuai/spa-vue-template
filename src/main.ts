import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupUtil } from '@/util';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import App from '@/page/app.vue';
import '@/asset/styles/index.less';
import '@/asset/styles/tailwind.css';

Vue.use(VueCompositionAPI);

setupUtil();

setupComponent();

setupDirective();

setupService();

const store = setupStore();

const router = setupRouter();

new Vue({
  render: (h) => h(App),
  [store.name]: store,
  router
}).$mount('#app');
