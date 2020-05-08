/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let dp = [];
    for (let i = 0; i < gas.length; i++) {
        dp.push(gas[i] - cost[i]);
    }
    
    let idx = 0;
    while (idx < dp.length) {
        let runningSum = 0;
        let j = 0;
        while (j < dp.length) {
            runningSum += dp[j];
            if (runningSum < 0) j = Infinity;
            j++;
        }

        if (j === dp.length) return idx;
        
        dp.push(dp.shift());
        idx++;
    }

    return -1;
    
};

const gas1 = [1, 2, 3, 4, 5];
const cost1 = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas1, cost1));


// [-2, -2, -2, 3, 3]

// [-1, -1, 1]