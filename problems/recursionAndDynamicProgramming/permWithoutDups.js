/** Permutations without Dups
 * Write a method to computea ll permutations of a string whose characters are
 * not necessarily unique. The list of permutations should not have duplicates.
 */

const permutateString = str => {
  const output = [];
  const recurse = (currPerm, remChars) => {
    if (remChars.length === 0) {
      output.push(currPerm);
    }
    for (let i = 0; i < remChars.length; i++) {
      recurse(
        currPerm + remChars[i],
        remChars.slice(0, i) + remChars.slice(i + 1)
      );
    }
  };
  recurse('', str);
  return output;
};

const txt = 'abcd';
console.log(permutateString(txt));
