<script lang="tsx" setup>
const onChanged = (data: unknown) => {
  console.log(data);
};

const render = () => {
  return <a-date-picker onChange={onChanged} />;
};
</script>

<template>
  <render />
</template>
