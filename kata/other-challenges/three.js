function dirReduc(arr) {
    let simplified = [];
    for (let dir of arr) {
      switch (dir) {
        case 'NORTH':
          if (
            simplified.length > 0 &&
            simplified[simplified.length - 1] === 'SOUTH'
          ) {
            simplified.pop();
          } else {
            simplified.push(dir);
          }
          break;
        case 'SOUTH':
          if (
            simplified.length > 0 &&
            simplified[simplified.length - 1] === 'NORTH'
          ) {
            simplified.pop();
          } else {
            simplified.push(dir);
          }
          break;
        case 'EAST':
          if (
            simplified.length > 0 &&
            simplified[simplified.length - 1] === 'WEST'
          ) {
            simplified.pop();
          } else {
            simplified.push(dir);
          }
          break;
        case 'WEST':
          if (
            simplified.length > 0 &&
            simplified[simplified.length - 1] === 'EAST'
          ) {
            simplified.pop();
          } else {
            simplified.push(dir);
          }
          break;
      }
    }
    return simplified;
  }