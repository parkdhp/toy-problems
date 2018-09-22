/**String Compression
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2b1c5a3.
 * If the compressed string would not become smaller than the original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a-z).
 */

const stringCompression = (str) => {
  let letters = {}, compressed = ''
  str.split('').forEach(letter => {
    letters[letter] = letters[letter] + 1 || 1
  })
  for (const letter in letters) {
    compressed = compressed.concat(letter + letters[letter]);
  }
  return compressed
}