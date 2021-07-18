// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number) {
  let numeral = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M", "MM", "MMM"],
  ];
  let numStr = number.toString();
  let roman = [];
  let count = 0;
  for (char of numStr) {
    if (parseInt(char) === 0) {
      count++;
    } else {
      roman.push(numeral[numStr.length - 1 - count][parseInt(char) - 1]);
      count++;
    }
  }
  return roman.join("");
}
