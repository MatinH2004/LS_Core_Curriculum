// Write a function reorderOddEven that rearranges nodes in
// a singly linked list so that all nodes at odd positions
// are grouped together, followed by all nodes at even positions.

// The function should take the head of the linked list as input
// and return the reordered list. The first node is considered
// to be at an odd position, the second node at an even position,
// and so on.

// Ensure that the relative order of nodes within the odd and
// even groups remains the same as in the original list.
// If the list is empty or contains only one node, return the
// original list.

/*

// Example:
// Input: head = [1, 2, 3, 4, 5]
// Output: [1, 3, 5, 2, 4]
// Explanation: Nodes at odd positions (1, 3, 5) are grouped
//              first, followed by nodes at even positions (2, 4).

- given a linked list, rearrange nodes so that the ones at odd positions come first
  and the ones at even positions come after
- 1st node is at an odd position, 2nd even position, ...
- ensure nodes keep the same relative order
- its possible to get a list that is 0, 1, or 2 nodes long

ALGO:
  - if the list is empty or has one node, return the head
  - init odd to head of list
  - init even to second node in list
  - store head of even list evenHead
  - while even is not null AND even.next is not null
    - set odd.next = odd.next.next
    - set even.next = even.next.next
    - move odd = odd.next
    - move even = even.next;
  - set odd.next to evenHead
  - return head of list

*/

function reorderOddEven(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
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
let list2 = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
let list3 = createLinkedList([1, 2, 3, 4]);
let list4 = createLinkedList([1]);
let list5 = createLinkedList([1, 2]);
let list6 = createLinkedList([]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);
printLinkedList(list6);

console.log("\nAfter reordering odd and even positions:");
printLinkedList(reorderOddEven(list1)); // Expected: 1 -> 3 -> 5 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list2)); // Expected: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
printLinkedList(reorderOddEven(list3)); // Expected: 1 -> 3 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list4)); // Expected: 1 -> null
printLinkedList(reorderOddEven(list5)); // Expected: 1 -> 2 -> null
printLinkedList(reorderOddEven(list6)); // Expected: null