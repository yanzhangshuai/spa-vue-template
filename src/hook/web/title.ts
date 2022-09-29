import { unref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useTitle } from '@vueuse/core';

export function usePageTitle(): void {
  const { currentRoute } = useRouter();

  const title = useTitle();

  const appTitle = import.meta.env.GLOBAL_APP_TITLE;

  watch(
    () => unref(currentRoute).path,
    () => title.value = unref(currentRoute)?.meta?.title || appTitle,
    { immediate: true }
  );
}
