// https://www.codewars.com/kata/53573877d5493b4d6e00050c

function capital(capitals) {
  let returnArr = [];
  for (let o of capitals) {
    let tempArr = Object.keys(o);
    returnArr.push(`The capital of ${o[tempArr[0]]} is ${o[tempArr[1]]}`);
  }
  return returnArr;
}
