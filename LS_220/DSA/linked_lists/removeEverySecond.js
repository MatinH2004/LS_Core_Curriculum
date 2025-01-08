// In this problem, you need to implement a function
// `removeEverySecondNode` that accepts a singly linked list
// as an argument. The function should remove every alternate
// node, starting with the second node.

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

/*

ALGORITHM:
  - set prev to null
  - set curr to head
  - set idx to 0

  - while curr isn't null
    - if idx is odd
      - set prev.next to curr.next
    - else
      - set prev to curr
      - set curr to curr.next
    - increment idx
  - return head
*/

function removeEverySecondNode(head) {
  let prev = null;
  let curr = head;
  let idx = 1;

  while (curr !== null) {
    if (idx % 2 === 0) {
      curr = curr.next
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }

    idx++;
  }

  return head;
}

// LS SOLUTION:
function removeEverySecondNode(head) {
  let curr = head;

  while (curr && curr.next) {
    curr.next = curr.next.next;
    curr = curr.next;
  }

  return head;
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([]);

printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
printLinkedList(removeEverySecondNode(list2)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> 3 -> null
printLinkedList(removeEverySecondNode(list5)); // Expected: null