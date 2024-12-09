// function processInput(input: any) {
//   console.log(input.toUpperCase());
//   console.log(input.toFixed(2));
//   console.log(input.length);
// }

type Input = string | number | { length: number; };

function processInput(input: Input) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input.toFixed(2));
  } else if ("length" in input) {
    console.log(input.length);
  }
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3