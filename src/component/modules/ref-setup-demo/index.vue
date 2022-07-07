<script setup lang="ts">
import type { RefSetupDemoExpose } from './type';

const props = defineProps<{
  id: number
  name: string
}>();

const emit = defineEmits(['update:name']);

const onBtn = () => {
  emit('update:name', Math.random().toString());
};

defineExpose<RefSetupDemoExpose>({ onBtn, name: props.name });
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="onBtn">btn</button>
</template>

<style lang="less" scoped></style>
