/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function(root) {
    if (!root.val) return false;
    if (!root.left && !root.right) return true;
    
    let left = [root.left];
    let right = [root.right];
    
    while (true) {
        console.log("left: ", left);
        console.log("right: ", right);
        if (left.concat(right).every(node => node === null)) return true;

        const leftVals = left.map(node => node ? node.val : null);
        const rightValsReversed = right.map(node => node ? node.val : null).reverse();

        for (let i = 0; i < leftVals.length; i++) {
            if (leftVals[i] !== rightValsReversed[i]) return false;
        }

        let newLeft = [];
        let newRight = [];
        
        left.forEach(node => {
            const leftNode = node ? node.left : null;
            const rightNode = node ? node.right : null;
            newLeft.push(leftNode);
            newLeft.push(rightNode);
        })

        right.forEach(node => {
            const leftNode = node ? node.left : null;
            const rightNode = node ? node.right : null;
            newRight.push(leftNode);
            newRight.push(rightNode);
        })
        
        left = newLeft;
        right = newRight;
        
    }
};

// console.log("leftVals: ", leftVals);
// console.log("rightVals: ", rightValsReversed);


// [1, 2, 2, 3, 4, 4, 3]

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.left = new TreeNode(null);
root2.left.right = new TreeNode(3);
root2.right.left = new TreeNode(null);
root2.right.right = new TreeNode(3);

console.log(isSymmetric(root1));
console.log(isSymmetric(root2));

// [5, 6, 7, 8] | [8, 7, 6 ,5]