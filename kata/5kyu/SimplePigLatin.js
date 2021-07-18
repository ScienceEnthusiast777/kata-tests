// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    const splitted = str.split(' ');
    let pLatinAnswer = [];
    for (let word of splitted) {
      if (/[a-zA-Z]/.test(word) === true) {
        let firstLetter = word.slice(0, 1) + 'ay';
        pLatinAnswer.push(word.slice(1) + firstLetter);
        console.log(word);
      } else {
        pLatinAnswer.push(word);
      }
    }
    return pLatinAnswer.join(' ');
  }   