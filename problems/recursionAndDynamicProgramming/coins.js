/** Coins
 * Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of representing n cents.
 */

const coins = (total) => {
  const coinsArray = [1, 5, 25, 100];
  let counter = 0;
  const recurse = (index, remainder) => {
    const coin = coinsArray[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index - 1, remainder);
      remainder -= coin;
    }
  };
  recurse(coinsArray.length - 1, total);
  return counter;
};

console.log(coins(50));
console.log(coins(25));
console.log(coins(5));
