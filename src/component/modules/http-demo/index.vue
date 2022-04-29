<template>
  <div>HTTP请求数据：{{ data }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useDemoService } from '@/service/modules/demo';

export default defineComponent({
  setup() {
    const data = ref();

    const demoService = useDemoService();

    demoService
      .hello()
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
