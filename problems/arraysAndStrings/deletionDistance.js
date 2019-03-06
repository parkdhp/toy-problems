/** Deletion Distance
 * The deletion distance of two strings is the minimum number of characters you need to delete
 * in the two strings in order to get the same string. For instance, the deletion distance
 * between "heat" and "hit" is 3:
 *
 * By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
 * We cannot get the same string from both strings by deleting 2 letters or fewer.
 * Given the strings str1 and str2, write an efficient function deletionDistance that returns
 * the deletion distance between them. Explain how your function works, and analyze its time
 * and space complexities.
 *
 * EXAMPLE
 * Input:  str1 = "dog", str2 = "frog"
 * Output: 3
 *
 * Input:  str1 = "some", str2 = "some"
 * Output: 0
 *
 * Input:  str1 = "some", str2 = "thing"
 * Output: 9
 *
 * Input:  str1 = "", str2 = ""
 * output: 0
 */

const deletionDistance = (str1, str2) => {
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  return Math.min(
    deletionDistance(str1.substr(1), str2) + 1,
    deletionDistance(str2.substr(1), str1) + 1,
    deletionDistance(str1.substr(1), str2.substr(1)) +
      (str1[0] !== str2[0] ? 2 : 0)
  );
};
