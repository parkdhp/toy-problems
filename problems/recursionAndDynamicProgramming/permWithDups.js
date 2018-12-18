/** Permutation with Dups
 * Write a method to compute all permutations of a string whose characters are not
 * necessarily unique. The list of permutations should not have duplicates.
 */

const permutateNoDups = str => {
  const output = [];
  const recurse = (currPerm, remChars) => {
    if (remChars.length === 0) {
      output.push(currPerm);
    }
    const usedChars = {};
    for (let i = 0; i < remChars.length; i++) {
      if (!usedChars[remChars[i]]) {
        usedChars[remChars[i]] = true;
        recurse(
          currPerm + remChars[i],
          remChars.slice(0, i) + remChars.slice(i + 1)
        );
      }
    }
  };
  recurse('', str);
  return output;
};

const txt = 'aba';
console.log(permutateNoDups(txt));
