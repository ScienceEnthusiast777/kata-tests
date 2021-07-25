// https://www.codewars.com/users/atrathbone
function validISBN10(isbn) {
  let sum = 0;
  if (isbn.length !== 10) {
    return false;
  }
  let splitted = isbn.split("");
  if (splitted[9] === "X") {
    splitted[9] = "10";
  }
  let intAgain = splitted.map((e) => {
    return parseInt(e);
  });
  if (intAgain.includes(NaN)) {
    return false;
  }
  for (let i = 0; i < 10; i++) {
    sum += (i + 1) * intAgain[i];
  }
  return sum % 11 === 0;
}
