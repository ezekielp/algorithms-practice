/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

 var reverseList = function (head) {
    if (head.next === null) return head;


    let previous = head; 
    let current = head.next; 
    let next = current.next; 
    previous.next = null; 
    current.next = previous; 

    while (next.next !== null) {
        previous = current; 
        current = next; 
        next = current.next; 
        current.next = previous;
    }

    next.next = current;
    return next;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(node1);
console.log(reverseList(node1));
