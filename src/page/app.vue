<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import { useRoute } from '@/router';
import { useTitle } from '@/hook/web/title';

export default defineComponent({
  name: 'App',
  setup() {
    useTitle();

    const route = useRoute();
    watch(route, (newVal) => {
      console.log('newVal:', newVal.path);
    });
    return {};
  }
});
</script>

<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>
