// import { useRoute, useRouter } from '@/router';
// import { useTitle as usePageTitle } from '@vueuse/core';
// import { ref, unref, watch } from '@vue/composition-api';
// import { Route } from 'vue-router/types/router';
//
// export function useTitle(): void {
//   const router = useRouter();
//
//   const routerRef = ref(router);
//   const pageTitle = usePageTitle();
//
//   console.log(' currentRoute.path', routerRef.value.currentRoute);
//   watch(
//     () => routerRef.value.currentRoute,
//     (newValue) => {
//       console.log('11111111111111111111111');
//       pageTitle.value = unref(newValue)?.meta?.title as string;
//     },
//     { immediate: true }
//   );
// }
