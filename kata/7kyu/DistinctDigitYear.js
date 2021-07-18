// https://www.codewars.com/kata/58aa68605aab54a26c0001a6

function distinctDigitYear(year) {
  for (let i = year + 1; i < 9999; i++) {
    if (uniqueTest(i)) {
      return i;
    }
  }
}

function uniqueTest(year) {
  let yString = year.toString();
  let y = new Set(yString).size;
  if (y === 4) {
    return true;
  }
}
