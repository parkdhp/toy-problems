/**String Rotation
 * Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
 * e.g. "watterbottle" is a rotation of "erbottlewat"
 */

//time complexity: O(n)
const stringRotation = (s1, s2) => {
  if (s1.length === s2.length && s1.length > 0) {
    let s1s1 = s1 + s1;
    return isSubstring(s1s1, s2);
  }
  return false;
}

const isSubstring = (s1, s2) => {
  return s1.indexOf(s2) >= 0;
}