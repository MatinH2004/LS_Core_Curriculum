function ListNode(val) {
  this.val = val;
  this.next = null;
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

function countKeyOccurrences(head, key) {
  let count = 0;
  let current = head;

  while (current !== null) {
    if (current.val === key) {
      count++;
    }

    current = current.next;
  }

  return count;
}

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);

// All test cases should log true.