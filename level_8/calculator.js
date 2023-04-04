function basicOp(operation, value1, value2)
{
  var result;
  switch(operation){
      case '+':
      result = value1 + value2;
      return result;
      break;
      case '-':
      result = value1 - value2;
      return result;
      break;
      case '*':
      result = value1 * value2;
      return result;
      break;
      case '/':
      result = value1 / value2;
      return result;
      break;
      default: break;
  }
}