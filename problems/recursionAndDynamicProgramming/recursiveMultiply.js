/** Recrusive Multiply
 * Write a recursive function to multiply two positive integers without using the * operator.
 * You can use addition, subtraction, and bit shifting, but you should minimize the number of
 * those operations.
 */

const iterativeMultiply = (num1, num2) => {
  let output = 0;
  if (num1 === 0 || num2 === 0) {
    return output;
  }
  while (num1 > 0) {
    output += num2;
    num1--;
  }
  return output;
};

// Does not work for negative numbers
// Time Complexity: O(n)
// Space Complexity: O(1)
const recursiveMultiply = (num1, num2) => {
  if (num2 === 0) {
    return 0;
  }
  if (num2 === 1) {
    return num1;
  }
  return num1 + recursiveMultiply(num1, num2 - 1);
};

console.log(iterativeMultiply(5, 1));
console.log(iterativeMultiply(5, 2));
console.log(iterativeMultiply(5, 5));
console.log(recursiveMultiply(5, 1));
console.log(recursiveMultiply(5, 2));
console.log(recursiveMultiply(5, 5));
