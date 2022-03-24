<template>
  <div class="text-block" @click="$window.alert('1')">我是demo1</div>
  <button class="text-red-700 dark:text-green-400" @click="$router.push('/home/demo2')">Go To Demo2</button>
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <ref-demo ref="refDemoRef" />
  <li>文件服务器地址 :{{ $globalProps.FILE_PATH_PREFIX }}</li>
  <li>当前是否为开发环境:{{ $globalProps.DEV }}</li>
  <li>当前时间 :{{ $globalProps.dateFormat($window.Date.now()) }}</li>
  <li>当前版本 :{{ $globalProps.VERSION }}</li>
  <date-picker-test></date-picker-test>
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
<style lang="less" scoped>
li {
  @apply font-bold py-1 list-none px-0 text-red-300 rounded !important;
}
</style>
