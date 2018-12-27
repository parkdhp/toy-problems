/** Parens
 * Implement an alogrithm to print all valid (e.g., properly opened and closed) combinations of n pairs of parentheses.
 *
 * EXAMPLE
 * Input: 3
 * Output: ((())), (()()), ()(()), ()()()
 */

const getParens = (n) => {
  const output = [];
  const recurse = (currParens, remParens) => {
    if (remParens === 0) {
      output.push(currParens);
    } else {
      const used = {};
      if (!used[`(${currParens})`]) {
        used[`(${currParens})`] = true;
        recurse(`(${currParens})`, remParens - 1);
      }
      if (!used[`()${currParens}`]) {
        used[`()${currParens}`] = true;
        recurse(`()${currParens}`, remParens - 1);
      }
      if (!used[`${currParens}()`]) {
        used[`${currParens}()`] = true;
        recurse(`${currParens}()`, remParens - 1);
      }
    }
  };
  recurse('', n);
  return output;
};

console.log(getParens(3));
console.log(getParens(4));
