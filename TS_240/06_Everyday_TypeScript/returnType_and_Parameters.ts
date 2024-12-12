function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;

type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;