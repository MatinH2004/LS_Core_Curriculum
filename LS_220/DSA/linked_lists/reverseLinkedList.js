class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  if (!head) {
    return head;
  }

  let prev = null;
  let curr = head;

  while (curr !== null) {
    // Hold onto the next node so that we don't lose our list
    let nextNode = curr.next;
    // Reverse the direction of the `curr`
    curr.next = prev;
    // Slide pointers
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

function printList(head) {
  let curr = head;
  let result = '';

  while (curr !== null) {
    result += curr.val + ' -> ';
    curr = curr.next;
  }

  result += 'null';
  return result;
}

// TEST CASE 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log('Input: ', printList(head1));
console.log('Output: ', printList(reverseLinkedList(head1)));
// Input:  1 -> 2 -> 3 -> 4 -> null
// Output:  4 -> 3 -> 2 -> 1 -> null