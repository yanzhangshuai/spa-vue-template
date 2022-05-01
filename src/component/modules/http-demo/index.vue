<script setup lang="ts">
import { useDemoService } from '@/service/modules/demo';

const demoService = useDemoService();

let data = $ref('');

demoService
  .hello()
  .then((res) => {
    data = res;
  })
  .catch((err) => {
    console.error(err);
  });
</script>

<template>
  <div>HTTP请求数据：{{ data }}</div>
</template>
