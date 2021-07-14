declare module '*.json' {
  const value: unknown;
  export default value;
}

declare global {
  interface ImportMeta {
    globEager<T extends unknown>(globPath: string): Record<string, T>;
  }
}

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare type TimeoutHandle = ReturnType<typeof setTimeout>;

declare type IntervalHandle = ReturnType<typeof setInterval>;

export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

declare type Nullable<T> = T | null;

declare type NonNullable<T> = T extends null | undefined ? never : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Recordable<T = any> = Record<string, T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
declare type Indexable<T = unknown> = {
  [key: string]: T;
};

declare type ValueType = string | number | boolean | undefined | null;

declare type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

declare type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

declare interface Fn<T = unknown, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T = unknown, R = T> {
  (...arg: T[]): Promise<R>;
}

declare type RefType<T> = T | null;

declare type LabelValueOptions = {
  label: string;
  value: ValueType;
  [key: string]: string | number | boolean;
}[];

declare type EmitType = (event: string, ...args: unknown[]) => void;

declare type TargetContext = '_self' | '_blank';

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
