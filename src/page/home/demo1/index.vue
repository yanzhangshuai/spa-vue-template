<template>
  <div class="text-red-600" @click="$window.alert('1')">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <p>$globalProps.FILE_PATH_PREFIX：{{ $globalProps.FILE_PATH_PREFIX }}</p>
  <p>$globalProps.DEV：{{ $globalProps.DEV }}</p>
  <tsx-demo />
  <setup-demo />
</template>

<script lang="ts" setup>
import { useStorage } from '@/plugin/storage';

const storage = useStorage();
storage.set('name', 'demo1');
</script>
