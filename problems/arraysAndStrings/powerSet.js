/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

let powerSet = function (str) {
  let storage = {};
  //remove duplicates and add to storage
  for (let i = 0; i < str.length; i++) {
    storage[str[i]] = str[i];
  }
  //split str/get dup free keys
  let arr = Object.keys(storage);
  let result = [''];
  for (let i = 0; i < arr.length; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      var temp = result[j].concat(arr[i]);
      result.push(`${temp}`)
    }
  }
  return result;
};