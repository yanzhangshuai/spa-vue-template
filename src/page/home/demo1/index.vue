<template>
  <div class="text-red-600" @click="$window.alert('1')">我是demo1</div>
  <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <setup-demo ref="setupDemoRef" v-model:name="name"></setup-demo>
  <tsx-demo />
  <p>$globalProps.FILE_PATH_PREFIX :{{ $globalProps.FILE_PATH_PREFIX }}</p>
  <p>$globalProps.DEV :{{ $globalProps.DEV }}</p>
</template>

<script lang="ts" setup>
import { onMounted, ref, unref } from 'vue';

const setupDemoRef = ref(null);
onMounted(() => {
  unref(setupDemoRef).onBtn();
});
const name = ref('123');
</script>
