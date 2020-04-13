// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// const wrapperFunc = (coins, amount) => {
//     let amountsSoFar = [];

//     var coinChange = function (coins, amount, coinsSoFar = []) {
//         for (let i = 0; i < coins.length; i++) {
//             let currentCoin = coins[i];
//             console.log(currentCoin);
//             coinsSoFar.push(currentCoin);
//             if (sumOfArr(coinsSoFar) === amount) {
//                 amountsSoFar.push(coinsSoFar.length);
//                 return;
//                 // return Math.min(
//                 // 	coinsSoFar.length + 1,
//                 // 	coinChange(coins, amount, coinsSoFar)
//                 // );
//             } else if (sumOfArr(coinsSoFar) + currentCoin > amount) {
//                 return;
//             } else {
//                 return coinChange(coins, amount, coinsSoFar);
//             }
//         }
//     };

//     coinChange(coins, amount);

//     return Math.min(...amountsSoFar);
// }

// const sumOfArr = (arr) => arr.reduce((acc, val) => acc + val);

// console.log(wrapperFunc(exampleCoins1, exampleAmt1));

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    const dp = new Array(amount + 1);
    dp.fill(Infinity);
    dp[0] = 0;
    
    coins.forEach(coin => {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        };
    });
    
    const result = dp[amount] === Infinity ? -1 : dp[amount];
    return result;
    
};

const exampleCoins1 = [1, 2, 5];
const exampleAmt1 = 11;

console.log(coinChange(exampleCoins1, exampleAmt1)); // 3
