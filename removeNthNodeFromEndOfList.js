/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    if (head === null || head.next === null) return null;
    const nodes = []; // [1, 2]
    let currentNode = head;

    while (currentNode !== null) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
    }

    currentNode = head;
    let i = 0;

    if (nodes.length - n === 0) {
        head = head.next;
        currentNode = head.next;
        i = 1;
    }

    while (i < nodes.length - n - 1) { // i < 1
        i++; // 1
        currentNode = currentNode.next; // 2
        console.log(currentNode);
    }
    let nextNode = currentNode.next ? currentNode.next.next : null;
    console.log(nextNode);

    currentNode.next = nextNode;
    return head;

};

const head1 = new ListNode(1);
head1.next = new ListNode(2);

console.log(removeNthFromEnd(head1), 2);