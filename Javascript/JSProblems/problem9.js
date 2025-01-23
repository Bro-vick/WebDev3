/*
    Problem: Best Time to Buy and Sell Stock
    You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

    You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

    Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
    
    Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    
    Example 2:
    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.

    Math.max() would be used in the solution.
*/

// Brute Force Solution
function maxPrice(prices){
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            let profitEqn = prices[j] - prices[i];
            profit = Math.max(profit, profitEqn);
        }
    }
    return profit;
};
let prices1 = [7,1,5,3,6,4];
let prices2 = [7,6,4,3,1];

console.log(maxPrice(prices1));