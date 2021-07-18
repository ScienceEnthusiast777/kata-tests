function maskify(creditCard) {
  if (creditCard.length < 6) {
    return creditCard;
  }
  let converted = [];
  for (let i = 0; i < creditCard.length; i++) {
    if (isNaN(parseInt(creditCard[i]))) {
      converted.push(creditCard[i]);
    } else if (i < 1 || i > creditCard.length - 5) {
      converted.push(creditCard[i]);
    } else {
      converted.push('#');
    }
  }
  return converted.join('');
}






 
