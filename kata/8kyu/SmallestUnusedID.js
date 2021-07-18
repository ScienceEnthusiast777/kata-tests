// https://www.codewars.com/kata/55eea63119278d571d00006a 

function nextId(ids){
    let firstUnused;
    foundOne = false; 
    for (let i = 0; i < Math.max(...ids); i++){
      if(!ids.includes(i)){
        firstUnused = i;
        foundOne = true;
        break; 
      }
    }
    if ( foundOne === false ){return (Math.max(...ids) + 1)}
    else { return firstUnused;}
  }