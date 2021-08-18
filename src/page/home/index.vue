<template>
  <h1 class="text-2xl text-blue-400">This is home</h1>

  <counter />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHttp } from '@/service';

export default defineComponent({
  setup() {
    const http = useHttp();
    http
      .get<string>(
        '/api/app/hello',
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
  }
});
</script>
