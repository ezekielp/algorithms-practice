/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

 var mergeKLists = function(lists) {
    
    const listQueue = lists.map(list => list);

    while (listQueue.length > 1) {
        const list1 = listQueue.shift();
        const list2 = listQueue.shift();
        listQueue.push(mergeTwoLists(list1, list2));
    }
    
    return listQueue[0];
    
};

const mergeTwoLists = (list1, list2) => {
    if (list1.val === null) return list2;
    if (list2.val === null) return list1;

    let mergedList = new ListNode(null);
    if (list1.val < list2.val) {
        mergedList.val = list1.val;
        list1 = list1.next;
    } else {
        mergedList.val = list2.val;
        list2 = list2.next;
    }
    while (list1 !== null && list2 !== null) {
        let nextNode = mergedList;
        while (nextNode.next !== null) {
            nextNode = nextNode.next;
        }
        if (list1.val < list2.val) {
            nextNode.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            nextNode.next = new ListNode(list2.val);
            list2 = list2.next;
        }
    }
    let nextNode = mergedList;
    while (nextNode.next !== null) {
        nextNode = nextNode.next;
    }
    if (list1 === null) {
        nextNode.next = list2;
    } else {
        nextNode.next = list1;
    }
    return mergedList;
}

// const shorthandExampleLists = [
//     1 -> 4 -> 5,
//     1 -> 3 -> 4,
//     2 -> 6
// ]

const exampleList1Node1 = new ListNode(1);
const exampleList1Node2 = new ListNode(4);
const exampleList1Node3 = new ListNode(5);
exampleList1Node1.next = exampleList1Node2;
exampleList1Node2.next = exampleList1Node3;

const exampleList2Node1 = new ListNode(1);
const exampleList2Node2 = new ListNode(3);
const exampleList2Node3 = new ListNode(4);
exampleList2Node1.next = exampleList2Node2;
exampleList2Node2.next = exampleList2Node3;

const exampleList3Node1 = new ListNode(2);
const exampleList3Node2 = new ListNode(6);
exampleList3Node1.next = exampleList3Node2;

const exampleLists = [exampleList1Node1, exampleList2Node1, exampleList3Node1];

console.log(mergeKLists(exampleLists));
// console.log(mergeTwoLists(exampleLists[0], exampleLists[1]));