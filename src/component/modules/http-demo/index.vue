<script lang="ts" setup>
import { useDemoService } from '@/service/modules/demo';

let data = $ref('');

const demoService = useDemoService();

demoService.hello()
  .then(res => data = res)
  .catch(err => console.error(err));
</script>

<template>
  <div class="my-2">HTTP请求数据: <span c-text="success hover:successHover"> {{ data }}</span> </div>
</template>
