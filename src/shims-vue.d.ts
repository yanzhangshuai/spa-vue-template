declare module '*.vue' {
  import { defineComponent } from '@vue/composition-api';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
