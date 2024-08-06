function newStack() {
  const stack = [];
  
  return {
    push(value) {
      stack.push(value)
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      return stack.join("\n");
    },
  }
}