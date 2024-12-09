// function calculate(operation: string, a: number, b: number) {
//   switch (operation) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default:
//       throw new Error("Invalid operation");
//   }
// }

type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(operation: Operation, a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}