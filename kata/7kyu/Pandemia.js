// https://www.codewars.com/kata/5e2596a9ad937f002e510435

function infected(s) {
    if (!s.includes('1'||'0')){return 0};
    let pan = s.split('X');
    let infectedPop = 0;
    let population = 0;
    for (string of pan) {
      population += string.length;
      if(string.includes(1)){
        infectedPop += string.length;
      }
    }
    return 100*infectedPop/population;
  }