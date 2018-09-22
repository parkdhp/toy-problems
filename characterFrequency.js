/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


const characterFrequency = string => {
  let letter, result = [], storage = {};
  for (let i = 0; i < string.length; i++) {
    letter = string.charAt(i);
    storage[letter] = storage[letter] || 0;
    storage[letter]++;
  }
  for (const letter in storage) {
    result.push([letter, storage[letter]])
  }
  result.sort((a, b) => {
    if (a[1] > b[1]) {
      return b[1] - a[1]
    } else if (a[1] < b[1]) {
      return b[1] - a[1]
    } else if (a[0] < b[0]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    } else if(a[0] > b[0]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    } else {
      return 0;
    }
  })
  return result;
};