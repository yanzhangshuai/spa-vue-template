<template>
  <div class="text-red-600">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <tsx-demo />
  <date-picker-test></date-picker-test>
</template>

<script lang="ts" setup>
import { useStorage } from 'util/storage';

const storage = useStorage();
storage.set('name', 'demo1');
</script>
