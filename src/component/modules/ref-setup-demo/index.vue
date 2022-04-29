<script setup lang="ts">

export interface RefSetupDemoProps {
  name: string
  id: number
}

export interface RefSetupDemoExpose {
  onBtn: () => void
  name: string
}

const props = defineProps<RefSetupDemoProps>();
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
