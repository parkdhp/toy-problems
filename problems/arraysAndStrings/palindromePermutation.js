/**Palindrome Permutation
 * 
 * Given a string, write a function to check if it is a permuation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The permutation does not need to be limited to just dictionary words.
 * 
 * EXAMPLE:
 * Input: 'Tact Coa'
 * Output: true (permutations: "taco cat", "atco cta", etc.)
 */

//time complexity: O(n)
//space complexity: O(n)
const isPermutationOfPalindrome = (str) => {
  str = str.split(' ').join('');
  let letterCounts = {}
  let letter
  let palindromeSum = 0
  for (let i = 0; i < str.length; i++) {
      letter = str[i]
      letterCounts[letter] = letterCounts[letter] || 0
      letterCounts[letter]++
  }
  for (const letterCount in letterCounts) {
      palindromeSum += letterCounts[letterCount] % 2
  }
  return palindromeSum < 2
}