<template>
  <h1>{{ name }}</h1>
  <button @click="onBtn">btn</button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

export interface De {
  name: string;
}

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  value: {
    type: Object as PropType<De>,
    required: false
  }
});

const emit = defineEmits(['update:name']);

const onBtn = () => {
  emit('update:name', Math.random().toString());
};
defineExpose({
  onBtn,
  name: props.name
});
</script>
<style lang="less" scoped></style>
