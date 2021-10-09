<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import { useRoute } from '@/router';
import { useTitle } from '@/hook/web/title';
import { useStorage } from '@/plugin/storage';
export default defineComponent({
  name: 'App',
  setup() {
    // useTitle();

    const route = useRoute();
    watch(route, (newVal) => {
      console.log('newVal:', newVal.path);
    });

    const storage = useStorage();
    storage.watch<string>('name', (newVal) => {
      console.log('storage-name:' + newVal);
    });

    return {};
  }
});
</script>
