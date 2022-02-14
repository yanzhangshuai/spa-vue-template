<template>
  <div>
    <div class="text-blue-300" @click="$window.alert('123')">我是demo1</div>
    <button @click="$router.push('/home/demo2')">Go To Demo2</button>
    <p>文件服务器地址 :{{ $globalProps.FILE_PATH_PREFIX }}</p>
    <p>当前环境 :{{ $globalProps.DEV }}</p>
    <p>当前时间 :{{ $globalProps.dateFormat($window.Date.now()) }}</p>
    <p>当前版本 :{{ $globalProps.VERSION }}</p>
    <date-picker-test></date-picker-test>
  </div>
  <!-- <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <tsx-demo /> -->
</template>

<script lang="ts">
import { useStorage } from '@/plugin/storage';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const storage = useStorage();
    storage.set('name', 'value');
    return {};
  }
});
</script>
