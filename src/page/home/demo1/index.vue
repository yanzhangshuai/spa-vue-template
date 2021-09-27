<template>
  <div class="text-red-600" @click="$window.alert('1')">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <img :src="`${$globalProps.FILE_PATH_PREFIX}/11.png`" alt="" />
  <tsx-demo />
  <date-picker-test></date-picker-test>
  <setup-demo />
</template>

<script lang="ts" setup>
import { useStorage } from '@/plugin/storage';

const storage = useStorage();
storage.set('name', 'demo1');
</script>
