<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useTitle } from '@/hook/web/title';
import { useStorage } from '@/util/storage';
export default defineComponent({
  name: 'App',
  setup() {
    useTitle();
    const storage = useStorage();
    storage.watch<string>('name', (newVal) => {
      console.log('storage-name:' + newVal);
    });

    return {};
  }
});
</script>
