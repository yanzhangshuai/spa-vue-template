//TODO: 不可使用
expect.extend({
  /**
   * @param {*} received
   * @param {string|string[]} arg
   * @return {{pass:boolean,message:(function():string)}}
   */
  toBeType(received, arg) {
    console.log('arg', arg);

    const isCorrectType = (arg: unknown): { isCorrect: boolean; receivedType: string } => {
      const receivedType = typeof received;

      console.log('receivedType', receivedType);

      const checkForSingle = (arg: unknown): boolean => {
        const type = receivedType === 'object' ? (Array.isArray(received) ? 'array' : receivedType) : receivedType;

        return type === arg;
      };

      const checkForArr = (arg: Array<unknown>): boolean => {
        const reducer = (prev: boolean, curr: unknown) => prev || isCorrectType(curr).isCorrect;

        return arg.reduce(reducer, false);
      };

      return {
        receivedType,
        isCorrect: Array.isArray(arg) ? checkForArr(arg) : checkForSingle(arg)
      };
    };

    const { isCorrect, receivedType } = isCorrectType(arg);

    return {
      pass: isCorrect,
      message: () => {
        const toBe = Array.isArray(arg) ? arg.join(`' or '`) : arg;

        return `Expected '${received}' of '${receivedType}' type to be of '${toBe}' type(s)`;
      }
    };
  }
});
