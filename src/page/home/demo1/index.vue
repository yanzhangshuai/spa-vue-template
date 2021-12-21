<template>
  <div class="text-red-600" @click="$window.alert('1')">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name" />
  <ref-demo ref="refDemoRef" />
  <tsx-demo />
  <p>文件服务器地址 :{{ $globalProps.FILE_PATH_PREFIX }}</p>
  <p>当前环境 :{{ $globalProps.DEV }}</p>
  <p>当前时间 :{{ $globalProps.dateFormat($window.Date.now()) }}</p>
</template>

<script lang="ts" setup>
import { onMounted, ref, unref } from 'vue';
import RefDemo from '@/component/modules/base/ref-demo/index.vue';
import RefSetupDemo from '@/component/modules/base/ref-setup-demo/index.vue';

const name = ref('123');
const refSetupDemoRef = ref(null);
const refDemoRef = ref<InstanceType<typeof RefDemo>>(null);

onMounted(() => {
  unref(refDemoRef).onClick();
  unref(refSetupDemoRef).onBtn();
});
</script>
