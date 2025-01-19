// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// Using recursive dfs causes stack overflow
// in an undirected / directed cyclic graph.

function dfs(adjList, source) {
  console.log(source);
  let neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    dfs(adjList, neighbor);
    // STACK OVERFLOW - DOES NOT WORK
  }
}

// Solution - use a Set to keep track of vertices
// that have been already visited

function dfs(adjList, source, visited = new Set()) {
  console.log(source);
  visited.add(source);

  let neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(adjList, neighbor, visited);
    }
  }
}

// Alternate solution using a stack

function dfs(adjList, source) {
  let stack = [source], visited = new Set();

  while (stack.length > 0) {
    let current = stack.pop();
    visited.add(current) && console.log(current);

    for (let neighbor of adjList.get(current)) {
      !visited.has(neighbor) && stack.push(neighbor);
    }    
  }
}

const adjList1 = new Map();
adjList1.set(1, [2]);
adjList1.set(2, [1, 3]);
adjList1.set(3, [2]);

// dfs(adjList1, 1); // 1, 2, 3

// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  const queue = [source], visited = new Set([source]);

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of adjList.get(current)) {
      !visited.has(neighbor) && queue.push(neighbor) && visited.add(neighbor);
    }
  }
}

const adjList2 = new Map();
adjList2.set(1, [2, 3]);
adjList2.set(2, [1, 4]);
adjList2.set(3, [1, 4, 5]);
adjList2.set(4, [2, 3]);
adjList2.set(5, [3, 6]);
adjList2.set(6, [5]);

console.log(bfs(adjList2, 1)); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6