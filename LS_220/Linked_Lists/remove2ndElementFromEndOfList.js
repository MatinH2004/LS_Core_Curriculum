// Write a function removeSecondToLast that removes the
// second-to-last node from a linked list. The function
// should take the head of the linked list as input and
// return the head of the modified list. The list is
// guaranteed to have at least two nodes. Implement the
// solution using only one pass through the list. If
// the list has exactly two nodes, the function should
// remove the head node and return the second node as
// the new head.

/*

// Example 1:
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 1 -> 2 -> 3 -> 5

// Example 2:
// Input: 1 -> 2
// Output: 2

// Example 3:
// Input: 3 -> 2 -> 1
// Output: 3 -> 1

RULES:
  - remove the second to last node from a linked list
  - the list will have at least 2 nodes
  - solution must only make one pass through the list

DS:
  - use three pointers when traversing
    - curr
    - prev
    - prevPrev

  - when moving to a new node
    - curr = curr.next
    - prev = curr
    - prevPrev = prev

  - when last node is reached
    - prev.next = null
    - if prevPrev exists, prevPrev.next = curr
      - else head = curr;

*/

function removeSecondToLast(head) {
  let curr = head;
  let prev = null;
  let prevPrev = null;

  while (curr) {
    if (curr.next === null) {
      prev.next = null;
      if (prevPrev) {
        prevPrev.next = curr;
      } else {
        head = curr;
      }
    }

    prevPrev = prev;
    prev = curr;
    curr = curr.next;
  }

  return head;
}

// refactor
function removeSecondToLast(head) {
  if (!head || !head.next) return head;

  let curr = head;
  let prev = null;

  while (curr.next && curr.next.next) {
    prev = curr;
    curr = curr.next;
  }

  if (prev) {
    prev.next = curr.next;
  } else {
    head = curr.next;
  }

  return head;
}

// solution using slow-fast method
function removeSecondToLast(head) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = head;

  // set gap between slow and fast
  for (let i = 0; i < 2; i++) {
    fast = fast.next;
  }

  // iterate until fast reaches null
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // set 3rd last node to last node, removing 2nd last node
  slow.next = slow.next.next;

  return dummy.next;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([3, 2, 1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([10, 20, 30, 40, 50, 60]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);

console.log("\nAfter removing second-to-last node:");
printLinkedList(removeSecondToLast(list1)); // Expected: 1 -> 2 -> 3 -> 5 -> null
printLinkedList(removeSecondToLast(list2)); // Expected: 2 -> null
printLinkedList(removeSecondToLast(list3)); // Expected: 3 -> 1 -> null
printLinkedList(removeSecondToLast(list4)); // Expected: 1 -> 2 -> 4 -> null
printLinkedList(removeSecondToLast(list5)); // Expected: 10 -> 20 -> 30 -> 40 -> 60 -> null