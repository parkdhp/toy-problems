/** Coins
 * Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of representing n cents.
 */

// DP method using memoization
const makeChangeHelper = (coins, money, index, memo) => {
  let amountWithCoin = 0;
  let ways = 0;
  if (money === 0) {
    return 1;
  }
  if (index >= coins.length) {
    return 0;
  }
  const key = `${money}-${index}`;
  if (memo[key]) {
    return memo[key];
  }
  while (amountWithCoin <= money) {
    const remaining = money - amountWithCoin;
    ways += makeChangeHelper(coins, remaining, index + 1, memo);
    amountWithCoin += coins[index];
  }
  memo[key] = ways;
  return ways;
};

const makeChange = (coins, money) => makeChangeHelper(coins, money, 0, {});

const coinsArray = [25, 10, 5, 1];

console.log(makeChange(coinsArray, 5));
console.log(makeChange(coinsArray, 25));
console.log(makeChange(coinsArray, 50));
console.log(makeChange(coinsArray, 100));
