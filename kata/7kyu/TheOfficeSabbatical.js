// https://www.codewars.com/kata/57fe50d000d05166720000b1 

function sabb(s, val, happiness) {
    let sabbatical = 'sabbatical';
    let sabCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (sabbatical.includes(s.charAt(i))) {
        sabCount++;
      }
    }
    if (sabCount + val + happiness > 22) {
      return 'Sabbatical! Boom!';
    } else return 'Back to your desk, boy.';
  }