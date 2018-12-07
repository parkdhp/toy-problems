/** Basic Regex Parser
 * Implement a regular expression function isMatch that supports the '.' and '*' symbols.
 * The function receives two strings - text and pattern - and should return true if the
 * text matches the pattern as a regular expression. For simplicity, assume that the
 * actual symbols '.' and '*' do not appear in the text string and are used as special
 * symbols only in the pattern string.
 *
 * In case you aren’t familiar with regular expressions, the function determines if the
 * text and pattern are the equal, where the '.' is treated as a single a character
 * wildcard (see third example), and '*' is matched for a zero or more sequence of the
 * previous letter (see fourth and fifth examples).
 *
 * Explain your algorithm, and analyze its time and space complexities.
 *
 * EXAMPLE
 * input:  inputMatrix  = [ [1,    2,   3,  4,    5],
 *                          [6,    7,   8,  9,   10],
 *                          [11,  12,  13,  14,  15],
 *                          [16,  17,  18,  19,  20] ]
 * output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
 */

function isMatch(text, pattern) {
  return isMatchHelper(text, pattern, 0, 0);
}

function isMatchHelper(text, pattern, textIndex, patIndex) {
  if (textIndex >= text.length) {
    if (patIndex >= pattern.length) {
      return true;
    } 
      if (patIndex + 1 < pattern.length && pattern[patIndex + 1] === '*') {
        return isMatchHelper(text, pattern, textIndex, patIndex + 2);
      } else {
        return false;
      }
    
  } else if (patIndex >= pattern.length && textIndex < text.length) {
    return false;
  } else if(patIndex + 1 < pattern.length && pattern[patIndex + 1] === '*') {
    if (pattern[patIndex] === '.' || text[textIndex] === pattern[patIndex]) {
      return (isMatchHelper(text, pattern, textIndex, patIndex+2) || isMatchHelper(text,pattern, textIndex + 1, patIndex));
    } 
      return isMatchHelper(text,pattern,textIndex,patIndex+2);
    
  } else if(pattern[patIndex] === '.' || pattern[patIndex] === text[textIndex]) {
    return isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
  } else {
    return false;
  }
}
console.log(isMatch('aa', 'a'), false);
console.log(isMatch('aa', 'aa'), true);
console.log(isMatch('abc', 'a.c'), true);
console.log(isMatch('abbb', 'ab*'), true);
console.log(isMatch('acd', 'ab*c.'), false);
