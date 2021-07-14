import { isNil } from 'ramda';
import { isNumeric } from './extensions/type';

interface IRewriteFuncOption {
  timer: number;
  lastArgs: Array<Object>;
}

interface IRewriteFunc {
  (...args: Array<Object>): void;

  options: IRewriteFuncOption;
}

function getWrapper(
  debounceTime: number,
  originalMethod: Function,
  that?: Object,
  timer?: number
): IRewriteFunc {
  const options: IRewriteFuncOption = {
    timer: undefined,
    lastArgs: []
  };

  //  如果传入了timer,将传入timer赋值 option.timer, 进行清除
  !isNil(timer) && (options.timer = timer);

  let rewriteFunc = <IRewriteFunc>function (...args: Array<Object>) {
    //  缓存本次参数
    options.lastArgs = args;

    !isNil(options.timer) && window.clearTimeout(options.timer);

    options.timer = window.setTimeout(() => {
      // @ts-ignore
      originalMethod.apply(this, args);
    }, debounceTime);
  };

  //  绑定this
  !isNil(that) && (rewriteFunc = rewriteFunc.bind(that));

  rewriteFunc.options = options;

  return rewriteFunc;
}

function defineProperty(debounceTime: number, target: object, name: string) {
  let wrapperFunc: IRewriteFunc;

  Object.defineProperty(target, name, {
    configurable: true,
    enumerable: false,
    get() {
      return wrapperFunc;
    },
    set(value) {
      wrapperFunc = getWrapper(debounceTime, value, this);
    }
  });
}

function modifyDescriptor(debounceTime: number, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = getWrapper(debounceTime, originalMethod);
  return descriptor;
}

function createDebounce(
  debounceTime: number,
  target: object,
  name: string,
  descriptor?: PropertyDescriptor
) {
  isNil(descriptor) && (descriptor = Object.getOwnPropertyDescriptor(target, name));

  if (!isNil(descriptor)) {
    return modifyDescriptor(debounceTime, descriptor);
  } else {
    defineProperty(debounceTime, target, name);
  }
}

/**
 *  使用 :: 绑定调用时, 不可 undefined :: debounce()
 * @param debounceTime
 */
export function debounce(debounceTime = 5000): PropertyDescriptor | Function {
  // @ts-ignore
  if (this !== undefined) {
    //  当存在this时，说明使用的是 :: 调用方式 this代表执行的fun
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const fn = this;
    //  保当前属性为函数触发时缓存本次执行的timer和args,
    //  缓存timer 进行清除使用
    let options: IRewriteFuncOption = null;

    return function (...args: Array<Object>) {
      //  传入 缓存的options.timer 将之前触发的setTimeout进行清除
      // @ts-ignore
      const func = getWrapper(debounceTime, fn, this, options?.timer);
      //  缓存本次触发事件的timerId和args
      options = func.options;
      return func(args);
    };
  }

  if (isNumeric(debounceTime)) {
    return function (target: Object, name: string, descriptor?: PropertyDescriptor) {
      return createDebounce(debounceTime, target, name, descriptor);
    };
  }

  //  装饰器时,传入不为 number 类型, 代表使用的 @debounce 调用方式
  // eslint-disable-next-line prefer-rest-params
  const target: Object = arguments[0];
  // eslint-disable-next-line prefer-rest-params
  const name: string = arguments[1];
  // eslint-disable-next-line prefer-rest-params
  const descriptor: PropertyDescriptor = arguments.length >= 3 ? arguments[2] : undefined;
  debounceTime = 1000;

  return createDebounce(debounceTime, target, name, descriptor);
}
