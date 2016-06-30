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
    return possiblities[0];
  } else if((possiblities[0]) < spin && spin < (possiblities[0] + possiblities[1] + 1)){
    return possiblities[1];
  } else if((possiblities[0] + possiblities[1] > spin && spin > (possiblities[0] + possiblities[1] + possiblities[2] + 1))){
    return possiblities[2];
  } else {
    return possiblities[3];
  }
}

flywheel(possibleNumbers);
flywheel(possibleNumbers);
flywheel(possibleNumbers);
flywheel(possibleNumbers);
