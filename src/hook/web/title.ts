import { watchEffect } from '@vue/composition-api';
import { useTitle as usePageTitle } from '@vueuse/core';
import { useRoute } from '@/router';

export function useTitle(): void {
  const route = useRoute();
  const pageTitle = usePageTitle();

  watchEffect(() => {
    pageTitle.value = route?.meta?.title as string;
  });
}
