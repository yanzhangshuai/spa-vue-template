<template>
  <h1>{{ name }}</h1>
  <button @click="onBtn">btn</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface De {
  name: string;
}

const name = '123';
const color = ref('24px');

const onBtn = () => {
  color.value = '32px';
};
</script>
<style lang="less" scoped>
h1 {
  font-size: v-bind(color);
}
</style>
