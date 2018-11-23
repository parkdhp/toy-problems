/** Triple Step
 * A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
 * steps at a time. Implement a method to count how many possible ways the child can run up
 * the stairs.
 */

const tripleStep = (n) => {
  let output = 0;
  const recurse = (num) => {
    if (num === 0) {
      output++;
    } else if (num > 0) {
      recurse(num - 1);
      recurse(num - 2);
      recurse(num - 3);
    }
  }
  recurse(n)
  return output;
};

console.log(tripleStep(1), 1);
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);