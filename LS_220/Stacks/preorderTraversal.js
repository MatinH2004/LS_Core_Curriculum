// Given the root node of a binary tree, implement a
// function `preorderTraversal`, that returns an
// array containing the values of the nodes visited in
// a preorder traversal (NLR).

// Your task is to implement the function iteratively using a stack.

/*

ALGO:
  - init stack to array with root element
  - init result to empty array
  - while stack length is not 0
    - pop element from stack
    - push its value to array
    - add right child to stack
    - then add left child to stack
  - return result

*/

function preorderTraversal(root) {
  const result = [];
  if (!root) return result;

  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();

    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
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
console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]