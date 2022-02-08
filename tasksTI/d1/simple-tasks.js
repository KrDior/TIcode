//1 Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
exports.es5 = function (array) {
  return array.reduce(function (memo, num) {
    return memo + num;
  }, array.length);
};
