// https://www.codewars.com/kata/585a033e3a36cdc50a00011c

function freqSeq(str, sep) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str.charAt(i)]) {
      freq[str.charAt(i)]++;
    } else {
      freq[str.charAt(i)] = 1;
    }
  }
  let freqNum = [];
  for (let c of str) {
    freqNum.push(freq[c]);
  }
  return freqNum.join(sep);
}
