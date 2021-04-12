/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = String(n)
    .split('');
  // eslint-disable-next-line radix
  const res = arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  return res >= 10 ? getSumOfDigits(res) : res;
}

module.exports = getSumOfDigits;
