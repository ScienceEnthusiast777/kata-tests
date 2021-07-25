// https://www.codewars.com/kata/52597aa56021e91c93000cb0 

var moveZeros = function (arr) {
    let noZero = arr.filter((el) => {
      return el !== 0;
    });
    let diff = arr.length - noZero.length;
    while (diff > 0) {
      noZero.push(0);
      diff--;
    }
    return noZero;
  };

