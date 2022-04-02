<template>
  <div>HTTP请求数据：{{ data }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useHttp } from '@/service';

export default defineComponent({
  setup() {
    const data = ref();

    const http = useHttp();

    http
      .get('app/hello')
      .then((res) => {
        data.value = res;
      })
      .catch((err) => {
        console.error(err);
      });

    return { data };
  }
});
</script>
