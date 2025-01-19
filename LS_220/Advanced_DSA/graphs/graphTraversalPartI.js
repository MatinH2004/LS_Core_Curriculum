// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// using a stack
function dfs(adjList, source) {
  let stack = [source];

  while (stack.length !== 0) {
    let current = stack.pop();
    console.log(current);

    let neighbors = adjList.get(current);

    for (let neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
}

// using dfs recursion
function dfs(adjList, source) {
  console.log(source);
  const neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    dfs(adjList, neighbor);
  }
}

// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an acyclic graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  const queue = [source];

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    for (let neighbor of adjList.get(vertex)) {
      queue.push(neighbor);
    }
  }
}

const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6
bfs(adjList, 2); // 2, 1, 3, 4, 5, 6  or 2, 4, 3, 1, 6, 5

// Note that the output can vary based on the order in
// which you process neighbors. These two outputs are
// the most likely, but other valid orders exist.