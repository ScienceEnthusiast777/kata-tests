function zero(ob) {
    const value = 0;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function one(ob) {
    const value = 1;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function two(ob) {
    const value = 2;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function three(ob) {
    const value = 3;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function four(ob) {
    const value = 4;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function five(ob) {
    const value = 5;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function six(ob) {
    const value = 6;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function seven(ob) {
    const value = 7;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function eight(ob) {
    const value = 8;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  function nine(ob) {
    const value = 9;
    if (ob) {
      let toReturn = parseCalc(ob.num, ob.operand, value);
      return toReturn;
    }
    return value;
  }
  
  function plus(number) {
    let instructions = {
      num: number,
      operand: '+',
    };
    return instructions;
  }
  function minus(number) {
    let instructions = {
      num: number,
      operand: '-',
    };
    return instructions;
  }
  function times(number) {
    let instructions = {
      num: number,
      operand: '*',
    };
    return instructions;
  }
  function dividedBy(number) {
    let instructions = {
      num: number,
      operand: '/',
    };
    return instructions;
  }
  
  function parseCalc(right, operand, left) {
    switch (operand) {
      case '+':
        return left + right;
        break;
      case '-':
        return left - right;
        break;
      case '*':
        return left * right;
        break;
      case '/':
        console.log(left, right);
        return Math.floor(left / right);
        break;
    }
  }