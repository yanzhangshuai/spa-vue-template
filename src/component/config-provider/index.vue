<script lang="ts" setup>
import 'dayjs/locale/zh-cn'
import locale from 'ant-design-vue/es/locale/zh_CN'
</script>

<template>
  <div class="config-provider bg-container wh-screen m-0 text-text overflow-auto">
    <a-config-provider :auto-insert-space-in-button="false" :locale="locale">
      <slot />
    </a-config-provider>
  </div>
</template>
