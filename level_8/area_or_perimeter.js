const areaOrPerimeter = function(l , w) {
    var result;
    if(l == w){
      result = l * w;
      return result;
    }
    if(l > w || l < w){
      result = l + w;
      result = result * 2;
      return result;
    }
};