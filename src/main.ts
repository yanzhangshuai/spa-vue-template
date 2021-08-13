import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import { isReady, setupRouter } from '@/router';
import App from '@/page/app.vue';
import '@/assets/styles/index.less';
import '@/assets/styles/tailwind.css';

const app = createApp(App);

setupComponent(app);

setupDirective(app);

setupRouter(app);

setupService(app);

setupStore(app);

//  等待router
isReady().then(() => {
  app.mount('#app');
});
