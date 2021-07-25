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
  let toReturn = [];
  let counts = {};
  let separate = text
    .toLowerCase()
    .replace(/[^a-zA-Z ']/g, "")
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
  for (let word of separate) {
    counts[word] === undefined ? (counts[word] = 1) : (counts[word] += 1);
  }
  let topVals = Object.values(counts)
    .sort((a, b) => b - a)
    .splice(0, 3);
  for (let i = 0; i < topVals.length; i++) {
    let found = Object.keys(counts).find((key) => counts[key] === topVals[i]);
    toReturn.push(found);
    counts[found] = 0;
  }
  if (toReturn == "'") {
    toReturn = [];
  }
  return toReturn;
}

function sumIntervals(intervals) {
  let positions = [];
  for (let interval of intervals) {
    if (interval[1] === interval[0] + 1) {
      if (!positions.includes(String(interval))) {
        positions.push(String(interval));
      }
    } else {
      for (let i = interval[0]; i < interval[1]; i++) {
        if (!positions.includes(String([i, i + 1]))) {
          positions.push(String([i, i + 1]));
        }
      }
    }
  }
  return positions.length;
}

module.exports = { snail, removeZeros, topThreeWords, sumIntervals };
