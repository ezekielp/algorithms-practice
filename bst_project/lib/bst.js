class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val) {
       if (this.root === null) { // If no root yet, make this val the root
           this.root = new TreeNode(val);
       } else { // If there is a root, look for where to insert this val
            let previousNode = this.root;
            let currentNode;
            if (val < this.root.val) { // If val is less than root val, go left
                currentNode = previousNode.left;
            } else { // Otherwise go right
                currentNode = previousNode.right;
            }
            while (currentNode !== null) {
                if (val < currentNode.val) {
                    previousNode = currentNode;
                    currentNode = currentNode.left;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.right;
                }
            }
            if (val < previousNode.val) {
                previousNode.left = new TreeNode(val);
            } else {
                previousNode.right = new TreeNode(val);
            }
       }
   }

   searchRecur(val) {

   }

   searchIter(val) {

   }

}

let newBST = new BST();
newBST.insert(8);
newBST.insert(3);
newBST.insert(6);

module.exports = {
    TreeNode,
    BST
};