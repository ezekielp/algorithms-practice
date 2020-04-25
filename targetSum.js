/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    
    let numWays = 0;
    let pathSums = {};
    
    const dfs = (nums, path = '0', sum = 0) => {
        if (nums.length === 0) {
            if (sum === S) numWays++;
            return;
        }

        if (!pathSums[path]) {
            pathSums[path] = getSum(path);
        }
        let currentPathSum = pathSums[path];

        let newPath1 = path + `#${nums[0]}`;
        let newPath2 = path + `#-${nums[0]}`;

        dfs(nums.slice(1), newPath1, currentPathSum + nums[0]);
        dfs(nums.slice(1), newPath2, currentPathSum - nums[0]);
    }

    const getSum = path => path.split("#").map(str => parseInt(str)).reduce((acc, val) => acc + val);

    dfs(nums);
    return numWays;
    
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));



const example2 = [2, 1];

let memo = {
    '0': 1,
    '2': 1,
    '-2': 1,
    '1': 2,
    '-1': 2,
    '3': 1,
    '-3': 1
}

// class Solution(object):
//     def findTargetSumWays(self, nums, S):
//         from collections import defaultdict
//         memo = {0: 1}
//         for x in nums:
//             m = defaultdict(int)
//             for s, n in memo.iteritems():
//                 m[s + x] += n
//                 m[s - x] += n
//             memo = m
//         return memo[S]


