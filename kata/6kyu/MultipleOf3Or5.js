// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number) {
  if (number < 0) {
    return 0;
  }
  let arr = [];
  for (i = 0; i < number; i++) {
    arr.push(i);
  }
  return (toSum = [
    ...new Set(arr.filter((n) => n % 3 === 0 || n % 5 === 0)),
  ].reduce((a, b) => a + b, 0));
}
