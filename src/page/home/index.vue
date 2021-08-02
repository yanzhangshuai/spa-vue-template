<template>
  <layout />
</template>

<script lang="ts">
import { useRoute } from '@/router';
import { useStore } from '@/store';
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  components: {},
  setup() {
    const route = useRoute();
    const store = useStore();
    console.log('useStore', store.name);
    console.log('route', route.path);
    return {};
  }
});
</script>
