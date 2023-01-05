<script lang="ts" setup>
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
  <button class="btn-red" @click="onBtn">btn</button>
</template>
