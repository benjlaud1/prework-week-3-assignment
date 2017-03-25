function shoesOnTheBus( ArrayOfKidsOnBus ){
  // This function accepts an array of kids on the bus.
  // Assume each kid on the bus is wearing 2 shoes.
  // Write a for loop to count how many shoes are on the bus AND console log "Nice shoes!" for each student.
  // This function should return the number of shoes on the bus.
  var totalShoes = 0;
  for (var i = 0; i < ArrayOfKidsOnBus.length; i++) {
    totalShoes += 2;
    console.log('Nice shoes', ArrayOfKidsOnBus[i] + '!');
  }
  return totalShoes;
} // end shoesOnTheBus

var kidsOnTheBus = ['Victoria', 'Ottoleigh', 'Cayla', 'Ben'];
shoesOnTheBus(kidsOnTheBus);
