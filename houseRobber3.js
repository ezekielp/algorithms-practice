// https://leetcode.com/problems/house-robber-iii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Example 2:

// Input: [3, 4, 5, 1, 3, null, 1]

// 3
//     / \
// 4   5
//     / \   \
// 1   3   1

// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

// [4, 1, null, 2, null, 3]

//       4
//      / \
//     1  null
//    / \
//   2  null
//  /
// 3

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const exampleTree1 = new TreeNode(3);
exampleTree1.left = new TreeNode(4);
exampleTree1.right = new TreeNode(5);
exampleTree1.left.left = new TreeNode(1);
exampleTree1.left.right = new TreeNode(3);
exampleTree1.right.right = new TreeNode(1);

const exampleTree2 = new TreeNode(4);
exampleTree2.left = new TreeNode(1);
exampleTree2.right = null;
exampleTree2.left.left = new TreeNode(2);
exampleTree2.left.right = null;
exampleTree2.left.left.left = new TreeNode(3);

// HAVE TO MEMOIZE!!

var rob = function(root) {

    return addUpTheLoot(root, 1);

};

const addUpTheLoot = (root, level, previous = level) => {
    if (root === null) return 0;

    const restOfDFSOneLevelDown = addUpTheLoot(root.right, level + 1, previous) + addUpTheLoot(root.left, level + 1, previous);
    const restOfDFSTwoLevelsDown = addUpTheLoot(root.right, level + 2, previous) + addUpTheLoot(root.left, level + 2, previous);

    if (level === previous + 1) {
        return Math.max(restOfDFSOneLevelDown, restOfDFSTwoLevelsDown);
    } else {
        const thisLevelTotal = root.val + addUpTheLoot(root.right, level + 1, level) + addUpTheLoot(root.left, level + 1, level);
        return Math.max(thisLevelTotal, restOfDFSTwoLevelsDown);
    }

}

console.log(rob(exampleTree2));

// const addUpTheLoot = (root, level, target) => {
//     if (root === null) return 0;

//     if (level < target) {
//         return addUpTheLoot(root.right, level + 1, target) + addUpTheLoot(root.left, level + 1, target);
//     } else {
//         return root.val;
//     }

// }

// const addUpTheOddLoot = (root, level) => {
//     if (root === null) return 0;
//     const resOfDFS = addUpTheOddLoot(root.right, level + 1) + addUpTheOddLoot(root.left, level + 1);
//     if (level % 2 === 0) {
//         return resOfDFS;
//     } else {
//         return root.val + resOfDFS;
//     }
// }

// const addUpTheEvenLoot = (root, level) => {
//     if (root === null) return 0;
//     const resOfDFS = addUpTheEvenLoot(root.right, level + 1) + addUpTheEvenLoot(root.left, level + 1);
//     if (level % 2 !== 0) {
//         return resOfDFS;
//     } else {
//         return root.val + resOfDFS;
//     }
// }


