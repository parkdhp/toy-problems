/**Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

//time complexity: O(n^2)
//space complexity: O(1)
const isUnique = (word) => {
  //extended ascii is 128
  if (word.length > 128) return false
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) return false
    }
  }
  return true
}

//time complexity: O(n) || O(128) aka O(1) since we only check 128 characters
//space complexity: O(n) || O(128)
const isUnique2 = (word) => {
  if (word.length > 127) return false
  let charSet = []
  for (let i = 0; i < word.length; i++) {
    let val = word.charCodeAt(i);
    if (charSet[val]) return false
    if (charSet[val] === undefined) charsSet[val] = true
  }
  return true
}

//time complexity: O(n)
//reduce space complexity by using a bit vector
//assuming string only uses lowercase letters a through z
//space compleixty: O(1)
const isUnique3 = (word) => {
  let checker = 0
  for (let i = 0; i < word.length; i++) {
    let val = word.charCodeAt(i) - 'a'.charCodeAt(0);
    if ((checker & (1<<val)) > 0) return false
    checker |= (1 << val)
  }
  return true
}