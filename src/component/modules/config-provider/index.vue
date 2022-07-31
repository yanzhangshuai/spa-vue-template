<script lang="tsx" setup>
import 'dayjs/locale/zh-cn';
import { useSlots } from 'vue';

const slots = useSlots();

const render = () => {
  return (
    <div class="config-provider">{slots.default?.()}</div>
  );
};
</script>

<template>
  <render />
</template>
