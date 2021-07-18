// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr) {
  let record = {};
  for (let i = 0; i < arr.length; i++) {
    record[arr[i]] !== undefined ? (record[arr[i]] += 1) : (record[arr[i]] = 1);
  }
  const highestKey = Object.keys(record).reduce((a, b) => {
    return record[a] > record[b] ? a : b;
  });

  return parseInt(highestKey);
}
