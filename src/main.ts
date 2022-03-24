import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupPlugin } from '@/plugin';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import App from '@/page/app.vue';
import 'windi.css';
import '@/asset/style/index.less';

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
