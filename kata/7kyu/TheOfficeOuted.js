// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1 

function outed(meet, boss) {
    console.log(meet);
    console.log(boss);
    let count = 0;
    let am = 0;
    for (employee in meet) {
      let per = employee;
      if (per.includes(boss)) {
        count += meet[per] * 2;
      } else {
        count += meet[per];
      }
      am++;
    }
    let av = count / am;
    if (av <= 5){
      return 'Get Out Now!';
    }
    else {
      return 'Nice Work Champ!';
    }
  }