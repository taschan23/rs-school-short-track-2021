/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let count = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    let currentChar = s1Arr[i];
    if (s2Arr.includes(currentChar)) {
      let position = s2Arr.indexOf(currentChar);
      s2Arr.splice(position, 1);
      count++;
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
