<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { useTitle } from '@/hook/web/title';
import { useStorage } from '@/util/storage';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    useTitle();
    const storage = useStorage();
    storage.set('name', '123');
  }
});
</script>
