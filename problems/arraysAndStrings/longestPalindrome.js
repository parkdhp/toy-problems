/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let longest = '', curr = '', head = 0, tail = 1
  let getPalindrome = (h, t) => {
    while(string[h] === string[t] && t < string.length) {
      curr = string.slice(h, t+1);
      h--;
      t++
    }
    if(curr.length > longest.length) {
      longest = curr
    }
    return
  }

  while (tail < string.length) {
    if(string[head] === string[tail +1]) {
      getPalindrome(head, tail + 1)
    } else if (string[head] === string[tail]) {
      getPalindrome(head, tail)
    }
    head++
    tail++
  }
  return longest;
};