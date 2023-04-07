var humanYearsCatYearsDogYears = function(humanYears) {
    var old = new Array(3);
    if(humanYears == 1){
      old[0] = humanYears;
      old[1] = 15;
      old[2] = 15;
      return old;
    }
    if(humanYears == 2){
      old[0] = humanYears;
      old[1] = 15 + 9;
      old[2] = 15 + 9;
      return old;
    }
    if(humanYears >= 3){
      old[0] = humanYears;
      old[1] = 24 + ((humanYears - 2) * 4);
      old[2] = 24 + ((humanYears - 2) * 5);
      return old;
    }
  }