declare module '*.vue' {
  import type { defineComponent } from '@vue/composition-api';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
