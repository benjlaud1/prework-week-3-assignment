function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // crateMax is the maximum widget capacity of the crate
  // crates start empty
  var widgets = 0;
  // write a while loop that puts more widgets in the crate until it is full
  // return the number of widgets added to the crate in the while loop
  while (maxCapacity > widgets) {
    widgets++;
  }
  return widgets;
} // end fillCrate

var crateMax = 20;

console.log(fillCrate(crateMax),'widgets were added to this crate.');
