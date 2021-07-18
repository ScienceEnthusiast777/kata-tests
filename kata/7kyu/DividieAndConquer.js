// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
  let strNum = 0;
  let numNum = 0;
  for (let i of x) {
    if (typeof i === "string") {
      strNum += Number(i);
    } else {
      numNum += i;
    }
  }
  return numNum - strNum;
}
