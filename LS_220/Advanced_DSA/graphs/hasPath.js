// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

/*

RULES:
  - assume a array will only contain nested 2 element arrays

HIGH-LEVEL ALGO:
1. turn edgeList into adjList
  - init a new Map as adjList
  - iterate over edgeList (v1 and v2)
    - if adjList doesn't have v1, assign v1 as key and empty array as value
    - push v2 to array at key v1
    - if adjList doesn't have v2, assign v2 as key and empty array as value
    - push v1 to array at key v2
  - return adjList

2. starting with the source value traverse graph
  - since graph is undirected, we will use DFS traversal and a Set to keep track of visited vertices
  - init stack to array with source as element
  - init a new Set as visited
  - while length of stack is greater than 0
    - assign current to popped element of stack
    - add popped element to visited
    - if current is equal to destination, return true
    - for each neighbor of the current vertex
      - if vertex hasn't been visited, push vertex to stack

3. if destination value is seen return true, otherwise false
  - if destination is never found, we finally return false

*/

function createAdjList(edgeList) {
  const adjList = new Map();

  edgeList.forEach(([vertex1, vertex2]) => {
    if (!adjList.has(vertex1)) adjList.set(vertex1, []);
    adjList.get(vertex1).push(vertex2);

    if (!adjList.has(vertex2)) adjList.set(vertex2, []);
    adjList.get(vertex2).push(vertex1);
  });

  return adjList;
}

// solution using a DFS stack
function hasPath(edgeList, src, dst) {
  const adjList = createAdjList(edgeList);
  const visited = new Set();
  const stack = [src];

  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) return true;
    visited.add(current);

    for (let neighbor of adjList.get(current)) {
      !visited.has(neighbor) && stack.push(neighbor);
    }
  }

  return false;
}

// solution using DFS recursion
function hasPath(edgeList, src, dst, visited = new Set()) {
  const adjList = Array.isArray(edgeList) ? createAdjList(edgeList) : edgeList;
  if (src === dst) return true;
  visited.add(src);

  for (let neighbor of adjList.get(src)) {
    if (!visited.has(neighbor)) {
      if (hasPath(adjList, neighbor, dst, visited)) {
        return true;
      }
    }
  }

  return false;
}

// refactored DFS recursion solution
function hasPath(edgeList, src, dst, visited = new Set()) {
  const adjList = Array.isArray(edgeList) ? createAdjList(edgeList) : edgeList;

  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  return adjList.get(src).some(neighbor => hasPath(adjList, neighbor, dst, visited));
}

// solution using BFS queue
function hasPath(edgeList, src, dst) {
  const adjList = createAdjList(edgeList);
  const visited = new Set();
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of adjList.get(current)) {
      !visited.has(neighbor) && queue.push(neighbor) && visited.add(neighbor);
    }
  }

  return false;
}

console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true