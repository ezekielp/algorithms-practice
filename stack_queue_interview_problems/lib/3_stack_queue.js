// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newNode) {
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        this.length++;
        return this.length;
    }

    pop() {
        let temp;
        if (this.length === 0) return null;
        if (this.length === 1) {
            temp = this.top;
            this.top = null;
            this.bottom = null;
        } else {
            temp = this.top;
            this.top = temp.next;
        }

        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack;
        this.outStack = new Stack;
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        let newNode = new Node(val);

    }

    dequeue() {

    }

    size() {

    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
