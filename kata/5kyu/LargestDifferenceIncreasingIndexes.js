// https://www.codewars.com/kata/52503c77e5b972f21600000e

var largestDifference = function (data) {
  let differences = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] >= data[i]) {
        differences.push(j - i);
      }
    }
  }
  if (differences.length === 0) {
    return 0;
  }
  return Math.max(...differences);
};
