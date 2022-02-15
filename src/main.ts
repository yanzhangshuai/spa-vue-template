import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupPlugin } from '@/plugin';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import '@/asset/styles/tailwind.css';
import '@/asset/styles/index.less';
import App from '@/page/app.vue';

Vue.use(VueCompositionAPI);

setupPlugin();

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
