import { useTitle as usePageTitle } from '@vueuse/core';
import { unref, watch } from 'vue';
import { useRouter } from 'vue-router';

export function useTitle(): void {
  const { currentRoute } = useRouter();

  const pageTitle = usePageTitle();

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute);
      pageTitle.value = route?.meta?.title as string;
    },
    { immediate: true }
  );
}
