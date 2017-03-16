// remember! array indices start at 0

var colors = ['red', 'blue', 'yellow'];

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
var theColorYellow = colors[2];
// what happens if we access an index that has no element?
// uncomment the following line and replace ____ with the appropriate code
var fortyThirdColor = colors[42]; // this variable will be undefined 3-15-17 BLL

function lastItem( array ) {
  // this function accepts an array as an argument
  // have it return the last item in the array
  return (array[array.length - 1]);
}

console.log(lastItem(colors));
