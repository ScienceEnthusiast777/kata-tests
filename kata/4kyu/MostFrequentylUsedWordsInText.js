// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
    let toReturn = [];
    let counts = {};
    let separate = text
      .toLowerCase()
      .replace(/[^a-zA-Z ']/g, '')
      .trim()
      .split(' ')
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