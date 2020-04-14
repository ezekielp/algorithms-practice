// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

//  Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

var maxProfit = function(prices) {
    let lowestPriceSoFar = prices[0];
    let highestProfitSoFar = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        if (currentPrice <= lowestPriceSoFar) {
            lowestPriceSoFar = currentPrice;
        } else {
            let currentProfit = currentPrice - lowestPriceSoFar;
            if (currentProfit > highestProfitSoFar) {
                highestProfitSoFar = currentProfit;
            }
        }
    }

    return highestProfitSoFar;
};

const example1 = [7, 1, 5, 3, 6, 4];
const example2 = [7, 6, 4, 3, 1];

console.log(maxProfit(example1));
console.log(maxProfit(example2));
