// https://www.codewars.com/kata/526d42b6526963598d0004db

var CaesarCipher = function (shift) {
    this.shift = shift;
    this.encode = (encode) => {
      var toEnc = encode.toLowerCase();
      var toReturn = '';
      for (let i = 0; i < toEnc.length; i++) {
        console.log(toEnc[i].charCodeAt());
        if (toEnc[i] === ' ') {
          toReturn += ' ';
        } else if (toEnc[i].charCodeAt() + this.shift > 122) {
          var toAdjust = toEnc[i].charCodeAt() + this.shift - 122;
          toReturn += String.fromCharCode(96 + toAdjust).toUpperCase();
        } else {
          toReturn += String.fromCharCode(
            toEnc[i].charCodeAt() + this.shift
          ).toUpperCase();
        }
      }
      return toReturn;
    };
    this.decode = (decode) => {
      var toDec = decode.toLowerCase();
      var toReturn = '';
      for (let i = 0; i < toDec.length; i++) {
        if (toDec[i] === ' ') {
          toReturn += ' ';
        } else if (toDec[i].charCodeAt() - this.shift < 97) {
          var toAdjust = 97 - (toDec[i].charCodeAt() - this.shift);
          toReturn += String.fromCharCode(123 - toAdjust).toUpperCase();
        } else {
          toReturn += String.fromCharCode(
            toDec[i].charCodeAt() - this.shift
          ).toUpperCase();
        }
      }
      console.log(toReturn);
      return toReturn;
    };
  };
  
  const a = new CaesarCipher(5);
  
  console.log(a.encode('Codewars'), a.decode('BFKKQJX'));