<template>
  <div>我是demo2</div>
</template>

<script lang="ts">
import { useStorage } from 'util/storage';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const storage = useStorage();
    storage.set('name', 'name');
    return {};
  }
});
</script>
