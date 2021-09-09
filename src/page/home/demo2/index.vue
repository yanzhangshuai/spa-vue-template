<template>
  <div>我是demo2</div>
</template>

<script lang="ts" setup>
import { useStorage } from 'util/storage';

const storage = useStorage();
storage.set('name', 'name');
</script>
