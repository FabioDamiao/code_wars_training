function twiceAsOld(dadYearsOld, sonYearsOld) {
    var  i;
    if(dadYearsOld >= (sonYearsOld * 2)){
      i = dadYearsOld - (sonYearsOld * 2);
      return i;
    }
    else{
      i = (sonYearsOld * 2) - dadYearsOld;
      return i;
    }
}