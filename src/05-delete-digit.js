/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString()
    .split('');
  let res = [];
  let min = Math.min.apply(null, arr);

  for (let i = 0; i < arr.length; i++) {
    let current = parseInt(arr[i]);
    if (current === min) {
      if (current === parseInt(arr[i - 1])) {
        res.push(current);
      }
    } else {
      res.push(current);
    }
  }

  return Number(res.join(''));

}

module.exports = deleteDigit;
