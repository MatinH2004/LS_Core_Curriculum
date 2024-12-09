// Overload Signatures
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;

// Implementation
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.