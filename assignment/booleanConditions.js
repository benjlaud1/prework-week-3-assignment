function isCartonFull( eggsInCarton, cartonCapacity ){
  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
  if (eggsInCarton === cartonCapacity) {
    return true;
  } else {
    return false;
  }
} // end checkIfCartonIsFull

console.log('Is this carton full?',isCartonFull(12,12));
console.log('Is this carton full?',isCartonFull(10,12));
