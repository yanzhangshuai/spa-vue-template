import { createApp } from 'vue';
import { setupUtils } from '@/util';
import { setupStore } from '@/store';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import { isReady, setupRouter } from '@/router';
import App from '@/page/app.vue';
import '@/assets/styles/index.less';

const app = createApp(App);

setupUtils(app);

setupComponent(app);

setupDirective(app);

setupRouter(app);

setupService(app);

setupStore(app);

//  等待router
isReady().then(() => {
  app.mount('#app');
});
