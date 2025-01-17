// Implement a function `findNodeInBST` that, given
// the root node of a binary search tree and a value,
// returns true if the value exists in the tree or
// false if it does not.

/*

Base case: if node is null / node value matches target

ALGO:
  - assing result to false
  - using a nested function - traverse(node)
    - if node is null, return
    - if node value matches target
      - reassign result to true
      - return
    - if target is less than node value
      - recursive call on left child
    - else recursive call on right child
  - return result

*/

function findNodeInBST(root, target) {
  let result = false;

  (function traverse(node) {
    if (node === null) return;
    if (node.val === target) {
      result = true;
      return;
    }

    node.val > target ? traverse(node.left) : traverse(node.right);
  })(root);

  return result;
}

// refactor
function findNodeInBST(root, target) {
  if (root === null) {
    return false;
  }
  if (root.val === target) {
    return true;
  }

  return findNodeInBST(target > root.val ? root.right : root.left, target);
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
const tree1 = buildTree([4, 2, 7, 1, 3]);
console.log(findNodeInBST(tree1, 2) === true);
console.log(findNodeInBST(tree1, 5) === false);

const tree2 = buildTree([5, 3, 8, 1, 4, 7, 9]);
console.log(findNodeInBST(tree2, 7) === true);
console.log(findNodeInBST(tree2, 10) === false);

const tree3 = buildTree([10]);
console.log(findNodeInBST(tree3, 10) === true);
console.log(findNodeInBST(tree3, 5) === false);

const tree4 = buildTree([]);
console.log(findNodeInBST(tree4, 1) === false);
// All test cases should log true