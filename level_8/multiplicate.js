function simpleMultiplication(number) {   
    var mod = number % 2;
    if(mod == 0)
      number = number * 8;
    if(mod == 1)
      number = number * 9;
    return number;
  }