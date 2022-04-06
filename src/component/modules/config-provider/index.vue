<template>
  <div class="config-provider">
    <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
      <slot />
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup() {
    return {
      locale
    };
  }
});
</script>

<style scoped></style>
