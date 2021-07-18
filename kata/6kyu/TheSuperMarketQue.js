// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let checkouts = [];
  for (let i = 0; i < n; i++) {
    checkouts.push(0);
  }
  for (cust of customers) {
    checkouts[checkouts.indexOf(Math.min(...checkouts))] += cust;
  }
  return Math.max(...checkouts);
}
