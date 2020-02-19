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
    let previous = head; // 1
    previous.next = null; // 1 -> NULL
    let current = head.next; // 2 (-> 3)
    let next = current.next; // 3 (-> 4)
    current.next = previous; // 2 -> 1 -> NULL

    while (next.next !== null) {
        previous = current; // 2 (-> 3)
        current = next; // 3 (-> 4)
        next = current.next; // 4 (-> 5)
        current.next = previous; 

    }


};




