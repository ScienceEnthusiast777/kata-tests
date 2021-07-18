// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  let t = [];
  for (let ingredient in recipe) {
    if (available[ingredient] == null) {
      t.push(0 / recipe[ingredient]);
    } else {
      t.push(available[ingredient] / recipe[ingredient]);
    }
  }
  let a = t.sort((a, b) => {
    return a - b;
  });
  return Math.floor(a[0]);
}
