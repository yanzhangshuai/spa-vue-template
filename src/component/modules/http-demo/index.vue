<template>
  <div>HTTP请求数据：{{ data }}</div>
</template>
<script setup lang="ts">
import { useDemoService } from '@/service/modules/demo';

let data = $ref('');

const demoService = useDemoService();

demoService
  .hello()
  .then((res) => {
    data = res;
  })
  .catch((err) => {
    console.error(err);
  });
</script>
