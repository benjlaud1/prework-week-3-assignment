function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  var isTrue;
  switch (today) {
    case 'saturday':
      isTrue = true;
      break;
    case 'sunday':
      isTrue = true;
      break;
    default:
      isTrue = false;
      break;
  }
  return isTrue;
} // end checkDay

console.log(checkDay('saturday'));
console.log(checkDay('monday'));


var printOut = onlyEvens(numbers);
console.log(printOut);
