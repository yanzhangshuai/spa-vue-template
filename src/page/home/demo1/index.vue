<template>
  <div>
    <div class="text-blue-300">我是demo1</div>
    <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  </div>
  <!-- <button @click="$router.push('/home/demo2')">Go To Demo2</button>
  <tsx-demo /> -->
</template>

<script lang="ts">
import { useStorage } from '@/util/storage';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const storage = useStorage();
    storage.set('name', 'value');
    return {};
  }
});
</script>
