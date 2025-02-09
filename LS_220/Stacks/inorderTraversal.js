// Given the root node of a binary tree, implement a
// function `inorderTraversal` that returns an
// array containing the values of the nodes visited in
// an inorder traversal. (LNR)

// Your task is to implement the function iteratively using a stack.

/*

ALGO:
  - return [] if root is null

  - init stack to array with root
  - init result to empty array
  - init curr to root

  - while length of stack isnt zero OR curr isnt null
    - while curr isnt null
      - push curr to stack
      - reassign curr to curr.left
    - pop the stack and assign to curr
    - process curr.val, by pushing to result
    - assign curr to curr.right

  - return result
*/

function inorderTraversal(root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);     // L
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);  // N

    curr = curr.right;      // R
  }

  return result;
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test Cases:

const tree1 = buildTree([1, null, 2, 3]);
console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(inorderTraversal(tree2)); // Output: [2, 1, 4, 5, 3]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(inorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(inorderTraversal(tree4)); // Output: [5, 6, 10, 11, 12, 15, 21]