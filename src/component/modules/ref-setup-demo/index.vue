<script lang="tsx" setup>
import type { RefSetupDemoExpose } from './type';

const props = defineProps<{
  id: number
  name: string
  value?: { name: string }
}>();

const emit = defineEmits<{
  (e: 'update:name', val: string): void
}>();

const onBtn = () => {
  emit('update:name', Math.random().toString());
};

defineExpose<RefSetupDemoExpose>({ name: props.name, onBtn });

const render = () => {
  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={onBtn}>btn</button>
    </>
  );
};
</script>

<template>
  <render />
</template>
