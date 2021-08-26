<template>
  <div>我是demo1</div>
  <!-- <input-number-test /> -->
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <button @click="onReload">onReload</button>
  <tsx-demo />
</template>

<script lang="ts" setup>
import { useReload } from '@/router/hooks/reload';
import { useThrottleFn } from '@vueuse/shared';

const reload = useReload();
const onReload = useThrottleFn(() => {
  reload().then((res) => console.log('res', res));
}, 3000);
</script>
