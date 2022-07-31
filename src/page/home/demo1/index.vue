<script lang="tsx" setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, unref, watch } from 'vue';
import type { RefSetupDemoExpose } from '@/component/modules/ref-setup-demo/type';

const router = useRouter();

const name = $ref('ref-setup-demo');

const refSetupDemoRef = ref<RefSetupDemoExpose>(null);

onMounted(() => {
  unref(refSetupDemoRef)?.onBtn();
});

watch($$(name), (newVal) => {
  console.log('name changed', newVal);
});

const render = () => {
  const onClick = () => window.alert('1');

  const goDemo2 = () => router.push('/home/demo2');

  return (
    <>
      <div class="text-block" onClick={onClick}>我是demo1</div>
      <button class="text-red-700 dark:text-green-400" onClick={goDemo2}>Go To Demo2</button>
      <http-demo />
      <ref-setup-demo id={123} ref={refSetupDemoRef} v-model:name={name} />
      <global-props-demo />
    </>
  );
};
</script>

<template>
  <render />
</template>
