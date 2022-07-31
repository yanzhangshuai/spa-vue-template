import { unref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTitle as usePageTitle } from '@vueuse/core';

export function useTitle(): void {
  const { currentRoute } = useRouter();

  const pageTitle = usePageTitle();

  watch(
    () => currentRoute.value.path,
    () => pageTitle.value = unref(currentRoute)?.meta?.title,
    { immediate: true }
  );
}
