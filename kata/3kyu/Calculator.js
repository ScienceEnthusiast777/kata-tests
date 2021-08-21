const Calculator = function () {
    let inputs = [];
    this.evaluate = (string) => {
      inputs = string.split(' ');
      while (inputs.indexOf('/') > 0 || inputs.indexOf('*') > 0) {
        inputs = this.divMultParser(inputs);
      }
      while (inputs.indexOf('+') > 0 || inputs.indexOf('-') > 0) {
        inputs = this.plusMinusParser(inputs);
      }
      return inputs[0];
    };
    this.divMultParser = (arr) => {
      let toReturn = [...arr];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '*') {
          let res = +arr[i - 1] * +arr[i + 1];
          toReturn.splice(i - 1, 3, res);
          return toReturn;
        } else if (arr[i] === '/') {
          let res = +arr[i - 1] / +arr[i + 1];
          toReturn.splice(i - 1, 3, res);
          return toReturn;
        }
      }
      return toReturn;
    };
    this.plusMinusParser = (arr) => {
      let toReturn = [...arr];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
          let res = +arr[i - 1] + +arr[i + 1];
          toReturn.splice(i - 1, 3, res);
          return toReturn;
        } else if (arr[i] === '-') {
          let res = +arr[i - 1] - +arr[i + 1];
          toReturn.splice(i - 1, 3, res);
          return toReturn;
        }
      }
      return toReturn;
    };
  };