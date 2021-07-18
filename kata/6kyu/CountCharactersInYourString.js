// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  if (string.length === 0) {
    return {};
  }
  var j = [...new Set(string)];
  var o = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in o) {
      o[string[i]]++;
    } else {
      o[string[i]] = 1;
    }
  }
  return o;
}
