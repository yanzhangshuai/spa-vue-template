declare namespace jest {
  interface Matchers<R> {
    toBeType(type: string | string[]): R;
  }
}
