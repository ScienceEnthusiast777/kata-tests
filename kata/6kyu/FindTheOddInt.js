// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let temp = {};
  let result = 0;
  for (let i of A) {
    i in temp ? (temp[i] += 1) : (temp[i] = 1);
  }
  for (let i in temp) {
    if (temp[i] % 2 > 0) result = parseInt(i);
  }
  return result;
}
