// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
    let result = [];
   for(let i =0; i < numbers.length; i++){
     for(let n=(numbers.length-1); n>=0; n--){
       if(numbers[i]+numbers[n]===target){result.push(i,n);return result;}
     }
   }
    return result; 
  }