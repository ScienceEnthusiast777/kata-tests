// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let open = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      open++;
    }
    if (parens[i] === ")") {
      open--;
    }
    if (open < 0) {
      return false;
    }
  }
  return open === 0;
}
