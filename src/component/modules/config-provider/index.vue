<script lang="tsx" setup>
import 'dayjs/locale/zh-cn';
import { useSlots } from 'vue';
import locale from 'ant-design-vue/es/locale/zh_CN';
import { ConfigProvider } from '@/component/ui/index';

const slots = useSlots();

const render = () => {
  return (
    <ConfigProvider autoInsertSpaceInButton={false} locale={locale}>
      {slots.default?.()}
    </ConfigProvider>
  );
};
</script>

<template>
  <render />
</template>
