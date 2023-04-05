function grow(x){
    var multi = 1;
  x.forEach(function(x) {
    multi = multi * x;
  });
    return multi;
  }