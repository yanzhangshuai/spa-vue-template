<script setup lang="ts">
import { onMounted, ref, unref, watch } from 'vue';
import { HomeRouteName } from '@/router/route/modules/home/const';
import type { RefSetupDemoExpose } from '@/component/modules/ref-setup-demo/type';

const name = $ref('ref-setup-demo');

const refSetupDemoRef = ref<RefSetupDemoExpose>(null);

onMounted(() => {
  unref(refSetupDemoRef)?.onBtn();
});

watch($$(name), (newVal) => {
  console.log('name changed', newVal);
});
</script>

<template>
  <div class="text-black" @click="$window.alert('1')">我是demo1</div>
  <button class="text-red-700 dark:text-green-400" @click="$router.push({ name: HomeRouteName.DEMO2 })">Go To Demo2</button>
  <m-http-demo />
  <m-ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <m-global-props-demo />
  <m-date-picker-test />
</template>
