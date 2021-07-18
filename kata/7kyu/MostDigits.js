// https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array) {
  let leng = [];
  let high = 0;
  for (let i = 0; i < array.length; i++) {
    leng.push(array[i].toString().length);
  }
  high = Math.max(...leng);
  const filtered = array.filter((num) => num.toString().length === high);
  return filtered[0];
}
