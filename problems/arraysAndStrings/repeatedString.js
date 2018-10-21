/**Repeated String
 * Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
 * Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's 
 * infinite string.
 * 
 * For example, if the string s = 'abcac' and n = 10, the substring we consider is 'abcacabcac', 
 * the first  characters of her infinite string. There are 4 occurrences of a in the substring.
 * 
 * Complete the repeatedString function in the editor below. It should return an integer representing 
 * the number of occurrences of a in the prefix of length n in the infinitely repeating string.
 * repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider
 * 
 * Constraints:
 * 1 <= s <= 100
 * 1 <= n <= 10^6
 * 
 * Input:
 * s: a single string
 * n: integer
 * 
 * Output:
 * Print a single integer denoting the number of letter a's in the first n letters of the infinite 
 * string created by repeating s infinitely many times.
 */

const repeatedString = (s, n) => {
  if (s === 'a') return n
  let aCount = 0
  if (n > s.length) {
    for (let i = 0; i < s.length; i++) {
      if (s[i].toLowerCase() === 'a') {
        aCount++
      }
    }
    let base = Math.floor((n - s.length) / s.length);
    let mod = (n - s.length) % s.length;
    aCount += (aCount * base);
    if (mod) {
      for (let i = 0; i < mod; i++) {
        if (s[i].toLowerCase() === 'a') {
          aCount++;
        }
      }
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (s[i].toLowerCase() === 'a') {
        aCount++;
      }
    }
  }
  return aCount;
}