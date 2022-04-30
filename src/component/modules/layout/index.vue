<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LayoutHeader from './layout-header/index.vue';
import LayoutSider from './layout-sider/index.vue';
export default defineComponent({
  components: {
    LayoutHeader,
    LayoutSider
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      onCollapse,
      onBreakpoint
    };
  }
});
</script>
<template>
  <a-layout class="!min-h-screen main-layout">
    <layout-sider />
    <a-layout>
      <layout-header />
      <a-layout-content :style="{ margin: '24px' }">
        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
