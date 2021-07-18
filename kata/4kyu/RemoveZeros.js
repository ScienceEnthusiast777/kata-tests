//https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
    let count = 0;
    for (let i = 0; i < array.length - count; i++) {
      let indexCache = array[i];
      if (array[i] === 0 || array[i] === "0") {
        for (let j = i; j < array.length - 1; j++) {
          if (array[j + 1] === 0 || array[j + 1] === "0") {
            i--;
          }
          array[j] = array[j + 1];
        }
        array[array.length - 1] = indexCache;
        count++;
        console.log(array);
      }
    }
    return array;
  }