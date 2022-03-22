<template>
  <div>
    <h1 class="text-2xl text-blue-400">This is home</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useHttp } from '@/service';
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  components: {},
  setup() {
    const http = useHttp();
    http
      .get<string>(
        '/app/hello',
        {
          id: 1,
          name: '123',
          d: [1, 2],
          m: {
            '1': '1'
          }
        },
        {}
      )
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
    return {};
  }
});
</script>
