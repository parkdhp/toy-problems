//Given two strings, write a method to decide if one is a permutation of the other

//i: 2 strings
//o: boolean
/**edge cases
 * case sensitive? no
 * whitespace? no
 */


//time complexity: O(n log n)
//space complexity: O(n)
const checkPermutation = (str1, str2) => {
  //remove trailing whitesapce and lowercase
  str1 = str1.trim().toLowerCase().split('')
  str2 = str2.trim().toLowerCase().split('')
  if (str1.length !== str2.length) return false
  return JSON.stringify(str1.sort()) === JSON.stringify(str2.sort())
}

//time complexity: O(n)
//space complexity: O(n)
const checkPermutation2 = (str1, str2) => {
  str1 = str1.trim().toLowerCase()
  str2 = str2.trim().toLowerCase()
  if (str1.length !== str2.length) return false
  //ascii asusmption 128
  let letters = {}
  for (let i = 0; i < str1.length; i++) {
    letters[str1.charCodeAt(i)] = letters[str1.charCodeAt(i)]++ || 1
  }
  for (let i = 0; i < str2.length; i++) {
    letters[str2.charCodeAt(i)] = letters[str2.charCodeAt(i)] || -1
    if (letters[str2.charCodeAt(i)] < 0) return false
  }
  return true //letters have no negative values
}