function bmi(weight, height) {
    var bmi = weight / (height * height);
    if (bmi <= 18.5)
      return "Underweight";
    if (bmi >= 18.6 && bmi <= 25.0)
      return "Normal";
    if (bmi >= 25.1 && bmi <= 30.0)
      return "Norma";
    if (bmi > 30.0)
      return "Obese";
  }