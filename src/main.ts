import Vue from 'vue';
import { setupPlugin } from '@/plugin';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import App from '@/page/app.vue';
import '@/asset/style/tailwind.css';
import '@/asset/style/index.less';

setupPlugin();

setupComponent();

setupDirective();

setupService();

const store = setupStore();

const router = setupRouter();

new Vue({
  render: h => h(App),
  [store.name]: store,
  router
}).$mount('#app');
