/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let bigThree = array.sort((a, b) => a - b).slice(-3);
  return bigThree.reduce((a, c) => a *= c)
};
