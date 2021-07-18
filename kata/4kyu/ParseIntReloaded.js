// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

const single = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  
  const teen = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  
  const doubleDigit = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  
  const larger = { hundred: 100, thousand: 1000, million: 1000000 };
  const largerKeys = Object.keys(larger);
  
  function parseInt(string) {
    let millions = 0;
    let thousands = 0;
    let hundreds = 0;
    let toTotalAndReturn = [];
    let toTotal = [];
    let removeDash = string.split('-').join(' ');
    let splitted = removeDash.split(' ');
    while (splitted.indexOf('and') > -1) {
      splitted.splice(splitted.indexOf('and'), 1);
    }
    for (let i = 0; i < splitted.length; i++) {
      if (single.includes(splitted[i])) {
        if (toTotal.length === 0) {
          toTotal.push(single.indexOf(splitted[i]));
        } else {
          toTotal[toTotal.length - 1] += single.indexOf(splitted[i]);
        }
      }
      if (teen.includes(splitted[i])) {
        if (toTotal.length === 0) {
          toTotal.push(11 + teen.indexOf(splitted[i]));
        } else {
          toTotal[toTotal.length - 1] += teen.indexOf(splitted[i]);
        }
      }
      if (doubleDigit.includes(splitted[i])) {
        if (toTotal.length === 0) {
          toTotal.push((doubleDigit.indexOf(splitted[i]) + 2) * 10);
        } else {
          toTotal[toTotal.length - 1] += doubleDigit.indexOf(splitted[i]);
        }
      }
      if (largerKeys.includes(splitted[i])) {
        let toMult = 0;
        if (toTotal.length > 0) {
          toMult = toTotal.pop();
        }
        if (splitted[i] === 'thousand' && toTotalAndReturn.length > 0) {
          toMult += toTotalAndReturn.pop();
        }
        toTotalAndReturn.push(toMult * larger[splitted[i]]);
      }
    }
    if (toTotal.length > 0) {
      toTotalAndReturn.push(...toTotal);
    }
    return toTotalAndReturn.reduce((a, b) => {
      return a + b;
    });
  }
  
  parseInt('seven hundred thousand');
  