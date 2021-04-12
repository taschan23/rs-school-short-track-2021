/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrNotSort = [...arr];
  let newArr = [...arr]
    .sort((ch1, ch2) => ch1 - ch2)
    .filter((ch) => ch >= 0);

  for (let i = 0; i < arrNotSort.length; i++) {
    let currentNum = arrNotSort[i];
    if (currentNum === -1) {
      newArr.splice(i, 0, currentNum);
    }
  }

  return newArr;
}

module.exports = sortByHeight;
