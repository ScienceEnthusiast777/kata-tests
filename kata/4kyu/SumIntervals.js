//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  let toMinus = 0;
  let count = 0;
  let within = [];
  for (let i = 0; i < intervals.length; i++) {
    for (let innerInterval of intervals) {
      if (intervals[i][1] + 1 === innerInterval[0]) {
        toMinus++;
      }
    }
  }
  for (let interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i++) {
      if (!within.includes(i)) within.push(i);
    }
  }
  within.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < within.length - 1; i++) {
    if (within[i + 1] === within[i] + 1) {
      count++;
    }
  }
  return count - toMinus;
}


//this does not currently pass the tests on codewars. Need to try and figure out what edge case I am missing. 