/*
---------- PROBLEM ----------
INPUT:
  - a string of commands
OUTPUT:
  - integer in register, if PRINT command is present

EXAMPLES:

----------- RULES -----------
  - The register is not part of the stack
  - The stack is an array, with the last element referred to as
    the "topmost" element in the stack
  - All operations are integer operations
  - Assume all tokens are valid
  - Initialize stack and register to [] and 0

  - n : Place a value, n, in the register. Do not modify the stack.
  - PUSH : Push the register value onto the stack. Leave the value in the register.
  - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.

------- DATA STRUCTURE ------
  - array obviously

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - initialize stack to []
  - initialize register to 0
  - create a nested function for all operations
  
  - split input string into the tokens
  - iterate over array of tokens
    - if token is a numeric string
      - set the register to the string
    - for all other operations use case statement to call the functions
  
*/

function minilang(program) {
  const stack = [];
  let register = 0;

  program.split(' ').forEach(token => {
    switch (token) {
      case 'PUSH':
        push();
        break;
      case 'ADD':
        add();
        break;
      case 'SUB':
        sub();
        break;
      case 'MULT':
        mult();
        break;
      case 'DIV':
        div();
        break;
      case 'REMAINDER':
        remainder();
        break;
      case 'POP':
        pop();
        break;
      case 'PRINT':
        print();
        break;
      default:
        if (/^-?\d$/.test(token)) {
          register = parseInt(token, 10);
        } else {
          errorMsg(token);
        }
    }
  });

  function push() {
    stack.push(register);
  }

  function add() {
    let value = stack.pop();
    register += value;
  }

  function sub() {
    let value = stack.pop();
    register -= value;
  }

  function mult() {
    let value = stack.pop();
    register *= value;
  }

  function div() {
    let value = stack.pop();
    register = Math.floor(register / value);
  }

  function remainder() {
    let value = stack.pop();
    register = Math.floor(register % value);
  }

  function pop() {
    let value = stack.pop();

    if (value === undefined) {
      console.log("Error: Cannot POP from empty stack");
    } else {
      register = value;
    }
  }

  function print() {
    console.log(register);
  }

  function errorMsg(token) {
    console.log(`Error: Invalid Token - ${token}`);
  }
}

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)

console.log(minilang('POP PRINT'));
// Error: Can't POP on empty stack!

console.log(minilang('5 PUSH 3 PUSH eric did 70ft triple june6/24'));
// Error invalid token