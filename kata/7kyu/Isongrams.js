// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }
  let newStr = str
    .toLowerCase()
    .split("")
    .filter((char, i, s) => s.indexOf(char.toLowerCase()) == i)
    .join("");
  return str.length > newStr.length ? false : true;
}
