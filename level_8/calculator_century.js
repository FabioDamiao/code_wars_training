function century(year) {
    while(year){
      if(year % 100 == 0){
        year = (year / 100);
        return year;
        break;
      }
    year = (year / 100)+1;
    year = Math.trunc(year);
    return year;
      }
  }