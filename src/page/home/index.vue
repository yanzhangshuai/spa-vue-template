<template>
  <layout />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useRoute } from '@/router';
import { useStore } from '@/store';
import { useHttp } from '@/service';
export default defineComponent({
  components: {},
  setup() {
    // const route = useRoute();
    // const store = useStore();
    // const http = useHttp();
    // http
    //   .get<string>(
    //     '/api/app/hello',
    //     {
    //       id: 1,
    //       name: '123',
    //       d: [1, 2],
    //       m: {
    //         '1': '1'
    //       }
    //     },
    //     {}
    //   )
    //   .then((res) => {
    //     console.log('res', res);
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
    return {};
  }
});
</script>
