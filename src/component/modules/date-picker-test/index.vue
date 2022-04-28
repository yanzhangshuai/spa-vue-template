<script lang="ts" setup>
const onChanged = (data: unknown) => {
  console.log(data);
};
</script>

<template>
  <a-date-picker @change="onChanged" />
</template>

<style lang="less" scoped></style>
