<script lang="ts" setup>
import { onMounted, ref, unref, watch } from 'vue';
import { HomeRouteName } from '@/router/route/modules/home/const';
import type { RefSetupDemoExpose } from '@/component/modules/ref-setup-demo/type';

const name = $ref('123');
const refSetupDemoRef = ref<RefSetupDemoExpose>(null);

onMounted(() => {
  unref(refSetupDemoRef).onBtn();
});

watch($$(name), (newVal) => {
  console.log('name changed', newVal);
});
</script>

<template>
  <div class="text-black" @click="$window.alert('1')">我是demo1</div>
  <button class="text-red-700 dark:text-green-400" @click="$router.push({ name: HomeRouteName.DEMO2 })">Go To Demo2</button>
  <http-demo />
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <global-props-demo />
</template>
