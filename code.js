var possibleNumbers = [5,4,1,3]
function arrayTotal(theArray){
  var total = 0;
  for(var i = 0; i < theArray.length; i++){
    total  += theArray[i];
  }
  return total;
}
function flywheel(possiblities){
  var sumofArray = arrayTotal(possiblities);
  var spin = Math.floor(Math.random() * (sumofArray ));
  
  if(0 < spin && spin < ( possiblities[0] + 1)){
    return "Entry value: " + possiblities[0] + ", spin value: " + spin;
  } else if((possiblities[0]) < spin && spin < (possiblities[0] + possiblities[1] + 1)){
    return "Entry value: " + possiblities[1] + ", spin value: " + spin;
  } else if((possiblities[0] + possiblities[1] > spin && spin > (possiblities[0] + possiblities[1] + possiblities[2] + 1))){
    return "Entry value: " + possiblities[2] + ", spin value: " + spin;
  } else {
    return "Entry value: " + possiblities[3] + ", spin value: " + spin;
  }
}

/*
A better way of implementing this is:
function flywheel(possiblities){
  function arrayTotal(theArray){
    var total = 0;
    for(var i = 0; i < theArray.length; i++){
      total  += theArray[i];
    }
    return total;
  }
  var sumofArray = arrayTotal(possiblities);
  var spin = Math.floor(Math.random() * (sumofArray));
  return spin;
}

flywheel([5,4,1,3]);
*/

flywheel(possibleNumbers);
flywheel(possibleNumbers);
flywheel(possibleNumbers);
flywheel(possibleNumbers);
