<template>
  <div>我是demo2</div>
</template>

<script lang="ts" setup>
import { useStorage } from '@/plugin/storage';

const storage = useStorage();
storage.set('name', 'demo2');
</script>
