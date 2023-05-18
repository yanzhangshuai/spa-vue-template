<script lang="ts" setup>
import { useQuery } from 'vue-query/esm';

import { getHello } from '@/service/demo';

const { data } = useQuery({ queryFn: getHello });
</script>

<template>
  <div class="my-2">HTTP请求数据: <span c-text="success hover:successHover"> {{ data }}</span></div>
</template>
