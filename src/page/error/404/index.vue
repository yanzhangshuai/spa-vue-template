<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">back</button>
    </div>
  </main>
</template>

<route lang="yaml">
name: not-found
path: /404
</route>
