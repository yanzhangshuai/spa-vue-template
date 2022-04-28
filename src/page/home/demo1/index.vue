<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import type { RefSetupDemoExpose } from '@/component/modules/ref-setup-demo/index.vue';

const name = $ref('ref-setup-demo');
const refSetupDemoRef = $ref<RefSetupDemoExpose>(null);

onMounted(() => {
  refSetupDemoRef.onBtn();
});

watch($$(name), (newVal) => {
  console.log('name changed', newVal);
});
</script>

<template>
  <div class="text-block" @click="$window.alert('1')">我是demo1</div>
  <button class="text-red-700 dark:text-green-400" @click="$router.push('/home/demo2')">Go To Demo2</button>
  <http-demo />
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <global-props-demo />
</template>
