// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let totalPoints = 0;
  for (game of games) {

    if (parseInt(game[0]) > parseInt(game[2])) {
      totalPoints += 3;
    }
    if (parseInt(game[0]) < parseInt(game[2])) {
      totalPoints += 0;
    }
    if (parseInt(game[0]) === parseInt(game[2])) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}
