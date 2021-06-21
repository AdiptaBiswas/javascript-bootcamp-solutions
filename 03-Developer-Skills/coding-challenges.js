// Developer Skills & Editor Setup

// Coding Challenge #1
printForecast = function (tempArr) {
  for (let temp = 0; temp < tempArr.length; temp++) {
    console.log(String(tempArr[temp]) + "ºC in " + String(temp + 1) + " days.");
  }
};
printForecast([12, 5, -5, 0, 4]);
