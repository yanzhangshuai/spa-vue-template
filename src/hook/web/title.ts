import { unref, watch } from 'vue'
import { useRouter } from 'vue-router'

import { useTitle } from '@vueuse/core'

import { Win } from '@/win'

export function usePageTitle(): void {
  const { currentRoute } = useRouter()

  const title = useTitle()

  const appTitle = Win.appConfig.name

  watch(
    () => unref(currentRoute).path,
    () => title.value = unref(currentRoute)?.meta?.title || appTitle,
    { immediate: true }
  )
}
