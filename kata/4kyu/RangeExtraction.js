// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/solutions/javascript

function getOpenings(arr) {
    let open = false;
    let openings = [];
    let startEnd = [];
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      if (arr[j] === arr[i] + 1) {
        if (open === false) {
          open = true;
          startEnd.push(arr[i]);
          startEnd.push(arr[j]);
        } else {
          startEnd.push(arr[j]);
        }
      } else {
        open = false;
        if (startEnd.length > 0) {
          openings.push([startEnd[0], startEnd[startEnd.length - 1]]);
        }
        if (arr[i] !== startEnd[startEnd.length - 1]) {
          openings.push([arr[i]]);
        }
        startEnd = [];
      }
    }
    return openings;
  }
  
  function solution(list) {
    let openings = getOpenings(list);
  
    return openings
      .map((e) => {
        if (e.length === 1) {
          return String(e[0]);
        } else {
          if (e[0] === e[1] - 1) {
            return String(e[0]) + ',' + String(e[1]);
          } else {
            return String(e[0]) + '-' + String(e[1]);
          }
        }
      })
      .join(',');
  }
  