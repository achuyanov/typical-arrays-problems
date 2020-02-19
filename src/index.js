
exports.min = function min (arr) {
  return validValue(arr) ? srt(arr).pop() : 0;
}

exports.max = function max (arr) {
  return validValue(arr) ? srt(arr)[0] : 0;
}

exports.avg = function avg (arr) {
  return validValue(arr) ? arr.reduce((sum, cur) => sum + cur) / arr.length : 0;
}

const srt = (arr) => arr.sort((a, b) => b - a);
const validValue = (arr) => (arr && arr.length != 0);