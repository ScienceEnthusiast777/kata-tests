// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/discuss#label-issue

snail = function (array, reorderedArray, cycleStarted) {
    cycleStarted = cycleStarted || false;
    if (cycleStarted === false && array[0].length === 0) {
      return [];
    }
    let arrCopy = [...array];
    reorderedArray = reorderedArray || [];
    if (arrCopy.length > 0) {
      let firstLine = arrCopy.shift();
      reorderedArray.push(firstLine);
      for (let i = 0; i < arrCopy.length; i++) {
        let lastEl = arrCopy[i].pop();
        reorderedArray.push(lastEl);
      }
      if (arrCopy.length > 0) {
        let bottomRow = arrCopy.pop();
        while (bottomRow.length > 0) {
          let lastEl = bottomRow.pop();
          reorderedArray.push(lastEl);
        }
        for (let i = arrCopy.length - 1; i >= 0; i--) {
          let firstEl = arrCopy[i].shift();
          reorderedArray.push(firstEl);
        }
      }
      return snail(arrCopy, reorderedArray, true);
    } else {
      let toReturn = reorderedArray.join().split(',');
      for (let i = 0; i < toReturn.length; i++) {
        toReturn[i] = parseInt(toReturn[i]);
      }
      return toReturn;
    }
  };