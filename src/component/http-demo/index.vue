<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

import { DemoService } from '@/service/demo';

const { data } = useQuery({ queryFn: DemoService.load().getHello });
</script>

<template>
  <div class="my-2">HTTP请求数据: <span c-text="success hover:successHover"> {{ data }}</span></div>
</template>
