<script setup lang="ts">
export interface RefSetupDemoExpose {
  onBtn: () => void
  name: string
}

const props = defineProps<{ name: string; id: number; value?: { name: string } }>();

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
