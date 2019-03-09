/** Reverse Words in a String
 * Given an input string, reverse the string word by word.
 *
 * Example 1:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 * Example 2:
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in
 * the reversed string.
 *
 * Note:
 * A word is defined as a sequence of non-space characters.
 * Input string may contain leading or trailing spaces. However, your reversed string should
 * not contain leading or trailing spaces. You need to reduce multiple spaces between two
 * words to a single space in the reversed string.
 */

// built-in methods
const reverseWords = s =>
  s
    .split(' ')
    .reverse()
    .filter(v => !!v)
    .join(' ');

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('   Hello world!   '));
console.log(reverseWords('a good    example'));

// manual loop
const reverseWords2 = s => {
  const strArr = [];
  let word = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else if (word) {
      strArr.push(word);
      word = '';
    }
  }
  word && strArr.push(word);
  return strArr.reverse().join(' ');
};

console.log(reverseWords2('the sky is blue'));
console.log(reverseWords2('   Hello world!   '));
console.log(reverseWords2('a good    example'));
