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
    }
  }
  return array;
}

snail = function (array, reorderedArray, cycleStarted) {
  cycleStarted = cycleStarted || false;
  if (cycleStarted === false && array[0].length === 0) {
    return [];
  }
  let arrCopy = [...array];
  reorderedArray = reorderedArray || [];
  if (arrCopy.length > 0) {
    let firstLine = arrCopy.shift();
    reorderedArray.push(firstLine);
    for (let i = 0; i < arrCopy.length; i++) {
      let lastEl = arrCopy[i].pop();
      reorderedArray.push(lastEl);
    }
    if (arrCopy.length > 0) {
      let bottomRow = arrCopy.pop();
      while (bottomRow.length > 0) {
        let lastEl = bottomRow.pop();
        reorderedArray.push(lastEl);
      }
      for (let i = arrCopy.length - 1; i >= 0; i--) {
        let firstEl = arrCopy[i].shift();
        reorderedArray.push(firstEl);
      }
    }
    return snail(arrCopy, reorderedArray, true);
  } else {
    let toReturn = reorderedArray.join().split(",");
    for (let i = 0; i < toReturn.length; i++) {
      toReturn[i] = parseInt(toReturn[i]);
    }
    return toReturn;
  }
};

function topThreeWords(text) {
}


module.exports = { snail, removeZeros, topThreeWords };
