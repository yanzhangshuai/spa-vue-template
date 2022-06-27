<script setup lang="ts">
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
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="onBtn">btn</button>
</template>

<style lang="less" scoped></style>
