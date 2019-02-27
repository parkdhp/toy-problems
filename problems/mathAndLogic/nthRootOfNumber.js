/** Root of Number
 * Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.
 * In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).
 * Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.
 * Make sure your algorithm is efficient, and analyze its time and space complexities.
 *
 * EXAMPLE
 * Input:  x = 7, n = 3
 * Output: 1.913
 *
 * Input:  x = 9, n = 2
 * Output: 3
 *
 * Constraints
 * [time limit] 5000ms
 * [input] float x
 * 0 ≤ x
 * [input] integer n
 * 0 < n
 * [output] float
 */

const nthRoot = (x, n) => Math.exp((1 / n) * Math.log(x));

// brute force
const root = (x, n) => {
  let output = 0;
  if (x === 0) return 0;
  while (output ** n <= x) {
    output += 0.001;
  }
  return output;
};

// two bounds
// time complexity: O(log(x))
// space complexity: O(1)
const root2 = (x, n) => {
  if (x === 0) return 0;
  let lower = 0;
  let upper = x;
  let approxRoot = (upper + lower) / 2;
  while (approxRoot - lower >= 0.001) {
    if (approxRoot ** n > x) {
      upper = approxRoot;
    } else {
      lower = approxRoot;
    }
    approxRoot = (upper + lower) / 2;
  }
  return approxRoot;
};

console.log(nthRoot(7, 3));
console.log(nthRoot(9, 2));
console.log(root(7, 3));
console.log(root(9, 2));
console.log(root2(7, 3));
console.log(root2(9, 2));

// console.log(nthRoot(0.5, 2));
// console.log(root(0.5, 2));
// console.log(root2(0.5, 2));
