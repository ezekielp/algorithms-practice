// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const exampleList1 = new ListNode(2);
exampleList1.next = new ListNode(4);
exampleList1.next.next = new ListNode(3);

const exampleList2 = new ListNode(5);
exampleList2.next = new ListNode(6);
exampleList2.next.next = new ListNode(4);

var addTwoNumbers = function(l1, l2) {
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    
    let remainder = 0;
    let sumOfDigits = l1.val + l2.val; // 7
    let revisedSum = sumOfDigits; // 7
    if (sumOfDigits > 9) {
        remainder = 1;
        revisedSum = sumOfDigits - 10;
    }
    
    const summedList = new ListNode(revisedSum); // 7
    let nextNodeInSummedList = summedList;
    let latestNodeInL1 = l1.next; // 4
    let latestNodeInL2 = l2.next; // 6

    while (latestNodeInL1 !== null && latestNodeInL2 !== null) {
        sumOfDigits = latestNodeInL1.val + latestNodeInL2.val + remainder; // 8
        revisedSum = sumOfDigits; // 8
        if (sumOfDigits > 9) {
            remainder = 1; // 1
            revisedSum = sumOfDigits - 10; // 0
        } else {
            remainder = 0; // 0
        }
        
        nextNodeInSummedList.next = new ListNode(revisedSum); // 8
        latestNodeInL1 = latestNodeInL1.next; // null
        latestNodeInL2 = latestNodeInL2.next; // null
        nextNodeInSummedList = nextNodeInSummedList.next;
    }
        
    let remainingList = latestNodeInL1 === null ? latestNodeInL2 : latestNodeInL1;
    
    while (remainingList !== null) {
        sumOfDigits = remainingList.val + remainder;
        revisedSum = sumOfDigits;
        if (sumOfDigits > 9) {
            remainder = 1;
            revisedSum = sumOfDigits - 10;
        } else {
            remainder = 0;
        }
        
        nextNodeInSummedList = new ListNode(revisedSum);
        remainingList = remainingList.next;
        nextNodeInSummedList = nextNodeInSummedList.next;
    }
    
    if (remainder > 0) {
        nextNodeInSummedList.val = 1;
    }
    
    return summedList;
    
};

console.log(addTwoNumbers(exampleList1, exampleList2));
