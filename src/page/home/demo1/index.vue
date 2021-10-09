<template>
  <div class="text-red-600" @click="$window.alert('1')">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <ref-setup-demo :id="123" ref="refSetupDemoRef" v-model:name="name"></ref-setup-demo>
  <ref-demo ref="refDemoRef"></ref-demo>
  <tsx-demo />
  <p>$globalProps.FILE_PATH_PREFIX :{{ $globalProps.FILE_PATH_PREFIX }}</p>
  <p>$globalProps.DEV :{{ $globalProps.DEV }}</p>
  <date-picker-test></date-picker-test>
</template>

<script lang="ts" setup>
import { onMounted, ref, unref } from 'vue';
import RefSetupDemo from '@/component/modules/base/ref-setup-demo/index.vue';
import RefDemo from '@/component/modules/base/ref-demo/index.vue';

const refSetupDemoRef = ref(null);
const refDemoRef = ref<InstanceType<typeof RefDemo>>(null);

onMounted(() => {
  unref(refDemoRef).onClick();
  unref(refSetupDemoRef).onBtn();
});
const name = ref('123');
</script>
