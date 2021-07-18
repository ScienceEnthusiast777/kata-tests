// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let soFar = {};
  let count = 0;
  for (let letter of text.toLowerCase()) {
    if (soFar[letter]) {
      soFar[letter]++;
    } else {
      soFar[letter] = 1;
    }
  }
  let values = Object.values(soFar);
  for (let val of values) {
    if (val > 1) {
      count++;
    }
  }
  return count;
}

module.exports = { duplicateCount };
