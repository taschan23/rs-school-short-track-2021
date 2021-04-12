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
  const arr = n.toString()
    .split('');
  const res = [];
  const min = Math.min.apply(null, arr);
  let current;

  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line radix
    current = parseInt(arr[i]);
    if (current === min) {
      // eslint-disable-next-line radix
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
