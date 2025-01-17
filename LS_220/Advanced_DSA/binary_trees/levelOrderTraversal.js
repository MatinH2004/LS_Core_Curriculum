/*

### P

Given the root node of a binary tree, implement a
function `bfs` that returns an array containing the
values of the nodes visited in level order
(or breadth-first-search) traversal.

INPUT: root node
OUTPUT: array containing values from each level

### E

RULES:
  - must use breadth-first-search traversal going down the tree one height
    at a time.
  - base case: node is null

### D

- Use a queue data structure to keep track of nodes and the order to process them

### A

1. Add the root node's value to result array
2. Next iteration:
  - dequeue a node from the queue and process it
  - if the node has a left child, enqueue it
  - if the node has a right child enqueue it
3. repeat steps above until no elements are left in the queue
4. return result array

*/

function bfs(root) {
  const result = [];
  
  if (!root) return result;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
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

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
console.log(bfs(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(bfs(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(bfs(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(bfs(tree4)); // Output: [10, 5, 15, 6, 12, 21, 11]