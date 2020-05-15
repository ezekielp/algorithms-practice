/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    if (!root.left && !root.right) return root.val;
    const pStack = [root]; // [3, 5]
    let seen = new Set();
    let foundP = false;

    while (foundP === false) {
        const currentNode = pStack[pStack.length - 1];
        if (currentNode === p) {
            foundP = true;
        } else {
            if (currentNode.right && !seen.has(currentNode.right)) {
                pStack.push(currentNode.right);
                seen.add(currentNode.right);
            } else {
                if (currentNode.left && !seen.has(currentNode.left)) {
                    pStack.push(currentNode.left);
                    seen.add(currentNode.left);
                } else {
                    pStack.pop();
                }
            }
        }
    }

    seen = new Set();
    if (pStack.includes(q)) return q;

    const qStack = [root]; // [3, 5, 2, 4]
    let foundQ = false;

    while (foundQ === false) {
        const currentNode = qStack[qStack.length - 1];
        if (currentNode === q) {
            foundQ = true;
        } else {
            if (currentNode.right && !seen.has(currentNode.right)) {
                qStack.push(currentNode.right);
                seen.add(currentNode.right);
            } else {
                if (currentNode.left && !seen.has(currentNode.left)) {
                    qStack.push(currentNode.left);
                    seen.add(currentNode.left);
                } else {
                    qStack.pop();
                }
            }
        }
    }

    while (qStack.length > 1 && pStack.length > 1) {
        if (qStack[qStack.length - 1] === pStack[pStack.length - 1]) return pStack[pStack.length - 1];
        if (qStack.length > pStack.length) {
            qStack.pop();
        } else {
            pStack.pop();
        }
    }

    return root;

};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]

const exampleTree = new TreeNode(3);
exampleTree.right = new TreeNode(1);
exampleTree.right.right = new TreeNode(8);
exampleTree.right.left = new TreeNode(0);
exampleTree.left = new TreeNode(5);
exampleTree.left.left = new TreeNode(6);
exampleTree.left.right = new TreeNode(2);
exampleTree.left.right.right = new TreeNode(4);
exampleTree.left.right.left = new TreeNode(7);

console.log(lowestCommonAncestor(exampleTree, 5, 1));
console.log(lowestCommonAncestor(exampleTree, 5, 4));

//     if (!root) return null;
//     if (!root.left && !root.right) return root.val;
//     const nodeStack = [root];
//     let foundP = false;
//     let foundQ = false;

//     while (foundP === false && foundQ === false) {
//         const currentNode = nodeStack[nodeStack.length - 1];
//         if (currentNode.val === p) {
//             foundP === true;
//             break;
//         }
//         if (currentNode.val === q) {
//             foundQ === true;
//             break;
//         }
//         if (currentNode.right) {
//             nodeStack.push(currentNode.right);
//         } 
//     }