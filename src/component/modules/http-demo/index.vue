<template>
  <div>HTTP请求数据：{{ data }}</div>
</template>
<script setup lang="ts">
import { useHttp } from '@/service';

let data = $ref();

const http = useHttp();

http
  .get('app/hello')
  .then((res) => {
    data = res;
  })
  .catch((err) => {
    console.error(err);
  });
</script>
