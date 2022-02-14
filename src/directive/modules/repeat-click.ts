// import { on, once } from '@/util/extensions/dom';
// import { Directive, DirectiveBinding } from 'vue';
// //TODO：无法使用
// const repeatDirective: Directive = {
//   beforeMount(el: Element, binding: DirectiveBinding<Fn>) {
//     let interval: Nullable<number> = null;
//     let startTime = 0;
//     const handler = (): void => binding?.value();
//     const clear = (): void => {
//       if (Date.now() - startTime < 100) {
//         handler();
//       }
//       interval && clearInterval(interval);
//       interval = null;
//     };

//     on(el, 'mousedown', (e: Event): void => {
//       if ((e as MouseEvent).button !== 0) return;
//       startTime = Date.now();
//       once(document.body, 'mouseup', clear);
//       interval && clearInterval(interval);
//       interval = window.setInterval(handler, 100);
//     });
//   },
// };

// export default repeatDirective;
