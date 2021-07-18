// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
    if(cc.length<=4){return cc;}
  let newString = cc.slice(cc.length - 4);
    let otherNewString = cc.slice(0, -4);
    let xS = [];
    for (let i = 0; i < otherNewString.length; i++) {
      xS.push('#');
    }
    
    return xS.join('') + newString;
  }