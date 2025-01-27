// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

/*

RULES:
    - Reverse a linked list given two positions: start, end
    - start and end are 1-indexed, meaning the first element is 1
    - start is always less than or equal to end, and will always be in the bounds of the list
    - the list will always contain one node

  Example:
  Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
  Output: [1, 7, 5, 3, 9]
  Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
              is reversed to (7 -> 5 -> 3).

IMPORTANT:
  - need to maintain reference to node that connects to the beginning of reversed segment
  - tail node of reversed segment, to connect to remainder of the list
  - use dummy node incase reversal starts at 1

ALGORITHM:
  - create a dummy node and set dummy.next to head
  - init prev to dummy node and curr to head
  - traverse the list start - 1 times
    - move prev to curr
    - move curr to curr.next
  - set conn to prev and tail to curr
  - traverse the list end - start + 1 times, reversing the links
    - save curr.next in a temp pointer
    - set curr.next to prev
    - move prev to curr and curr to temp
  - connect the reversed segment to the rest of the list
    - set conn.next to prev
    - set tail.next to curr
  - return dummy.next as head of modified list

*/

function reverseSegment(head, start, end) {
  let dummy = new ListNode();
  let prev = dummy;
  let curr = head;
  dummy.next = head;

  for (let i = 0; i < start - 1; i++) {
    prev = curr;
    curr = curr.next;
  }
  
  let conn = prev;
  let tail = curr;

  for (let j = 0; j < end - start + 1; j++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  conn.next = prev;
  tail.next = curr;

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

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null