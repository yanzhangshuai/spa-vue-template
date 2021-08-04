<template>
  <div class="config-provider">
    <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
      <slot></slot>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import 'dayjs/locale/zh-cn';
//@ts-ignore
import locale from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  setup() {
    console.log('locale-------', locale);
    return {
      locale
    };
  }
});
</script>

<style scoped></style>
