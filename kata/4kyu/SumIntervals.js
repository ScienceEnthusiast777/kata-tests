//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

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


//this does not currently pass the tests on codewars. Need to try and figure out what edge case I am missing. 