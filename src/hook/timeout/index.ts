import type { Ref } from 'vue';
import { ref, watch } from 'vue';
import { isFunc } from '@mwjz/utils';
import { tryOnUnmounted } from '@vueuse/core';
import type { Fn, Timeout } from '@mwjz/utils';

export function useTimeout(handle: Fn<unknown>, wait: number, native = false): Readonly<{ readyRef: Ref<boolean>; start: Fn<void>; stop: Fn<void> }> {
  if (!isFunc(handle))
    throw new Error('handle is not Function!');

  const { readyRef, stop, start } = useTimeoutRef(wait);

  native && handle();

  native || watch(readyRef, maturity => maturity && handle(), { immediate: false });

  return { readyRef, stop, start };
}

export function useTimeoutRef(wait: number): {
  readyRef: Ref<boolean>
  start: Fn<void>
  stop: Fn<void>
} {
  const readyRef = ref(false);

  let timer: Timeout;

  const stop = () => {
    readyRef.value = false;
    timer && window.clearTimeout(timer);
  };

  const start = () => {
    stop();

    timer = setTimeout(() => readyRef.value = true, wait);
  };

  start();

  tryOnUnmounted(stop);

  return { readyRef, stop, start };
}
