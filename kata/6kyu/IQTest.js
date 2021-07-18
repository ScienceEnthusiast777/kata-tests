// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers) {
  const numbersArr = numbers.split(" ");
  let odd = [];
  let even = [];
  for (let num of numbersArr) {
    num % 2 === 0 ? even.push(num) : odd.push(num);
  }
  return odd.length === 1
    ? numbersArr.indexOf(odd[0]) + 1
    : numbersArr.indexOf(even[0]) + 1;
}
