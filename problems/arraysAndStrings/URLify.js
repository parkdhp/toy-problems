/**Write a method to replace all spaces in a string with '%20'
 * You may assume that the string has sufficient space at the end to hold the additional characters, 
 * and that you are given the 'true' lengths of the string.
 * 
 * EXAMPLE:
 * Input: "Mr John Smith   ", 13
 * Output: "Mr%20John%20Smith"
 */

const URLify = (str) => {
  return str.trim().split(' ').join('%20')
}