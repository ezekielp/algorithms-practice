/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

    let memo = {};

    coins.forEach((coin, idx) => {

        for (let i = idx; i < coins.length; i++) {
            let currentCoins = [coins[idx]];
            currentCoins.push(coins[i]);
            while (sumOfArr(currentCoins) <= amount) {
                currentCoins.push(coins[i]);
            }

        }
    })

};

const sumOfArr = arr => arr.reduce((acc, val) => acc + val);

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1



