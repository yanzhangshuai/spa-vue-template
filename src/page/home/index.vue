<script lang="tsx" setup>
import { RouterView } from 'vue-router';

const render = () => {
  return (
    <>
      <h1 class="text-2xl text-blue-300">This is home</h1>
      <RouterView />
    </>
  );
};
</script>

<template>
  <render />
</template>
