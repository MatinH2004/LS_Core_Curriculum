// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

/*

INPUT:
  - The head of a linked list
OUTPUT:
  - The head of modified list

RULES:
  - if any node with a duplicate value is found
    - completely delete the node from the list

  Example:
  Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
  Output: [1, 4]
  Explanation: The values 2, 3, and 5 appear multiple times, so
              they are removed. Only 1 and 4 remain as unique
              values.

DS:
  - use dummy node to keep a reference to head incase first values are duplicates

ALGO:
  - create dummy node
  - init prev to dummy, curr to head, and set dummy.next to head
  - while curr is not null AND curr.next is not null
    - if curr.val is not equal to curr.next.val
      - move prev to curr
      - move curr to curr.next
    - else
      - while curr.next is not null and curr.val equals curr.next.val
        - move curr to curr.next
      - move curr to curr.next once again
      - set prev.next to curr
  - return dummy.next as new head of list

*/

function removeDuplicates(head) {
  let dummy = new ListNode();
  let prev = dummy;
  let curr = head;
  dummy.next = head;

  while (curr && curr.next) {
    if (curr.val !== curr.next.val) {
      prev = curr;
      curr = curr.next;
    } else {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      curr = curr.next;
      prev.next = curr;
    }
  }

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

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null