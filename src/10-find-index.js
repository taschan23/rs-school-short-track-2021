/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    const middle = first + Math.floor((last - first) / 2);
    const num = array[middle];
    if (num === value) {
      return middle;
    }
    if (num > value) {
      last = middle - 1;
    }
    if (num < value) {
      first = middle + 1;
    }
  }

  return null;
}

module.exports = findIndex;
