<script lang="tsx" setup>
import { DatePicker } from '@/component/ui';

const onChanged = (data: unknown) => {
  console.log(data);
};

const render = () => {
  return <DatePicker onChange={onChanged} />;
};
</script>

<template>
  <render />
</template>
