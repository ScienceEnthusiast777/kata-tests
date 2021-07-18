// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  if (num / 10 < 1) {
    return 0;
  }
  let numArr = num
    .toString()
    .split("")
    .map((x) => parseInt(x));
  let done = false;
  let count = 1;
  while (done === false) {
    let curr = numArr.reduce((acc, e) => acc * e);
    if (curr / 10 < 1) {
      done = true;
    } else {
      count++;
      numArr = curr
        .toString()
        .split("")
        .map((x) => parseInt(x));
    }
  }
  return count;
}
