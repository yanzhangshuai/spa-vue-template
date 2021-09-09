<template>
  <a-date-picker @change="onChanged" />
</template>

<script lang="ts" setup>
const onChanged = (data: unknown) => {
  console.log(data);
};
</script>

<style lang="less" scoped></style>
