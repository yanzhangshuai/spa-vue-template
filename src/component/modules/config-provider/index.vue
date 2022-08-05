<script setup lang="ts">
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/locale/zh_CN';
</script>

<template>
  <div class="config-provider">
    <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
      <slot />
    </a-config-provider>
  </div>
</template>
