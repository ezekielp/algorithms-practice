// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {

    constructor() {
        this.value = null;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = this.size();
    }

    push() {

    }

    pop() {
        if (this.top === null) return undefined;
        let currentTop = this.top;

        if (currentTop.next === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = currentTop.next;
        }

        this.length = this.size();
        return currentTop;
    }

    size() {
        if (this.top === null) return 0;
        let currentNode = this.top;
        let currentSize = 1;

        while (currentNode.next) {
            currentSize += 1;
        }

        return currentSize;
    }

}

exports.Node = Node;
exports.Stack = Stack;
