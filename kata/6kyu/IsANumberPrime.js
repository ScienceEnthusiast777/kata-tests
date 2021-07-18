// https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
