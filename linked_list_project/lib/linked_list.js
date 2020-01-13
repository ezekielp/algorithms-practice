// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
            this.tail.next = null;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length = this.size();
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head && !this.tail) return undefined;
        let currentNode = this.head;

        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }

        // currentNode = currentNode.next
        
        let formerTail = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        
        this.length = this.size();
        return formerTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);

        newHead.next = this.head;
        this.head = newHead;

        if (this.tail === null) {
            this.tail = newHead;
            this.head.next = this.tail;
            this.tail.next = null;
        }

        this.length = this.size();
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head && !this.tail) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length = this.size();
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        if (this.tail.val === target) return true;

        while (currentNode.next) {
            if (currentNode.val === target) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length - 1) return null;
        let currentNode = this.head;
        let currentNodeIdx = 0;

        while (currentNodeIdx < index) {
            currentNode = currentNode.next;
            currentNodeIdx += 1;
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.get(index) === null) return false;
        let nodeAtIndex = this.get(index);
        nodeAtIndex.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (this.get(index) === null) return false;
        let nodeAtIndexMinusOne = this.get(index - 1);
        let currentNodeAtIndex = nodeAtIndexMinusOne.next;

        nodeAtIndexMinusOne.next = new Node(val);
        nodeAtIndexMinusOne.next.next = currentNodeAtIndex;

        this.length = this.size();

        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (this.get(index) === null) return undefined;
        let nodeToRemove = this.get(index);
        this.get(index - 1).next = nodeToRemove.next;

        this.length = this.size();
        return nodeToRemove;
    }

    // TODO: Implement the size method here
    size() {
        if (this.head === null) return 0;
        let currentNode = this.head;
        let numOfNodes = 1;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            numOfNodes += 1;
        }

        return numOfNodes;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
