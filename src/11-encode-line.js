/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let counter = 1;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    let sep = '';
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      if (counter > 1) sep = counter;
      res.push(sep);
      res.push(arr[i]);
      counter = 1;
    }
  }
  return res.join('');
}

module.exports = encodeLine;
