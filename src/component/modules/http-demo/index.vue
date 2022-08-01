<script lang="tsx" setup>
import { useDemoService } from '@/service/modules/demo';

let data = $ref('');

const demoService = useDemoService();

demoService.hello()
  .then(res => data = res)
  .catch(err => console.error(err));

const render = () => {
  return (
    <div>HTTP请求数据 {data} </div>
  );
};
</script>

<template>
  <render />
</template>
