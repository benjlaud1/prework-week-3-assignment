var allEvens = [];

function onlyEvens(array) {
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      allEvens.push(array[i]);
    }
  }
}

var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

onlyEvens(numberArray);

console.log(allEvens);
