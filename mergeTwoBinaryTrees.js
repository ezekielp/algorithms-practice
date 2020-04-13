// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

//  Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const exampleTree1 = new TreeNode(1);
exampleTree1.left = new TreeNode(3);
exampleTree1.right = new TreeNode(2);
exampleTree1.left.left = new TreeNode(5);

const exampleTree2 = new TreeNode(2);
exampleTree2.left = new TreeNode(1);
exampleTree2.right = new TreeNode(3);
exampleTree2.left.right = new TreeNode(4);
exampleTree2.right.right = new TreeNode(7);

 var mergeTrees = function(t1, t2) {
    
    const tree1 = convertTreeToArray(t1);
    const tree2 = convertTreeToArray(t2);

    const mergedTreeAsArray = tree1.map((nodeVal, idx) => {
        let val1 = nodeVal;
        let val2 = tree2[idx];
        if (val1 === null && val2 === null) {
            return null;
        } else if (val1 === null && val2 !== null) {
            return val2;
        } else if (val2 === null && val1 !== null) {
            return val1;
        } else {
            return val1 + val2;
        }
    });

    const mergedTree = new TreeNode(mergedTreeAsArray.shift());
    const queueOfNodes = [mergedTree];


    while (mergedTreeAsArray.length > 0) {
        let currentNode = queueOfNodes.shift();
        let leftVal = mergedTreeAsArray.shift();
        let rightVal = mergedTreeAsArray.shift();
        if (leftVal !== null) {
            currentNode.left = new TreeNode(leftVal);
            queueOfNodes.push(currentNode.left);
        }
        if (rightVal !== null) {
            currentNode.right = new TreeNode(rightVal);
            queueOfNodes.push(currentNode.right);
        }
    }

    return mergedTree;

};

const convertTreeToArray = tree => {
    const treeAsArray = [];
    const queueOfNodes = [tree];
    
    while (queueOfNodes.length > 0) {
        let currentNode = queueOfNodes.shift();
        valToPush = currentNode === null ? null : currentNode.val;
        treeAsArray.push(valToPush);

        if (currentNode !== null) {
            let left = currentNode !== 0 ? currentNode.left : null;
            let right = currentNode !== 0 ? currentNode.right : null;
            queueOfNodes.push(left);
            queueOfNodes.push(right);
        }
    }

    return treeAsArray;

}

// convertTreeToArray(exampleTree1);
// convertTreeToArray(exampleTree2);
mergeTrees(exampleTree1, exampleTree2);