// https://www.codewars.com/kata/57ed4cef7b45ef8774000014

function boredom(staff) {
    let lookup = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
    let temp = [];
    Object.values(staff).forEach((val) => temp.push(val));
    let num = 0;
    for (let el of temp) {
      num += lookup[el];
    }
    if (num <= 80) {
      return 'kill me now';
    }
    if (num < 100 && num > 80) {
      return 'i can handle this';
    }
    if (num > 100) {
      return 'party time!!';
    }
  }