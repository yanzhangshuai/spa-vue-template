import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import App from '@/pages/app.vue';
import '@/assets/styles/index.less';
import '@/assets/styles/tailwind.css';

Vue.use(VueCompositionAPI);

setupComponent();

setupDirective();

const router = setupRouter();

const store = setupStore();

new Vue({
  render: (h) => h(App),
  [store.name]: store,
  router
}).$mount('#app');
