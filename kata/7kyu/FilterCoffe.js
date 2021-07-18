// https://www.codewars.com/kata/56069d0c4af7f633910000d3

function search(budget, prices) {
  let inBudget = [];
  for (let price of prices) {
    if (price <= budget) {
      inBudget.push(price);
    }
  }
  let sorted = inBudget.sort((a, b) => a - b);
  return sorted.toString();
}
