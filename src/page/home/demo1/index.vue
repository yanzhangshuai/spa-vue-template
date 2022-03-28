<template>
  <div class="text-block" @click="$window.alert('1')">我是demo1</div>
  <button class="text-red-700 dark:text-green-400" @click="$router.push('/home/demo2')">Go To Demo2</button>
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <ref-demo ref="refDemoRef" />
  <global-props-demo />
</template>

<script lang="ts" setup>
import { onMounted, ref, unref, watch } from 'vue';
import RefDemo from '@/component/modules/base/ref-demo/index.vue';
const name = $ref('123');
const refSetupDemoRef = ref(null);
const refDemoRef = ref<InstanceType<typeof RefDemo>>(null);
onMounted(() => {
  unref(refDemoRef).onClick();
  unref(refSetupDemoRef).onBtn();
});
watch($$(name), (newVal) => {
  console.log('name changed', newVal);
});
</script>
