// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance (str1, str2) {
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  return Math.min(
          editDistance(str1.substr(1), str2) + 1,
          editDistance(str2.substr(1), str1) + 1,
          editDistance(str1.substr(1), str2.substr(1)) + (str1[0] !== str2[0] ? 1 : 0)
  );
}
